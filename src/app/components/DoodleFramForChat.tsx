import React from 'react';
import doodleImage from 'figma:asset/9fadce8d4bde49d9d839c780abc4e1708459c391.png';

export default function DoodleFramForChat() {
  return (
    <div className="bg-white overflow-hidden relative rounded-full w-full h-full" data-name="Doodle fram for chat">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Rotation wrapper to match the doodle aesthetic */}
        <div className="flex-none rotate-[-10.22deg] w-[85%] h-[85%] relative">
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <img 
                alt="Doodle avatar" 
                className="w-full h-full object-cover scale-110" 
                src={doodleImage} 
              />
            </div>
        </div>
      </div>
    </div>
  );
}
