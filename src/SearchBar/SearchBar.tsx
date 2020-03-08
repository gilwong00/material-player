import React, { Dispatch, SetStateAction } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  })
);

interface IProps {
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

const SearchBar: React.FC<IProps> = ({ setSearchTerm }) => {
  const classes = useStyles();

  return (
    <Paper component='form' className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder='Search for a video'
        inputProps={{ 'aria-label': 'search for a video' }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const term = e.target.value;
          setTimeout(() => setSearchTerm(term), 1000);
        }}
      />
      <IconButton
        type='submit'
        className={classes.iconButton}
        aria-label='search'
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
export default SearchBar;
