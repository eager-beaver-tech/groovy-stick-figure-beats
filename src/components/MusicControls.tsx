
import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type DanceStyle = 'pop' | 'rock' | 'hiphop';

interface MusicControlsProps {
  genre: DanceStyle;
  onGenreChange: (genre: DanceStyle) => void;
}

export const MusicControls = ({ genre, onGenreChange }: MusicControlsProps) => {
  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-xs mx-auto">
      <Select value={genre} onValueChange={(value) => onGenreChange(value as DanceStyle)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a genre" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="pop">Pop</SelectItem>
          <SelectItem value="rock">Rock</SelectItem>
          <SelectItem value="hiphop">Hip Hop</SelectItem>
        </SelectContent>
      </Select>

      <div className="text-center mt-2">
        <p className="text-sm text-gray-600">Currently playing:</p>
        <p className="text-lg font-semibold capitalize">{genre} Music</p>
      </div>
    </div>
  );
};
