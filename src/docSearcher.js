
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
    background : grey[500],
    padding : theme.spacing(1)

  },

  search: {
   witdh : '100%',
   borderRadius: theme.shape.borderRadius,
   backgroundColor: fade(theme.palette.common.white, 0.15),
   '&:hover': {
     backgroundColor: fade(theme.palette.common.white, 0.25),
   },

 },

 inputInput: {
     width: '100%',
     fontSize: 25,
    textAlign: 'center',
    caretColor: 'transparent',

   },

  inputRoot: {
    flexGrow :1,
    width:'100%',
    height:"80%",

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
  },

  focused:{
     backgroundColor:fade(theme.palette.common.white, 0.45)
  },
  disabled:{
     backgroundColor: grey[400],
     color:grey[900]
  }

});


class DocSearcher extends Component {

  constructor(props) {
    super(props)

    this.state = {
      onClick: props.onClick,
      item: props.item,
      classes: props.classes,
      code: ['_','_','_','_','_','_'],
      loaded : false,
      full: false,
      size: props.size,
    };
  }

  backToLast(e){
    const {code} = this.state
    let index = e.target.id
    let value = code[index - 2]

    while(value == '_' && index > 1){
        index-=1
        value = code[index - 2]
    }
    document.getElementById(index).focus()
  }

  sendClick(){
    const {code,onClick} = this.state
    this.setState({loaded : true});
    onClick(code.join(''));
  }

  checkFull(){
    const {code} = this.state
    const full = code.find( digit => digit == '_' )
    if(full){ this.setState({full: false}) }
    else{this.setState({full: true})}
  }

  handleChange(e){
    let {code, size, full} = this.state;
    const index = e.target.id;
    const {key,keyCode} = e;

    const nextFocus = (index,size)=>{
      if(index < size){ document.getElementById(Number(index)+1).focus() }
    }
    const prevFocus = (index) => {
      if(index>1){ document.getElementById(Number(index)-1).focus() }
    }
    const up = (index,code) => {
      const value = code[index-1]
      if(Number(value)<9){ code[index-1] = Number(value) + 1 }
      else{code[index-1] = 0}
      this.setState({code : code})
    }
    const down = (index,code) => {
      const value = code[index-1]
      if(Number(value)>0){ code[index-1] = Number(value) - 1 }
      else{code[index-1] = 9}
      this.setState({code : code})
    }

    const isLetter = (keyCode) =>{
      const letterKeyCodes = [...Array(91).keys()].slice(65)
      return letterKeyCodes.includes(keyCode)
    }

    if(Number(key) || isLetter(keyCode)){
      code[index-1] = key.toUpperCase()
      this.checkFull()
      this.setState({code: code},()=>{ nextFocus(index,size) })
    }
    else{
      switch(keyCode){
        case 46:
          code[index-1] = '_'
          this.setState({code: code, full: false})
          break
        case 37:
          prevFocus(index)
          break
        case 38:
          up(index,code)
          this.checkFull()
          break
        case 39:
          nextFocus(index,size)
          break
        case 40:
          down(index,code)
          this.checkFull()
          break
        case 8:
          code[index-1] = '_'
          this.setState({code: code, full: false},()=>{ prevFocus(index) })
          break
        case 13:
          if(full){ this.sendClick()}
          break
      }
    }

  }
componentWillReceiveProps(nextProps,nextContext){
  this.setState({item:nextProps.item[0]})
}
  render(){
    const {classes,item,code,loaded,onClick,full} = this.state;
    return(
        <Paper  elevation={7} className = {classes.searcher}>
          <Grid container direction = 'column'  justify='center' alignItems='center' spacing={3}>

            <Grid  item container direction="row" alignItems= "center" justify = "center" spacing={0}>
              {[1,2,3,4,5,6].map((index)=>{
                return(
                  <Grid key={index} item xs = {2} >
                    <div className={classes.search}>
                      <InputBase
                        id={index.toString()}
                        value={code[index-1]}
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                          focused : classes.focused
                        }}
                        inputProps={{ 'aria-label': 'search','maxLength' : 2,'onClick': (e)=>{this.backToLast(e)}, 'onKeyDown' : (e)=>{this.handleChange(e)} }}
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
                          <Grid item xs = {6}>
                            <a href={item.pdfSRC} download = 'resultat'>
                              <PictureAsPdfSharpIcon className= {classes.icons}/>
                            </a>
                          </Grid>
                          <Grid item xs= {6}>
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
              <Button disabled = {!full} onClick = {()=>{this.sendClick()}}
                className = {classes.button} variant="outlined"  color="primary"
                classes = {{disabled: classes.disabled}}>
                    search for doc
              </Button>
            </Grid>

          </Grid>
        </Paper>
    )
  }
}

export default withStyles(styles)(DocSearcher);
