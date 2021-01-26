import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Component } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';


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
      fade: true,
    };
  }

  handleClick(index){
    const {curent} = this.state
    const next = curent.subCategories[index]
    let {path} = this.state

    if(next.subCategories){
      path.push(curent)
      this.setState({curent:next, path:path})
    }
    else{
      console.log('go to ' + next.name)
    }
  }

  getBack(){
    let {path} = this.state
    if(path[0]){
      const last = path.pop()
      this.setState({curent : last, path : path})
    }
  }

  LastGoOf(callback){
    this.setState({fade:false})
      setTimeout(()=>{
        callback()
    },201)
  }

  render(){
    const {classes,curent,path,fade} = this.state
    return(
      <div className = {classes.root}>
      <Fade in ={fade} timeout = {{enter:300, exit:200} }
        unmountOnExit
        onExited= {()=>{ this.setState({fade: true}) }}>
        <div>
           <Typography component="div" style={{ backgroundColor: 'white', height: '10%' }}>
             {path[0] ?(
               <div className = {classes.titleContainer}>
                 <Typography component = "H3" className={classes.title}>
                     {curent.name}
                 </Typography>
                 <IconButton className = {classes.arrow} onClick={() => this.LastGoOf( () => this.getBack() )}>
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
           curent.subCategories.map((categorie,index)=>{
             return(

                 <Grid key = {index} className = {classes.categorie} item xs = {3} container direction='column'>
                   <Grid item>
                     <Typography component="div" style={{ backgroundColor: 'white', maxHeight: '10%'}} >
                       <img className = {classes.img} alt = "image présentation" src ={categorie.src} onClick = {(e) => {
                         if(curent.subCategories[index].subCategories){ this.LastGoOf( () => this.handleClick(index) ) }
                         else{this.handleClick(index)}
                       }}/>
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
       </Fade>

      </div>
    )
  }
}
export default withStyles(styles)(Categories);
