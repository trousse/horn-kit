import { withStyles,makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';
import { Component } from 'react';
import Fade from '@material-ui/core/Fade';
import React from 'react';




const styles = (theme) => ({
  root: {
    witdh: 100+'%',
    height : '400px',
    overflow : 'hidden',
    background : theme.palette.primary.main
  },
  img: {
    maxWidth: 100+'%',
  },
  arrowCollumn : {
    position: 'relative',
    background: '#424242',
  },
  containeur:{
    haight: "340px"
  }

});

class Presentation extends Component {

  constructor(props) {
    super(props)
    this.state = {
      images: props.images,
      interval : props.interval,
      size: props.images.length,
      classes: props.classes,

      current : 0,
      fade: true,
      willSlideRight: true,
    };
  }

  prepareForSlideRight(){
    this.setState({fade:false, willSlideRight : true});
  }

  prepareForSlideLeft(){
    this.setState({fade:false, willSlideRight : false});
  }

  slideRight(){


      const {current,size} = this.state;
      if( size > current + 1){
        this.setState({current : current + 1})
      }
      else{
        this.setState({current : 0});
      }

  }

  slideLeft(){

      const {current,size} = this.state;
      if(current > 0){
        this.setState({current : current - 1})
      }
      else{
        this.setState({current : size - 1});
      }

  }

  slide(event){
    const {willSlideRight,current,size} = this.state
    if(willSlideRight){
      this.slideRight()
    }
    else{
      this.slideLeft()
    }
  }


  componentWillMount(){
    const cycle = setInterval(()=>{
      this.prepareForSlideRight()
    },this.state.interval)
    this.setState({cycle: cycle});

  }

  render(){
    const {classes,images,current,cycle,fade} = this.state;
    return (

      <Grid className = {classes.containeur} container>

        <Grid className = {classes.arrowCollumn} item container direction="column" justify="center" xs={1}>
            <Grid item >
                <IconButton component = "div" onClick = {(event)=>{
                  this.prepareForSlideLeft()
                  clearInterval(cycle);
                }}>
                  <ArrowBackIosIcon color ="secondary" fontSize = "large"/>
                </IconButton>
            </Grid>
          </Grid>

        <Grid item xs={10}>
          <div className= {classes.root}>
            <Fade in ={fade} timeout = {{enter:250, exit:250} }
              unmountOnExit
              onExited= {()=>{
               this.slide()
               setTimeout(()=>{
                 this.setState({fade: true});
               },10)
             }}>
              <img className = {classes.img} alt =  "presentation" src = {images[current]} />
            </Fade>
          </div>
        </Grid>

        <Grid className = {classes.arrowCollumn} item container direction="column" justify="center" xs={1}>
            <Grid item >
                <IconButton  component = "div" onClick = {(event)=>{

                  this.prepareForSlideRight()
                  clearInterval(cycle);
                }} >
                  <ArrowForwardIosIcon  color ="secondary" fontSize = "large"  />
                </IconButton>
            </Grid>
        </Grid>

      </Grid>
    )
  }
}

export default withStyles(styles)(Presentation);
