import React, { Dispatch, SetStateAction } from 'react';
import List from '@material-ui/core/List';
import VideoItem from './VideoItem';

interface IProps {
  videos: Array<any>;
  setSelectedVideo: Dispatch<SetStateAction<any>>;
}

const VideoList: React.FC<IProps> = ({ videos, setSelectedVideo }) => (
  <List style={{ paddingTop: 0 }}>
    {videos.map(video => (
      <VideoItem
        key={video.etag}
        video={video}
        setSelectedVideo={setSelectedVideo}
      />
    ))}
  </List>
);

export default VideoList;
