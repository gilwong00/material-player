import React, { Dispatch, SetStateAction } from 'react';
import ListItem from '@material-ui/core/ListItem';

interface IProps {
  video: any;
  setSelectedVideo: Dispatch<SetStateAction<any>>;
}

const VideoItem: React.FC<IProps> = ({ video, setSelectedVideo }) => {
  return (
    <ListItem
      style={{ cursor: 'pointer' }}
      onClick={() => setSelectedVideo(video.id.videoId)}
    >
      <div style={{ display: 'flex' }}>
        <img src={video.snippet.thumbnails.default.url} alt={video.etag} />
        <h4 style={{ paddingLeft: 20 }}>{video.snippet.title}</h4>
      </div>
    </ListItem>
  );
};

export default VideoItem;
