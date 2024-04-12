import React, { useState, useEffect } from "react";
import * as audioPlayer from "./styled/audioPlayer";

// 절대경로 설정
const imagePath = process.env.PUBLIC_URL + "/common/images/";
const videoPath = process.env.PUBLIC_URL + "/common/videos/";
const AUDIO_URL = videoPath + "sound.mp4";

// 오디오 상태
enum AudioState {
  Playing = "PLAYING",
  Paused = "PAUSED",
}

export const AudioPlayer = () => {
  const [audioState, setAudioState] = useState<AudioState>(AudioState.Paused);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  // 오디오 초기화
  useEffect(() => {
    if (!audio) {
      const audioElement = new Audio(AUDIO_URL);
      setAudio(audioElement);
      return () => {
        audioElement.pause();
      };
    }
  }, []);

  // 오디오 재생 또는 일시 정지
  const toggleAudio = () => {
    if (!audio) return;
    if (audioState === AudioState.Playing) {
      audio.pause();
      setAudioState(AudioState.Paused);
    } else {
      audio.play();
      setAudioState(AudioState.Playing);
    }
  };

  return (
    <audioPlayer.AudioPlayerWrapper>
      {audio && <audio autoPlay src={AUDIO_URL} />}
      <audioPlayer.Button onClick={toggleAudio}>
        <img
          src={
            imagePath +
            `${
              audioState === AudioState.Playing
                ? "icon_music_white"
                : "icon_no_music_white"
            }.svg`
          }
          alt="Audio"
        />
      </audioPlayer.Button>
    </audioPlayer.AudioPlayerWrapper>
  );
};
