import React, { useState, useEffect } from 'react';
import { SearchBar } from '../SearchBar';
import VideoList from './VideoList';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import axios from 'axios';
const BASE_VIDEO_URL = 'https://www.youtube.com/embed';
const API_KEY = '';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      paddingTop: 20,
    },
    player: {
      display: 'flex',
      paddingTop: 10,
    },
    spinner: {
      margin: '0 auto',
      marginTop: 10,
    },
    noTopPad: {
      paddingTop: 0,
    },
  })
);

const Player: React.FC = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedVideo, setSelectedVideo] = useState<string>('');
  const [videos, setVideos] = useState([]);
  const currentVideo: any = videos.find(
    (video: any) => video.id.videoId === selectedVideo
  );

  useEffect(() => {
    (async () => {
      setLoading(true);
      setSelectedVideo('');

      const { data } = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            key: API_KEY,
            type: 'video',
            part: 'snippet',
            q: searchTerm,
          },
        }
      );

      setVideos(data.items);
      setTimeout(() => setLoading(false), 1000);
    })();
  }, [searchTerm]);

  return (
    <Container maxWidth='lg'>
      <div className={classes.container}>
        <SearchBar setSearchTerm={setSearchTerm} />
        <div className={classes.player}>
          {selectedVideo && (
            <div>
              <iframe
                width='700'
                height='515'
                src={`${BASE_VIDEO_URL}/${selectedVideo}`}
                frameBorder='0'
                title='player'
              />
              {currentVideo && (
                <div>
                  <h3>Description</h3>
                  <p>{currentVideo.snippet.description ?? 'None'}</p>
                </div>
              )}
            </div>
          )}
          {loading ? (
            <CircularProgress className={classes.spinner} />
          ) : (
            <VideoList
              videos={videos}
              setSelectedVideo={setSelectedVideo}
              styles={classes.noTopPad}
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export default Player;
