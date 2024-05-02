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
        setAudio(null); // 컴포넌트가 언마운트되면 오디오 요소를 초기화합니다.
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

  // 노래 재생 중일 때만 버튼을 클릭하여 중복 재생을 방지합니다.
  const handleClick = () => {
    if (audioState === AudioState.Playing) return;
    toggleAudio();
  };

  return (
    <audioPlayer.AudioPlayerWrapper onClick={handleClick}>
      {audio && <audio autoPlay src={AUDIO_URL} />}

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
    </audioPlayer.AudioPlayerWrapper>
  );
};
