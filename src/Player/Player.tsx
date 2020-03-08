import React, { useState, useEffect } from 'react';
import { SearchBar } from '../SearchBar';
import VideoList from './VideoList';
import Container from '@material-ui/core/Container';
import axios from 'axios';
const BASE_VIDEO_URL = 'https://www.youtube.com/embed';
const API_KEY = '';

const Player: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedVideo, setSelectedVideo] = useState<string>('');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
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
    })();
  }, [searchTerm]);

  return (
    <Container maxWidth='lg'>
      <div style={{ paddingTop: 20 }}>
        <SearchBar setSearchTerm={setSearchTerm} />
        <div style={{ display: 'flex', paddingTop: 10 }}>
          {selectedVideo && (
            <iframe
              width='700'
              height='515'
              src={`${BASE_VIDEO_URL}/${selectedVideo}`}
              frameBorder='0'
              title='player'
            />
          )}
          {/* add loading spinner */}
          <VideoList videos={videos} setSelectedVideo={setSelectedVideo} />
        </div>
      </div>
    </Container>
  );
};

export default Player;
