import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core/styles';

interface IProps {
  classes: any;
}

const Header: React.FC<IProps> = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <div className={classes.grow}>
            {/* Add some icon here */}
            <Typography
              component='h1'
              variant='h6'
              color='inherit'
              noWrap
            >
              Material Player
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.spacing,
    color: 'green',
    fontSize: 45,
  },
});

export default withStyles(styles)(Header);
