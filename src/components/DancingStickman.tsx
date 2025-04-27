
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type DanceStyle = 'pop' | 'rock' | 'hiphop';

export const DancingStickman = ({ genre }: { genre: DanceStyle }) => {
  return (
    <div className="w-64 h-64 mx-auto relative">
      <div className={cn(
        "stickman",
        genre === 'pop' && "dance-pop",
        genre === 'rock' && "dance-rock",
        genre === 'hiphop' && "dance-hiphop"
      )}>
        {/* Head */}
        <div className="w-8 h-8 bg-black rounded-full absolute left-1/2 -translate-x-1/2" />
        
        {/* Body */}
        <div className="w-0.5 h-16 bg-black absolute left-1/2 -translate-x-1/2 top-8 origin-top" />
        
        {/* Arms */}
        <div className="w-16 h-0.5 bg-black absolute left-1/2 -translate-x-1/2 top-12 origin-center" />
        
        {/* Legs */}
        <div className="legs absolute left-1/2 -translate-x-1/2 top-24">
          <div className="w-0.5 h-16 bg-black absolute -left-4 origin-top transform rotate-15" />
          <div className="w-0.5 h-16 bg-black absolute left-4 origin-top transform -rotate-15" />
        </div>
      </div>
    </div>
  );
};
