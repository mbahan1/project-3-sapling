import React, { useState } from 'react';
import Sound from 'react-sound'; 
import Music from '../../assets/soft-daydream.mp3';

const PlaySound = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying,
) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div>
            <button onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? 'Play' : 'Stop'}</button>
            <Sound
                url={Music}
                playStatus={
                    isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
                    }
                    playFromPoistion={300}
                    onLoading={handleSongLoading}
                    onPlaying={handleSongPlaying}
                    onFinishedPlaying={handleSongFinishedPlaying}
           />     
        </div>
    );
};

export default PlaySound;