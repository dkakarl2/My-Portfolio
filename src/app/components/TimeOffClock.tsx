import { useEffect, useRef, useState } from "react";
import imgRamen from "figma:asset/a405d4632aaad532b4bfb21b4d15d205e5bf4808.png";
import imgRocks from "figma:asset/adf4f49ddea169ba0184db18dbcee9f4df40717e.png";
import imgPlushies from "figma:asset/06798c529ab3df86c7470e41a2327dabb222db26.png";
import imgPainting from "figma:asset/d81ef67d5b8d0fbb06ba941f82c4f4688d557209.png";
import imgCave from "figma:asset/3bed80d77e6b4cb62c33eba9f8167fbe629b5d53.png";
import imgKayak from "figma:asset/c5d1ecd873063ba4ec3c155da73ff38ca521713b.png";

// Row 2 Images
import imgCityscape from "figma:asset/0c7f1dd4abf31ef7367bb3a8c52a281f27d1943a.png";
import imgWave from "figma:asset/b144b16481d6dc2d1c3a61e6af95d2cb554d72a5.png";
import imgTree from "figma:asset/0b810bf4a49cdb2c3ba45f18a1ecf0935769d818.png";
import imgStarryNight from "figma:asset/652e894aeace03ff4edfe766a7a640a117e08506.png";
import imgPerson from "figma:asset/37b589734ec4e347c33cc8f26140e0da59ef7e1e.png";

// Row 1 items (top row)
const row1Items = [
  { 
    width: 318, 
    height: 318, 
    src: imgRamen,
    innerStyle: { width: '319px', height: '568px', top: '-86px', left: '0' }
  },
  { 
    width: 584, 
    height: 318,
    src: imgRocks,
    innerStyle: { width: '584px', height: '318px', top: '0', left: '0' }
  },
  { 
    width: 293, 
    height: 318,
    src: imgPlushies,
    innerStyle: { width: '293px', height: '390px', top: '0', left: '0' }
  },
  { 
    width: 293, 
    height: 318,
    src: imgPainting,
    innerStyle: { width: '318px', height: '398px', top: '0', left: '0' }
  },
  { 
    width: 318, 
    height: 318,
    src: imgCave,
    innerStyle: { width: '323px', height: '430px', top: '-64px', left: '-2px' }
  },
  { 
    width: 584, 
    height: 318,
    src: imgKayak,
    innerStyle: { width: '599px', height: '799px', top: '-369px', left: '-8px' }
  },
];

// Row 2 items (bottom row)
const row2Items = [
  { 
    width: 581, 
    height: 318,
    src: imgCityscape,
    innerStyle: { width: '582px', height: '437px', top: '-74px', left: '-1px' }
  },
  { 
    width: 584, 
    height: 318,
    src: imgWave,
    innerStyle: { width: '100%', height: '100%', top: '0', left: '0' } // Default style for unknown crop
  },
  { 
    width: 293, 
    height: 318,
    src: imgTree,
    innerStyle: { width: '318px', height: '318px', top: '0', left: '-11px' }
  },
  { 
    width: 627, 
    height: 318,
    src: imgStarryNight,
    innerStyle: { width: '629px', height: '471px', top: '-6px', left: '-2px' }
  },
  { 
    width: 321, 
    height: 318,
    src: imgPerson,
    innerStyle: { width: '323px', height: '430px', top: '-82px', left: '0' }
  },
];

export function TimeOffClock() {
  const [offset1, setOffset1] = useState(0);
  const [offset2, setOffset2] = useState(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    let lastTime = Date.now();
    
    const animate = () => {
      const now = Date.now();
      const delta = (now - lastTime) / 1000; // Convert to seconds
      lastTime = now;

      // Row 1: scroll right at 40px per second
      setOffset1((prev) => {
        const newOffset = prev + (40 * delta);
        const totalWidth = row1Items.reduce((sum, item) => sum + item.width + 16, 0);
        return newOffset >= totalWidth ? 0 : newOffset;
      });

      // Row 2: scroll left at 40px per second
      setOffset2((prev) => {
        const newOffset = prev - (40 * delta);
        const totalWidth = row2Items.reduce((sum, item) => sum + item.width + 16, 0);
        return newOffset <= -totalWidth ? 0 : newOffset;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white relative size-full flex flex-col lg:block">
      {/* Section Title */}
      <div className="px-8 pt-0 pb-8 lg:p-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:max-w-[1320px] lg:w-full lg:top-[43px]">
        <div className="lg:relative lg:left-[222px]">
          <h2 className="font-['Inter'] font-bold text-3xl lg:text-[48px] leading-tight lg:leading-[50px] text-black">
            When I'm Off the Clock
          </h2>
        </div>
      </div>

      {/* Scrolling Rows Container */}
      <div className="relative w-full space-y-4 overflow-hidden lg:absolute lg:left-0 lg:top-[159px]">
        {/* Row 1 - Scrolls Right */}
        <div className="relative h-[200px] lg:h-[318px] overflow-hidden">
          <div className="absolute left-0 top-0 origin-top-left scale-[0.628] lg:scale-100">
            <div
              className="flex gap-4 will-change-transform"
              style={{ transform: `translateX(-${offset1}px)` }}
            >
              {/* Duplicate items for seamless loop */}
              {[...Array(3)].map((_, repeatIndex) => (
                <div key={repeatIndex} className="flex gap-4">
                  {row1Items.map((item, index) => (
                    <div
                      key={`${repeatIndex}-${index}`}
                      className="rounded-[24px] bg-[#efefef] flex-shrink-0 relative overflow-hidden"
                      style={{
                        width: `${item.width}px`,
                        height: `${item.height}px`,
                      }}
                    >
                      {item.src && (
                        <div className="absolute" style={item.innerStyle}>
                          <img 
                            src={item.src} 
                            alt="" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 - Scrolls Left */}
        <div className="relative h-[200px] lg:h-[318px] overflow-hidden">
          <div className="absolute left-0 top-0 origin-top-left scale-[0.628] lg:scale-100">
            <div
              className="flex gap-4 will-change-transform"
              style={{ transform: `translateX(${offset2}px)` }}
            >
              {/* Duplicate items for seamless loop */}
              {[...Array(3)].map((_, repeatIndex) => (
                <div key={repeatIndex} className="flex gap-4">
                  {row2Items.map((item, index) => (
                    <div
                      key={`${repeatIndex}-${index}`}
                      className="rounded-[24px] bg-[#efefef] flex-shrink-0 relative overflow-hidden"
                      style={{
                        width: `${item.width}px`,
                        height: `${item.height}px`,
                      }}
                    >
                      {item.src && (
                        <div className="absolute" style={item.innerStyle}>
                          <img 
                            src={item.src} 
                            alt="" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
