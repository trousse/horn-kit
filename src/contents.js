import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root:{
    padding : theme.spacing(6),
    backgroundColor : '#fb8c00',
  },
  searcher:{
    width : '10mv',
    height : '13mv',
    backgroundColor : '#263238',
  },
  item:{
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      width: 100+'%',
      height: 100+'%',
      background : '#455a64',
    }
  },
  gridContainer:{
    backgroundColor : '#fb8c00',
    height : theme.spacing(38)
  },

}));

export default function Content(){
  const classes = useStyles();
  return(
   <div className = {classes.root}>

    <Grid className = {classes.gridContainer} container  alignItems="stretch" spacing={4}>

      <Grid item xs = {8} >

          <video width="100%" height="100%" controls>
              <source src="video.mp4" type="video/mp4"/>
          </video>
        
      </Grid>

      <Grid item className = {classes.item} xs={4}>
        <Paper  elevation={5} classeName = {classes.searcher}>

        </Paper>

      </Grid>
    </Grid>
   </div>
  );
}
