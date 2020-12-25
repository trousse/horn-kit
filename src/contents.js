import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import DocSearcher from './docSearcher.js'


const useStyles = makeStyles((theme) => ({
  root: {
    padding : theme.spacing(6),
    backgroundColor : 'white',
    flexGrow :1,
  },

  gridContainer: {

    height : theme.spacing(38)
  },

}));



export default function Content(props){

  const classes = useStyles();
  return(
   <div className = {classes.root}>

    <Grid className = {classes.gridContainer} container  alignItems="stretch" spacing={4}>

      <Grid item xs = {8} >

          <video width="100%" height="100%" autobuffer="10" controls>
              <source src="video.mp4" type="video/mp4"/>
          </video>

      </Grid>

      <Grid item xs={4}>

        <DocSearcher item = {props.docSearcherProps.item} onClick = {(code)=>{props.docSearcherProps.onClick(code)}}/>

      </Grid>
    </Grid>
   </div>
  );
}
