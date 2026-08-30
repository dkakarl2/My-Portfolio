import { useEffect, useRef } from 'react';
import Matter from 'matter-js';

export function InteractivePhysics() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const hasDropped = useRef(false);

  useEffect(() => {
    if (!sceneRef.current) return;

    const Engine = Matter.Engine,
          Render = Matter.Render,
          Runner = Matter.Runner,
          MouseConstraint = Matter.MouseConstraint,
          Mouse = Matter.Mouse,
          World = Matter.World,
          Bodies = Matter.Bodies,
          Composite = Matter.Composite,
          Body = Matter.Body;

    // create engine
    const engine = Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    // Height of our canvas
    const CANVAS_HEIGHT = 450;
    // Ground Y position - exactly at the bottom of the canvas
    const GROUND_Y = CANVAS_HEIGHT + 25;

    // create renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: sceneRef.current.clientWidth,
        height: CANVAS_HEIGHT,
        background: 'transparent',
        wireframes: false,
        pixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio : 1,
      }
    });

    Render.run(render);

    // create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Add boundaries (walls and ground)
    const addBoundaries = () => {
      const width = render.options.width!;
      
      // Ground is exactly at the bottom. We make it 50px thick, centered at CANVAS_HEIGHT + 25, 
      // so its top edge is exactly at CANVAS_HEIGHT.
      const ground = Bodies.rectangle(width / 2, GROUND_Y, width * 2, 50, { 
        isStatic: true, 
        render: { fillStyle: 'transparent' } 
      });
      
      // Invisible side walls
      const leftWall = Bodies.rectangle(-30, CANVAS_HEIGHT / 2, 60, CANVAS_HEIGHT * 2, { 
        isStatic: true, 
        render: { fillStyle: 'transparent' } 
      });
      const rightWall = Bodies.rectangle(width + 30, CANVAS_HEIGHT / 2, 60, CANVAS_HEIGHT * 2, { 
        isStatic: true, 
        render: { fillStyle: 'transparent' } 
      });
      
      Composite.add(world, [ground, leftWall, rightWall]);
      return { ground, leftWall, rightWall };
    };
    
    let boundaries = addBoundaries();

    // Humaan-like vivid palette (Cyan, Green, Yellow, Pink)
    const colors = ['#FDE047', '#F9A8D4', '#67E8F9', '#86EFAC'];

    // Generate shapes to drop later
    const generateShapes = () => {
      const shapes: Matter.Body[] = [];
      const width = render.options.width!;
      
      const createArc = (x: number, y: number, radius: number, thickness: number, color: string, startAngle: number, endAngle: number, segments: number) => {
          const parts = [];
          const angleStep = (endAngle - startAngle) / segments;
          
          for (let i = 0; i < segments; i++) {
              const angle = startAngle + i * angleStep + angleStep / 2;
              const len = (radius * angleStep) * 1.5; // larger overlap to prevent white gaps
              
              const px = x + Math.cos(angle) * radius;
              const py = y + Math.sin(angle) * radius;
              
              parts.push(Bodies.rectangle(px, py, thickness, len, {
                  angle: angle, 
                  render: { fillStyle: color, strokeStyle: color, lineWidth: 1 }
              }));
          }
          
          return Body.create({
              parts: parts,
              restitution: 0.4,
              friction: 0.1,
          });
      };

      for (let i = 0; i < 15; i++) {
          // Spawn freely across the entire line
          const x = width * 0.05 + Math.random() * (width * 0.9);
          const y = -Math.random() * 800 - 200; 
          const color = colors[Math.floor(Math.random() * colors.length)];
          const type = Math.floor(Math.random() * 6); 
          
          let body;
          const thickness = 25 + Math.random() * 10;
          
          if (type === 0) {
              // Semi-circle (U-shape)
              const radius = 60 + Math.random() * 20;
              body = createArc(x, y, radius, thickness, color, 0, Math.PI, 18);
          } else if (type === 1) {
              // Quarter-circle (J-shape)
              const radius = 70 + Math.random() * 20;
              body = createArc(x, y, radius, thickness, color, 0, Math.PI / 2, 10);
          } else if (type === 2) {
              // Plus sign / Cross
              const size = 100 + Math.random() * 30;
              const part1 = Bodies.rectangle(x, y, size, thickness, { render: { fillStyle: color } });
              const part2 = Bodies.rectangle(x, y, thickness, size, { render: { fillStyle: color } });
              body = Body.create({ parts: [part1, part2], restitution: 0.4 });
          } else if (type === 3) {
              // Ring (Hollow Circle)
              const radius = 50 + Math.random() * 20;
              body = createArc(x, y, radius, thickness, color, 0, Math.PI * 2, 24);
          } else if (type === 4) {
              // Straight Bar
              const length = 120 + Math.random() * 60;
              body = Bodies.rectangle(x, y, length, thickness, {
                  render: { fillStyle: color },
                  restitution: 0.4
              });
          } else {
              // L-Shape
              const size1 = 100 + Math.random() * 30;
              const size2 = 80 + Math.random() * 20;
              const part1 = Bodies.rectangle(x, y, size1, thickness, { render: { fillStyle: color } });
              const part2 = Bodies.rectangle(x - size1/2 + thickness/2, y + size2/2 - thickness/2, thickness, size2, { render: { fillStyle: color } });
              body = Body.create({ parts: [part1, part2], restitution: 0.4 });
          }
          
          Body.setAngle(body, Math.random() * Math.PI * 2);
          shapes.push(body);
      }
      return shapes;
    };

    // add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    mouse.pixelRatio = render.options.pixelRatio!;
    Composite.add(world, mouseConstraint);
    render.mouse = mouse;

    // Handle Resize
    const handleResize = () => {
      if (!sceneRef.current) return;
      const newWidth = sceneRef.current.clientWidth;
      
      render.canvas.width = newWidth * (window.devicePixelRatio || 1);
      render.canvas.height = CANVAS_HEIGHT * (window.devicePixelRatio || 1);
      
      render.options.width = newWidth;
      render.options.height = CANVAS_HEIGHT;
      
      // Update boundary positions
      Composite.remove(world, [boundaries.ground, boundaries.leftWall, boundaries.rightWall]);
      boundaries = addBoundaries();
    };

    window.addEventListener('resize', handleResize);

    // Setup Intersection Observer to drop shapes
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasDropped.current) {
        hasDropped.current = true;
        const shapes = generateShapes();
        Composite.add(world, shapes);
      }
    }, { threshold: 0.1 });

    observer.observe(sceneRef.current);

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      Render.stop(render);
      Runner.stop(runner);
      if (engineRef.current) {
        World.clear(engineRef.current.world, false);
        Engine.clear(engineRef.current);
      }
      render.canvas.remove();
      render.canvas = null as any;
      render.context = null as any;
      render.textures = {};
    };
  }, []);

  return (
    <div 
      ref={sceneRef} 
      className="w-full h-[450px] absolute -bottom-[1px] right-0 pointer-events-auto z-0 border-b-2 border-[#06D6A0]" 
      style={{ overflow: 'hidden' }}
    />
  );
}
