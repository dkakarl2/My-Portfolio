import image_cc322fdb955266b4239a08cdaaf55a4d70bddc2f from 'figma:asset/cc322fdb955266b4239a08cdaaf55a4d70bddc2f.png';
import image_45937b15b6dd83612829a2526de4c37042f3cd52 from 'figma:asset/45937b15b6dd83612829a2526de4c37042f3cd52.png';
import image_41a99f2133d6f03b74a53297a259040a59caaa75 from 'figma:asset/41a99f2133d6f03b74a53297a259040a59caaa75.png';
import image_638837e2f064a02348bcb41a22a6f12d7d9e874e from 'figma:asset/638837e2f064a02348bcb41a22a6f12d7d9e874e.png';
import image_aa9661998ba4886211e228f65830caec85e82518 from 'figma:asset/aa9661998ba4886211e228f65830caec85e82518.png';
import image_2b8bffd76f419f68be1a74616b439c493c27366f from 'figma:asset/2b8bffd76f419f68be1a74616b439c493c27366f.png';
import image_5c1f25d444ae857f9b01432b41ba7b99f368b72d from 'figma:asset/5c1f25d444ae857f9b01432b41ba7b99f368b72d.png';
import image_b7c01e74a64fd96e4c13cd41c48bfb17f2c0bad3 from 'figma:asset/b7c01e74a64fd96e4c13cd41c48bfb17f2c0bad3.png';
import image_92bbaae6eb25f3f050d2f64bf869553e28ada3ae from 'figma:asset/92bbaae6eb25f3f050d2f64bf869553e28ada3ae.png';
import image_a4ce7b75bc3381aa9528da69d2ddd89ffd9c3953 from 'figma:asset/a4ce7b75bc3381aa9528da69d2ddd89ffd9c3953.png';
import image_f81a6c0ccc84bcc8481a2d2d7f46254f5949cd55 from 'figma:asset/f81a6c0ccc84bcc8481a2d2d7f46254f5949cd55.png';
import image_6d8b514b723f2e42abc5e00c48999517f0b6cfc2 from 'figma:asset/6d8b514b723f2e42abc5e00c48999517f0b6cfc2.png';
import image_37c07083b625b022ea7cf3be764f2645812ae6cb from 'figma:asset/37c07083b625b022ea7cf3be764f2645812ae6cb.png';
import image_5097bfc94a935008523f6fc761a0edb464f31a7b from 'figma:asset/5097bfc94a935008523f6fc761a0edb464f31a7b.png';
import image_7392c6e4c353b3331c85a8396d2df897aafc9473 from 'figma:asset/7392c6e4c353b3331c85a8396d2df897aafc9473.png';
import image_721ea2f8ed8d3579f523583c34c605c4106914c0 from 'figma:asset/721ea2f8ed8d3579f523583c34c605c4106914c0.png';
import image_41b83b07154bc25d703684701f8068bfed7f9b77 from 'figma:asset/41b83b07154bc25d703684701f8068bfed7f9b77.png';
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface PlaygroundItem {
  image: string;
  title?: string;
  height?: string;
}

interface PlaygroundProps {
  items: PlaygroundItem[];
}

// Placeholder items matching Figma layout
const placeholderItems = [
  { left: 0, top: 0, height: 608, opacity: 0.31, image: image_721ea2f8ed8d3579f523583c34c605c4106914c0 },
  { left: 719, top: 784, height: 668, opacity: 0.31, image: image_f81a6c0ccc84bcc8481a2d2d7f46254f5949cd55 },
  { left: 360, top: 0, height: 328, opacity: 0.57, image: image_41b83b07154bc25d703684701f8068bfed7f9b77 },
  { left: 360, top: 339, height: 328, opacity: 0.31, image: image_5097bfc94a935008523f6fc761a0edb464f31a7b },
  { left: 360, top: 1124, height: 328, opacity: 0.31, image: image_45937b15b6dd83612829a2526de4c37042f3cd52 },
  { left: 1079, top: 1124, height: 328, opacity: 0.57, image: image_cc322fdb955266b4239a08cdaaf55a4d70bddc2f },
  { left: 1, top: 619, height: 328, opacity: 0.31, image: image_41a99f2133d6f03b74a53297a259040a59caaa75 },
  { left: 720, top: 446, height: 328, opacity: 0.57, image: image_6d8b514b723f2e42abc5e00c48999517f0b6cfc2 },
  { left: 1078, top: 785, height: 328, opacity: 0.31, image: image_aa9661998ba4886211e228f65830caec85e82518 },
  { left: 719, top: 0, height: 435, opacity: 0.31, image: image_7392c6e4c353b3331c85a8396d2df897aafc9473 },
  { left: 360, top: 678, height: 435, opacity: 0.57, image: image_92bbaae6eb25f3f050d2f64bf869553e28ada3ae },
  { left: 0, top: 958, height: 494, opacity: 0.57, image: image_b7c01e74a64fd96e4c13cd41c48bfb17f2c0bad3 },
  { left: 1079, top: 339, height: 435, opacity: 0.57, image: image_5c1f25d444ae857f9b01432b41ba7b99f368b72d },
  { left: 1079, top: 0, height: 328, opacity: 0.31, image: image_37c07083b625b022ea7cf3be764f2645812ae6cb },
];

export function Playground({ items }: PlaygroundProps) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="playground" className="py-20 w-full">
      {/* Section header - Centered */}
      <div className="max-w-[1224px] mx-auto px-8 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          <div className="hidden lg:block lg:col-span-1"></div>
          <h2 className="font-['Inter'] font-bold text-4xl text-black lg:col-span-3">
            Playground
          </h2>
          <p className="font-['Inter'] font-normal text-[20px] text-[#747474] leading-[normal] lg:col-span-8">
            Small experiments and creative explorations that reflect how I think, learn, and design.
          </p>
        </div>
      </div>

      {/* Desktop Masonry Grid - Full Width Edge to Edge */}
      <div className="hidden lg:block w-full">
        <div className="relative h-[1452px] max-w-[1440px] mx-auto">
          {placeholderItems.map((item, index) => (
            <motion.div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className="absolute rounded-[60px] overflow-hidden"
              style={{
                left: `${item.left}px`,
                top: `${item.top}px`,
                height: `${item.height}px`,
                width: '349px',
                backgroundColor: `rgba(196, 196, 196, ${item.opacity})`,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={visibleItems.has(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <img 
                src={item.image} 
                alt="" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet Grid - Responsive Columns */}
      <div className="lg:hidden px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {placeholderItems.map((item, index) => (
            <motion.div
              key={`mobile-${index}`}
              className="rounded-[30px] overflow-hidden"
              style={{
                height: `${Math.min(item.height * 0.6, 300)}px`,
                backgroundColor: `rgba(196, 196, 196, ${item.opacity})`,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
            >
              <img 
                src={item.image} 
                alt="" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}