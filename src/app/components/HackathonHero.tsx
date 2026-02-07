import image_0472ddc1d5dea59246e31c91b074ca0f372d9e61 from 'figma:asset/0472ddc1d5dea59246e31c91b074ca0f372d9e61.png'
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export default function HackathonHero() {
  return (
    <div className="bg-gradient-to-b from-[rgba(140,29,64,0.42)] overflow-hidden relative to-[rgba(50,10,23,0.7)] w-full">
      <ImageWithFallback 
        alt="ASU Course Planning Assistant Interface" 
        className="w-full h-auto object-cover" 
        src={image_0472ddc1d5dea59246e31c91b074ca0f372d9e61} 
      />
    </div>
  );
}
