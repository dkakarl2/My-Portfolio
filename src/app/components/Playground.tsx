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

import painting1 from '@/assets/painting 1.png';
import painting2 from '@/assets/painting 2.png';
import painting3 from '@/assets/painting 3.png';
import painting4 from '@/assets/painting 4.png';
import painting5 from '@/assets/painting 5.png';
import painting6 from '@/assets/painting 6.png';

import pgCard from '@/assets/playground/Card.png';
import pgDesktop64 from '@/assets/playground/Desktop - 64.png';
import pgDribbble6 from '@/assets/playground/Dribbble shot HD - 6.png';
import pgDribbble8 from '@/assets/playground/Dribbble shot HD - 8.png';
import pgFlux1 from '@/assets/playground/Flux 1.png';
import pgFlux2 from '@/assets/playground/Flux 2.png';
import pgFlux3 from '@/assets/playground/Flux 3.png';
import pgSamsung from '@/assets/playground/Free_Samsung_S10_Mockup_3-Recovered 2.png';
import pgInsta from '@/assets/playground/Instagram post - 1.png';
import pgMockup from '@/assets/playground/Mockup2222 1.png';
import pgMom from '@/assets/playground/Mom.png';
import pgBeta from '@/assets/playground/beta=false, CTA type=single.png';
import pgIosDock from '@/assets/playground/iOS app dock.png';
import pgIphone from '@/assets/playground/iPhone on Pillow Mockup1111111111 1.png';

import { useMemo, useState, useEffect, useRef } from "react";

interface PlaygroundItemData {
  src: string;
  title: string;
  date: string;
  description: string;
  role: string;
}

const defaultDescription = "Redesigned experience focused on smarter onboarding and clearer interactions. By streamlining goal-setting, reducing interface redundancy, and elevating analytics visibility, this concept improves personalization and helps users build stronger, more accurate digital identities.";

const baseItems: PlaygroundItemData[] = [
  { src: pgCard, title: "Card", date: "", description: defaultDescription, role: "" },
  { src: pgDesktop64, title: "Desktop", date: "", description: defaultDescription, role: "" },
  { src: pgDribbble6, title: "Dribbble 6", date: "", description: defaultDescription, role: "" },
  { src: pgDribbble8, title: "Dribbble 8", date: "", description: defaultDescription, role: "" },
  { src: pgFlux1, title: "Flux 1", date: "", description: defaultDescription, role: "" },
  { src: pgFlux2, title: "Flux 2", date: "", description: defaultDescription, role: "" },
  { src: pgFlux3, title: "Flux 3", date: "", description: defaultDescription, role: "" },
  { src: pgSamsung, title: "Samsung Mockup", date: "", description: defaultDescription, role: "" },
  { src: pgInsta, title: "Instagram", date: "", description: defaultDescription, role: "" },
  { src: pgMockup, title: "Mockup", date: "", description: defaultDescription, role: "" },
  { src: pgMom, title: "Mom", date: "", description: defaultDescription, role: "" },
  { src: pgBeta, title: "Beta CTA", date: "", description: defaultDescription, role: "" },
  { src: pgIosDock, title: "iOS Dock", date: "", description: defaultDescription, role: "" },
  { src: pgIphone, title: "iPhone Mockup", date: "", description: defaultDescription, role: "" },
  { src: painting1, title: "Painting 1", date: "2024", description: defaultDescription, role: "Artist" },
  { src: painting2, title: "Painting 2", date: "2024", description: defaultDescription, role: "Artist" },
  { src: painting3, title: "Painting 3", date: "2024", description: defaultDescription, role: "Artist" },
  { src: painting4, title: "Painting 4", date: "2024", description: defaultDescription, role: "Artist" },
  { src: painting5, title: "Painting 5", date: "2024", description: defaultDescription, role: "Artist" },
  { src: painting6, title: "Painting 6", date: "2024", description: defaultDescription, role: "Artist" },
  { src: image_721ea2f8ed8d3579f523583c34c605c4106914c0, title: "LinkedIn Redesign", date: "Winter 2025", description: defaultDescription, role: "UI Designer" },
  { src: image_41a99f2133d6f03b74a53297a259040a59caaa75, title: "EcoBloom - Spatial Design", date: "Summer 2023", description: defaultDescription, role: "Spatial Designer" },
  { src: image_b7c01e74a64fd96e4c13cd41c48bfb17f2c0bad3, title: "Smart Home Controller", date: "Spring 2022", description: defaultDescription, role: "Product Designer" },
  { src: image_41b83b07154bc25d703684701f8068bfed7f9b77, title: "Mobile Onboarding", date: "Summer 2024", description: defaultDescription, role: "UX Designer" },
  { src: image_5097bfc94a935008523f6fc761a0edb464f31a7b, title: "E-Commerce App", date: "Spring 2024", description: defaultDescription, role: "UI Designer" },
  { src: image_92bbaae6eb25f3f050d2f64bf869553e28ada3ae, title: "Food Delivery", date: "Summer 2022", description: defaultDescription, role: "UX Designer" },
  { src: image_45937b15b6dd83612829a2526de4c37042f3cd52, title: "Social Platform", date: "Winter 2024", description: defaultDescription, role: "Product Designer" },
  { src: image_7392c6e4c353b3331c85a8396d2df897aafc9473, title: "Travel App", date: "Fall 2022", description: defaultDescription, role: "UI Designer" },
  { src: image_6d8b514b723f2e42abc5e00c48999517f0b6cfc2, title: "Analytics Tool", date: "Spring 2023", description: defaultDescription, role: "Product Designer" },
  { src: image_f81a6c0ccc84bcc8481a2d2d7f46254f5949cd55, title: "Dashboard Concept", date: "Fall 2024", description: defaultDescription, role: "Product Designer" },
  { src: image_37c07083b625b022ea7cf3be764f2645812ae6cb, title: "Music Player", date: "Fall 2021", description: defaultDescription, role: "UX Designer" },
  { src: image_5c1f25d444ae857f9b01432b41ba7b99f368b72d, title: "Task Manager", date: "Winter 2022", description: defaultDescription, role: "UI Designer" },
  { src: image_aa9661998ba4886211e228f65830caec85e82518, title: "Healthcare Portal", date: "Winter 2023", description: defaultDescription, role: "UX Researcher" },
  { src: image_cc322fdb955266b4239a08cdaaf55a4d70bddc2f, title: "Web App UI", date: "Fall 2023", description: defaultDescription, role: "UX/UI Designer" },
];

export function Playground() {
  const [cols, setCols] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 3000 cells to cover even very large screens with 40x40 squares
  const numCells = 3000; 

  useEffect(() => {
    const updateCols = () => {
      if (containerRef.current) {
        setCols(Math.floor(containerRef.current.offsetWidth / 40));
      }
    };
    
    // Initial measurement
    updateCols();
    
    // Measure on resize
    window.addEventListener('resize', updateCols);
    return () => window.removeEventListener('resize', updateCols);
  }, []);
  
  const gridCells = useMemo(() => {
    // If we haven't measured the container yet, return an empty array to avoid hydration/layout mismatch
    if (cols === 0) return Array(numCells).fill(baseItems[0]);

    const cells: PlaygroundItemData[] = [];
    
    for (let i = 0; i < numCells; i++) {
      const row = Math.floor(i / cols);
      const col = i % cols;
      
      const forbidden = new Set<PlaygroundItemData>();
      
      // Radius 1: Horizontal and Vertical neighbors
      if (col > 0) forbidden.add(cells[i - 1]); // Left
      if (row > 0) {
        if (col > 0) forbidden.add(cells[i - cols - 1]); // Top-Left
        forbidden.add(cells[i - cols]); // Top
        if (col < cols - 1 && i - cols + 1 < cells.length) {
           forbidden.add(cells[i - cols + 1]); // Top-Right
        }
      }
      
      // Radius 2: Avoid repeats within 2 blocks distance (creates an even better organic distribution)
      if (col > 1) forbidden.add(cells[i - 2]);
      if (row > 1) forbidden.add(cells[i - (cols * 2)]);
      
      // Filter out forbidden items
      const available = baseItems.filter(item => !forbidden.has(item));
      
      // If strict separation forbids all items (very rare with 34 items), fallback to all items
      const candidates = available.length > 0 ? available : baseItems;
      
      cells.push(candidates[Math.floor(Math.random() * candidates.length)]);
    }
    
    return cells;
  }, [cols, numCells]);

  return (
    // Flex-wrap container ensuring exactly 40px x 40px squares, no gaps
    <div ref={containerRef} className="w-full h-full flex flex-wrap content-start">
      {gridCells.map((item, idx) => (
        <div 
          key={idx} 
          className="relative w-[40px] h-[40px] group border-r border-b border-[#80808012]"
        >
          {/* Inner expanding box (Pure GPU-accelerated transition using scale and opacity) */}
          <div 
            className="absolute -left-[140px] -top-[130px] w-[320px] h-[300px] bg-transparent
                       transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                       opacity-0 scale-[0.5] group-hover:opacity-100 group-hover:scale-100
                       z-0 group-hover:z-50 
                       flex flex-col justify-end pointer-events-none
                       origin-center will-change-[transform,opacity]"
          >
            {/* Content only visible on hover */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
               <img src={item.src} className="max-w-full max-h-full object-contain drop-shadow-2xl" alt={item.title} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}