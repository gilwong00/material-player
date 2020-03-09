import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      color: 'red',
      fontSize: 45,
      paddingLeft: 10,
    },
  })
);

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <div className={classes.grow}>
            <Typography component='h1' variant='h6' color='inherit' noWrap>
              Material Player
            </Typography>
            <LiveTvIcon className={classes.icon} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
