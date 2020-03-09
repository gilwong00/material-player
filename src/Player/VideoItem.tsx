import React, { Dispatch, SetStateAction } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      cursor: 'pointer',
    },
    item: {
      display: 'flex',
    },
    itemText: {
      paddingLeft: 20,
      textOverflow: 'ellipsis',
    },
  })
);

interface IProps {
  video: any;
  setSelectedVideo: Dispatch<SetStateAction<any>>;
}

const VideoItem: React.FC<IProps> = ({ video, setSelectedVideo }) => {
  const classes = useStyles();

  return (
    <ListItem
      className={classes.listItem}
      onClick={() => setSelectedVideo(video.id.videoId)}
    >
      <div className={classes.item}>
        <img src={video.snippet.thumbnails.default.url} alt={video.etag} />
        <h4 className={classes.itemText}>{video.snippet.title}</h4>
      </div>
    </ListItem>
  );
};

export default VideoItem;
