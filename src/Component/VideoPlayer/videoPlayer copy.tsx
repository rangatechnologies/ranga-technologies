import React, { useRef, useEffect } from 'react';

interface CroppedVideoPlayerProps {
  videoPath: string;
  cropArea: {
    width: string;
    height: string;
    top: string;
    left: string;
    borderRadiusTop?: string;
    borderRadiusBottom?: string;
    startTime?: number; // Optional starting time in seconds
  };
}

const CroppedVideoPlayer: React.FC<CroppedVideoPlayerProps> = ({ videoPath, cropArea }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (cropArea.startTime) {
        videoRef.current.currentTime = cropArea.startTime;
      }
      videoRef.current.play().catch(error => {
        // Autoplay might be blocked by the browser
        console.error('Autoplay failed:', error);
      });
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, [cropArea.startTime, videoPath]);

  return (
    <div
      style={{
        overflow: 'hidden',
        width: cropArea.width,
        height: cropArea.height,
        position: 'relative',
        borderTopLeftRadius: cropArea.borderRadiusTop || '0',
        borderTopRightRadius: cropArea.borderRadiusTop || '0',
        borderBottomLeftRadius: cropArea.borderRadiusBottom || '0',
        borderBottomRightRadius: cropArea.borderRadiusBottom || '0',
      }}
    >
      <video
        ref={videoRef}
        muted
        playsInline
        loop
        style={{
          position: 'absolute',
          top: cropArea.top,
          left: cropArea.left,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src={videoPath} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default CroppedVideoPlayer;
