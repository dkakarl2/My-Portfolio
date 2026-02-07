import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

// ── Color helpers ──────────────────────────────────────────────

/** Relative luminance (WCAG formula) – 0 = black, 1 = white */
function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r / 255, g / 255, b / 255].map((c) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/** Parse "rgb(…)" / "rgba(…)" → [r,g,b] or null if transparent */
function parseColor(color: string): [number, number, number] | null {
  if (!color || color === "transparent" || color === "rgba(0, 0, 0, 0)")
    return null;
  const m = color.match(/rgba?\(\s*(\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  if (!m) return null;
  // Treat very-transparent colours as "no background"
  if (m[4] !== undefined && parseFloat(m[4]) < 0.15) return null;
  return [parseInt(m[1]), parseInt(m[2]), parseInt(m[3])];
}

/** Walk up the DOM and return the first opaque background colour */
function getEffectiveBackgroundColor(
  el: Element | null
): [number, number, number] {
  let current = el;
  while (current && current !== document.documentElement) {
    const bg = window.getComputedStyle(current).backgroundColor;
    const rgb = parseColor(bg);
    if (rgb) return rgb;
    current = current.parentElement;
  }
  // Fallback: assume the page background is white
  return [255, 255, 255];
}

/**
 * If `el` is (or is inside) an <img>, try to sample the exact pixel
 * at (clientX, clientY) via an offscreen canvas.
 */
function sampleImagePixel(
  el: Element | null,
  clientX: number,
  clientY: number,
  canvas: HTMLCanvasElement
): [number, number, number] | null {
  // Find nearest <img>
  const img =
    el?.tagName === "IMG"
      ? (el as HTMLImageElement)
      : (el?.closest("img") as HTMLImageElement | null);
  if (!img || !img.complete || img.naturalWidth === 0) return null;

  try {
    const rect = img.getBoundingClientRect();
    const sx = ((clientX - rect.left) / rect.width) * img.naturalWidth;
    const sy = ((clientY - rect.top) / rect.height) * img.naturalHeight;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return null;

    canvas.width = 1;
    canvas.height = 1;
    ctx.drawImage(img, sx, sy, 1, 1, 0, 0, 1, 1);

    const d = ctx.getImageData(0, 0, 1, 1).data;
    if (d[3] < 10) return null; // transparent pixel
    return [d[0], d[1], d[2]];
  } catch (_e) {
    // CORS-tainted canvas – fall through
    return null;
  }
}

// ── Component ──────────────────────────────────────────────────

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [cursorColor, setCursorColor] = useState("rgba(0, 0, 0, 1)");
  const cursorRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const lastSampleTime = useRef(0);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Hidden canvas for image-pixel sampling
  useEffect(() => {
    canvasRef.current = document.createElement("canvas");
    return () => {
      canvasRef.current = null;
    };
  }, []);

  // Detect touch device
  useEffect(() => {
    const check = () => {
      const hasTouch =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const small = window.matchMedia("(max-width: 1023px)").matches;
      setIsTouchDevice(hasTouch && small);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Is the element (or an ancestor) clickable?
  const isClickable = useCallback((el: Element | null): boolean => {
    if (!el) return false;
    const tag = el.tagName.toLowerCase();
    if (
      tag === "a" ||
      tag === "button" ||
      tag === "input" ||
      tag === "textarea" ||
      tag === "select" ||
      tag === "label"
    )
      return true;
    const role = el.getAttribute("role");
    if (role === "button" || role === "link" || el.getAttribute("tabindex"))
      return true;
    if ((el as HTMLElement).onclick) return true;
    if (el.classList.contains("cursor-pointer")) return true;
    if (window.getComputedStyle(el).cursor === "pointer") return true;
    return el.parentElement ? isClickable(el.parentElement) : false;
  }, []);

  // Main event listeners
  useEffect(() => {
    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);

      const target = document.elementFromPoint(e.clientX, e.clientY);
      setIsHovering(isClickable(target));

      // Throttle colour sampling to ~60 ms
      const now = performance.now();
      if (now - lastSampleTime.current < 60) return;
      lastSampleTime.current = now;

      // 1) Try pixel-perfect image sampling
      let rgb: [number, number, number] | null = null;
      if (canvasRef.current) {
        rgb = sampleImagePixel(target, e.clientX, e.clientY, canvasRef.current);
      }
      // 2) Fallback: walk DOM for computed backgroundColor
      if (!rgb) {
        rgb = getEffectiveBackgroundColor(target);
      }

      const lum = getLuminance(rgb[0], rgb[1], rgb[2]);
      // Dark background → white cursor, light background → black cursor
      setCursorColor(lum < 0.4 ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)");
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener(
        "mouseenter",
        onMouseEnter
      );
    };
  }, [isTouchDevice, mouseX, mouseY, isClickable]);

  if (isTouchDevice) return null;

  const defaultSize = 12;
  const hoverSize = 18;
  const currentSize = isHovering ? hoverSize : defaultSize;

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none"
      style={{
        x: cursorX,
        y: cursorY,
        zIndex: 99999,
      }}
      animate={{
        opacity: isVisible ? (isHovering ? 0.75 : 1) : 0,
        scale: isClicking ? 0.75 : 1,
      }}
      transition={{
        opacity: { duration: 0.15 },
        scale: { type: "spring", stiffness: 500, damping: 20 },
      }}
    >
      <motion.div
        className="rounded-full"
        animate={{
          width: currentSize,
          height: currentSize,
          backgroundColor: cursorColor,
        }}
        transition={{
          width: { type: "spring", stiffness: 400, damping: 25 },
          height: { type: "spring", stiffness: 400, damping: 25 },
          backgroundColor: { duration: 0.15, ease: "easeOut" },
        }}
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </motion.div>
  );
}