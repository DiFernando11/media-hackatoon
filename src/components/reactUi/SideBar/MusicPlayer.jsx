import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlay, setIsPlay] = useState(false);

  const handlePlay = () => {
    setIsPlay(!isPlay);
    audioRef.current.play();
  };

  const handlePause = () => {
    setIsPlay(!isPlay);
    audioRef.current.pause();
  };

  return (
    <div className="-mt-3 ml-1">
      <div className="flex items-center gap-2">
        {!isPlay ? (
          <SpeakerXMarkIcon
            onClick={handlePlay}
            className="text-white size-6 cursor-pointer"
          />
        ) : (
          <SpeakerWaveIcon
            onClick={handlePause}
            className="text-white size-6 cursor-pointer"
          />
        )}
        <div className="text-container">
          <p className="moving-text text-white font-general-md">
            Halloween (Surfing With Spooks)
          </p>
        </div>
      </div>

      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default MusicPlayer;
