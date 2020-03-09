import React, { Dispatch, SetStateAction } from 'react';
import List from '@material-ui/core/List';
import VideoItem from './VideoItem';

interface IProps {
  videos: Array<any>;
  setSelectedVideo: Dispatch<SetStateAction<any>>;
  styles: string;
}

const VideoList: React.FC<IProps> = ({ videos, setSelectedVideo, styles }) => (
  <List className={styles}>
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
