import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import categorie_caisson_de_basse from "./categorie_caisson_de_basse.jpg"

const useStyles =  makeStyles((theme) => ({
    root:{
      flexGrow : 1,
      maxWidth : 100+"%",
    },
    img:{
      maxWidth: 100+"%",
      maxHeight: 100+"%"
    },
    categorie:{
        maxWidth: 20+"%",
        cursor: "pointer"
    },
    categories:{
      backgroundColor: 'white'
    },
    title: {
      fontFamily:  "Jazz LET, fantasy",
      fontSize: 35
    }
}));

export default function Categories(){
  const classes = useStyles();
  return(
    <div ClassName = {classes.root}>
      <Typography component="div" style={{ backgroundColor: 'white', height: '10vh' }}>
        <Typography className={classes.title}>
          <b> ~ CATEGORIES ~ </b>
        </Typography>
      </Typography>
      <Grid className = {classes.categories} container justify="space-between">

        <Grid className = {classes.categorie} item container direction='column'>
          <Grid item alignItems="center">
            <Typography component="div" style={{ backgroundColor: 'white', height: '30vh' }} >
              <img className = {classes.img} alt = "imagae présentation" src ={categorie_caisson_de_basse} />
            </Typography>
          </Grid>
          <Grid item alignItems="center">
            <Typography className= {classes.title}  >
              Caissons
            </Typography>
          </Grid>
        </Grid>

        <Grid className = {classes.categorie} item container direction='column'>
          <Grid item alignItems="center">
            <Typography component="div" style={{ backgroundColor: 'white', height: '30vh' }} >
              <img className = {classes.img} alt = "imagae présentation" src ={categorie_caisson_de_basse} />
            </Typography>
          </Grid>
          <Grid item alignItems="center">
            <Typography className= {classes.title}  >
              Caissons
            </Typography>
          </Grid>
        </Grid>

        <Grid className = {classes.categorie} item container direction='column'>
          <Grid item alignItems="center">
            <Typography component="div" style={{ backgroundColor: 'white', height: '30vh' }} >
              <img className = {classes.img} alt = "imagae présentation" src ={categorie_caisson_de_basse} />
            </Typography>
          </Grid>
          <Grid item alignItems="center">
            <Typography className= {classes.title}  >
              Caissons
            </Typography>
          </Grid>
        </Grid>

        <Grid className = {classes.categorie} item container direction='column'>
          <Grid item alignItems="center">
            <Typography component="div" style={{ backgroundColor: 'white', height: '30vh' }} >
              <img className = {classes.img} alt = "imagae présentation" src ={categorie_caisson_de_basse} />
            </Typography>
          </Grid>
          <Grid item alignItems="center">
            <Typography className= {classes.title}  >
              Caissons
            </Typography>
          </Grid>
        </Grid>

        <Grid className = {classes.categorie} item container direction='column'>
          <Grid item alignItems="center">
            <Typography component="div" style={{ backgroundColor: 'white', height: '30vh' }} >
              <img className = {classes.img} alt = "imagae présentation" src ={categorie_caisson_de_basse} />
            </Typography>
          </Grid>
          <Grid item alignItems="center">
            <Typography className= {classes.title}  >
              Caissons
            </Typography>
          </Grid>
        </Grid>

      </Grid>
    </div>
  )
}
