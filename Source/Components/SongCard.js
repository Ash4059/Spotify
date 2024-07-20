export const SongCard = ({ song }) => {
  return (
    <li
      className="flex items-center hover:bg-gray-800 rounded-md p-2 cursor-pointer"
    >
      <img
        className="w-10 h-10 rounded-full"
        src={song.imageUrl ? song.imageUrl : '../Utils/img/default_music.png'}
        alt={song.title}
      />
      <div className="text-sm font-medium">{song.title}</div>
      <div className="text-xs text-gray-400 ml-auto">{song.artist}</div>
    </li>
  );
};
