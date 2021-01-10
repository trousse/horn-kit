import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles =  makeStyles((theme) => ({
    root:{
      flexGrow : 1,
      height : '90vh'
    },
    img:{
      maxWidth: 100+"%",
      maxHeight: 100+"%"
    },
    categorie:{
        maxWidth: 33+"%",
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

export default function Categories({categories=[]}){
  const classes = useStyles();
  return(

    <div className = {classes.root}>
      <Typography component="div" style={{ backgroundColor: 'white', height: '10vh' }}>
        <Typography className={classes.title}>
            CATEGORIES
        </Typography>
      </Typography>

      <Grid className = {classes.categories} container justify="space-between" spacing = {0}>

      {
      categories.map((categorie)=>{
        return(

            <Grid key = {categorie.id} className = {classes.categorie} item container direction='column'>
              <Grid item>
                <Typography component="div" style={{ backgroundColor: 'white', height: '30vh' }} >
                  <img className = {classes.img} alt = "imagae présentation" src ={categorie.src} />
                </Typography>
              </Grid>
              <Grid item >
                <Typography className= {classes.title}  >
                  {categorie.name}
                </Typography>
              </Grid>
            </Grid>

        )
      })
    }

      </Grid>
    </div>
  )
}
