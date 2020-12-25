
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { Component } from 'react';
import { withStyles, fade } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import PictureAsPdfSharpIcon from '@material-ui/icons/PictureAsPdfSharp';
import VideoLibrarySharpIcon from '@material-ui/icons/VideoLibrarySharp';


const styles = (theme) => ({
  root:{
    flexGrow:1,
    display : 'flex',
  },

  searcher:{
    flexGrow: 1,
    height: '100%',
    display: 'flex',
    background : grey[500]

  },

  search: {
   witdh : '100%',
   borderRadius: theme.shape.borderRadius,
   backgroundColor: fade(theme.palette.common.white, 0.15),
   '&:hover': {
     backgroundColor: fade(theme.palette.common.white, 0.25),
   },
   '&:focus': {
     backgroundColor: fade(theme.palette.common.white, 0.25),
   },

 },

 inputInput: {
     width: '100%',
     fontSize: 35,
    textAlign: 'center',
    caretColor: 'transparent',

   },

  inputRoot: {
    flexGrow :1,
    width:'100%',
    height:"80%"
  },

  view: {
    borderStyle: 'dotted',
    borderWidth: '1px',
    maxWidth : '80%',
    maxHeight : '100%',
  },

  viewLoaded:{
    maxWidth:'80%',
    maxHeight : '100%',
  },

  buttonContainer:{
    maxWidth : '100%',
    witdh:'90%'
  },

  button:{
    backgroundColor: grey[200],
  },

  message:{
    alignItems : 'center',
    fontSize : 18,
  },

  error:{
    alignItems : 'center',
    fontSize : 25,
  },

  images:{
    maxWidth:'100%',
    maxHeight: '100%'
  },

  icons:{
    fontSize: 50,
    color: grey[200]
  }

});

class DocSearcher extends Component {

  constructor(props) {
    super(props)

    this.state = {
      onClick: props.onClick,
      item: props.item,
      classes: props.classes,
      code: [0,0,0],
      loaded : false,
    };
  }

  handleChange(e){
    let {code} = this.state;

    const index = e.target.id;
    const prevValue = code[index-1];
    const newValue = e.target.value;

    if(newValue[0] === prevValue){
      code[index-1] = newValue[1];

    }
    else if(newValue[0] === undefined){
        code[index-1] = 0;
    }
    else{
      code[index-1] = newValue[0];
    }
      this.setState({code: code },()=>{
        if(index < code.length){
            let newIndex = Number(index) + 1
            document.getElementById(newIndex).focus()
        }
      });


  }
componentWillReceiveProps(nextProps,nextContext){
  this.setState({item:nextProps.item[0]})
}
  render(){
    const {classes,item,code, loaded,onClick} = this.state;
      console.log(item);
    return(
        <Paper  elevation={7} className = {classes.searcher}>
          <Grid container direction = 'column'  justify='center' alignItems='center' spacing={2}>

            <Grid  item container direction="row" alignItems= "center" justify = "center" spacing={3}>
              {[1,2,3].map((index)=>{
                return(
                  <Grid key={index} item xs = {3} >
                    <div className={classes.search}>
                      <InputBase
                        type='number'
                        id={index}
                        value={code[index-1]}
                        onChange = {(e)=>this.handleChange(e)}
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search','maxLength' : 2 ,'onkeyPress': (e)=>{ alert(e.key)}}}
                      />
                    </div>
                  </Grid>
                )
              })
            }
            </Grid>



              {loaded ? (
                <Grid item xs={6} className={classes.viewLoaded}>
                {item ? (
                    <div>
                      <Grid container justify = 'space-between' alignItems='center' >
                          <Grid item xs = {8}>
                            <img className = {classes.images} src= {item.images} alt = "product not found"/>
                          </Grid>
                        <Grid item container direction = 'column' xs={4} justify = 'space-between' alignItems='center'>
                          <Grid xs = {6}>
                            <a href={item.pdfSRC} download = 'resultat'>
                              <PictureAsPdfSharpIcon className= {classes.icons}/>
                            </a>
                          </Grid>
                          <Grid xs= {6}>
                            <Link href={item.videoSRC}>
                              <VideoLibrarySharpIcon className= {classes.icons}/>
                            </Link>
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                    ):(
                    <div>
                      <p className = {classes.error}> product not found </p>
                    </div>
                    )}
                </Grid>
                ):(
                <Grid item xs={6} className={classes.view}>
                  <p className = {classes.message}> Enter the idProduct that you are looking for then get the documentation and tutoriel video </p>
                </Grid>
                )
              }



             <Grid item xs = {2} className = {classes.buttonContainer}>
              <Button onClick = {()=>{
                this.setState({loaded : true});
                onClick(code.join(''));
              }}
                className = {classes.button} variant="outlined"  color="primary">
                    search for doc
              </Button>
            </Grid>

          </Grid>
        </Paper>
    )
  }
}

export default withStyles(styles)(DocSearcher);
