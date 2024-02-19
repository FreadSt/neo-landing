import ReactPlayer from 'react-player';
import videoBg from '../../assets/images/Hero_BG_Video_Alt (1) (1).mp4';
import './style.scss';
export const VideoBackground = () => {
  return (
    <div className="video-background">
      <ReactPlayer
        url={videoBg}
        playing
        loop
        muted
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
    </div>
  );
};
