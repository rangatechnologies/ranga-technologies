// CroppedVideoPlayer.tsx
import React, { useRef, useState, useEffect } from 'react';

interface CroppedVideoPlayerProps_mob {
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

const CroppedVideoPlayer_mob: React.FC<CroppedVideoPlayerProps_mob> = ({ videoPath, cropArea }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [dwwd, setHovered] = useState(false);
  const isHovered = true;

  useEffect(() => {
    if (videoRef.current && cropArea.startTime) {
      videoRef.current.currentTime = cropArea.startTime;
    }
  }, [cropArea.startTime]);

  const handleMouseEnter = () => {
    setHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        // Autoplay might be blocked by the browser
        console.error('Autoplay failed:', error);
      });
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = cropArea.startTime || 0;
    }
  };

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
        autoPlay={isHovered}
        muted
        playsInline
        loop
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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

export default CroppedVideoPlayer_mob;
