import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function ToolBar({position}){

  const classes = useStyles();
  const Black_soft = blueGrey[900];
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: Black_soft,
      },
    },
  });

const classe = useStyles();

  return(
  <ThemeProvider theme = {theme}>
    <AppBar  position ={position} color = "primary">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           <MenuIcon />
         </IconButton>
         <Typography variant="h6" className={classes.title}>
           LOGO
         </Typography>
         <IconButton color="inherit">
            <FavoriteBorderOutlinedIcon/>
         </IconButton>
         <IconButton color="inherit">
            <ShoppingCartOutlinedIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>
  </ThemeProvider>
  )
}
