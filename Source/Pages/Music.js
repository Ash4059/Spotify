import React from 'react'
import { SongCard } from '../Components/SongCard';

const songs = [
  { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen' },
  { id: 2, title: 'Imagine', artist: 'John Lennon' },
  { id: 3, title: 'Sweet Child O\' Mine', artist: 'Guns N\' Roses' },
  { id: 4, title: 'Sweet', artist: 'Scorpions' }
];


const Music = () => {
  return (
    <div className="bg-gray-700 shadow-md p-4 flex flex-col items-center space-y-2 text-white">
      <h2 className="text-lg font-bold">Top list songs....</h2>
      <ul className="flex flex-col space-y-1 overflow-y-auto h-48">
        {songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </ul>
    </div>
  )
}

export default Music