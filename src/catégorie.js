import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Component } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';


const styles = (theme) => ({
      root:{
        flexGrow : 1,
        backgroundColor:'white',
        position: 'relative',
      },
      img:{
        maxWidth: 100+"%",
        maxHeight: 100+"%",
        cursor: "pointer"
      },
      categorie:{
        marginLeft: '2%',
        marginRight:'2%'
      },
      categories:{
        backgroundColor: 'white',
      },
      title: {
        fontFamily:  "Jazz LET, fantasy",
        fontSize: 35,
        cursor:'default',
        position: 'relative',
      },
      arrow:{
        position : 'absolute',
        top:'0px',
        left:'10%',
      },
      titleContainer:{
        position: 'relative'
      },
      name: {
        fontSize: 20,
        cursor:'default',
      }
  });

class Categories extends Component {

  constructor(props) {
    super(props)
    this.state = {
      classes: props.classes,
      curent: props.tree,
      path:[],
      title:""
    };
  }

  handleClick(index){
    const {curent} = this.state
    const {name,subCategories} = curent[index]
    let {path} = this.state

    if(subCategories){
      path.push(curent)
      this.setState({curent:subCategories,path:path,title:name})
    }
    else{
      console.log('go to ' + name)
    }
  }

  getBack(){
    let {path} = this.state
    const last = path.pop()
    this.setState({curent : last , path : path})
  }

  render(){
    const {classes,curent,path,title} = this.state
    return(
      <div className = {classes.root}>
        <Typography component="div" style={{ backgroundColor: 'white', height: '10%' }}>
          {path[0] ?(
            <div className = {classes.titleContainer}>
              <Typography component = "H3" className={classes.title}>
                  {title}
              </Typography>
              <IconButton className = {classes.arrow} onClick={()=>{this.getBack()}}>
                <ArrowBackIosIcon color ="secondary" fontSize = "large" color = "primary" classes = {{colorPrimary: 'black' }} style = {{fontSize: 45}}/>
              </IconButton>
            </div>
          ):(
            <Typography component = "H3" className={classes.title}>
                CATEGORIES
            </Typography>
          )}

        </Typography>

        <Grid className = {classes.categories} container justify="space-around" spacing = {0}>

        {
        curent.map((categorie,index)=>{
          return(

              <Grid key = {index} className = {classes.categorie} item xs = {3} container direction='column'>
                <Grid item>
                  <Typography component="div" style={{ backgroundColor: 'white', maxHeight: '10%'}} >
                    <img className = {classes.img} alt = "image présentation" src ={categorie.src} onClick = {(e)=>{this.handleClick(index)}}/>
                  </Typography>
                </Grid>
                <Grid item >
                  <Typography className= {classes.name}  >
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
}
export default withStyles(styles)(Categories);
