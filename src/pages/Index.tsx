
import { useState } from 'react';
import { DancingStickman } from '@/components/DancingStickman';
import { MusicControls } from '@/components/MusicControls';

const Index = () => {
  const [genre, setGenre] = useState<'pop' | 'rock' | 'hiphop'>('pop');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Groovy Stick Figure</h1>
        <DancingStickman genre={genre} />
        <div className="mt-8">
          <MusicControls genre={genre} onGenreChange={setGenre} />
        </div>
      </div>
    </div>
  );
};

export default Index;
