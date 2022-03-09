import React, { useState } from 'react';
import Sound from 'react-sound'; 
import Music from '../../assets/soft-daydream.mp3';
import './style.css';

// Play Music Button
// Click once to play, click again to stop
const PlaySound = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying,
) => {
    // Initial State is with No Sound
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div>
            <button className="music-button" onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? (<> <p className="sound-btn-p">Cleanse your</p> <p>~AURAL~AURA~</p> </>) : 'STOP SOUND NOW!!!'}</button>
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