import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';



const useStyles = makeStyles((theme) => ({

  img: {
    maxWidth: 100+"%",
    maxHeight: 100+"%",
},
  arrowCollumn : {
    background: '#263238',
  }
}));



export default function Presentation({position}){
  const classes = useStyles();
  return(

      <Grid container>

        <Grid className = {classes.arrowCollumn} item container direction="column" justify="center" alignItems="stretch" xs={1}>
            <Grid item alignItems="center">
                <IconButton component = "div">
                  <ArrowBackIosIcon color ="secondary" fontSize = "large"/>
                </IconButton>
            </Grid>
          </Grid>

          <Grid item xs={10}>
            <Typography component="div" style={{ backgroundColor: '#fb8c00', height: '62vh' }} >
              <img className = {classes.img} alt = "imagae présentation" src ="./image_demo.jpg" />
            </Typography>
          </Grid>

        <Grid className = {classes.arrowCollumn} item container direction="column" justify="center" alignItems="stretch" xs={1}>
            <Grid item alignItems="center">
                <IconButton  component = "div">
                  <ArrowForwardIosIcon  color ="secondary" fontSize = "large"/>
                </IconButton>
            </Grid>
        </Grid>

      </Grid>

  );
}
