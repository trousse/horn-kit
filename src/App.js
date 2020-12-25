import { Component } from 'react';
import './App.css';

import ToolBar from './ToolBar.js';
import Presentation from './presentation.js';
import Categories from './catégorie.js'
import Contents from './contents.js'

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';

import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';
import categorie_caisson_de_basse from "./categorie_caisson_de_basse.jpg";
import lampe from './lampe.jpg';
import caisson2 from './caisson2.jpg';
import hautParleur from './hautParleur.jpg';

function Space(props){
  const size = props.size
  return(
      <Typography component="div" style={{ backgroundColor: 'white', height: size +'vh' }}/>
  )
}

const styles = (theme) => ({
    container:{
      overflow : 'hidden',
    }
  })

const images = [
    'http://musicalechoes.fr/me1/wp-content/uploads/2014/08/Samedi-0019.jpg',
    'http://digitaljournalist.eu/OnTheRoad/wp-content/blogs.dir/1/files/gallery-bw-free-party/1734_18line.jpg',
    'https://i.ytimg.com/vi/QP9jJpuu3_s/maxresdefault.jpg',
    './image_demo.jpg'
];

const items = [{ images : categorie_caisson_de_basse , videoSRC: 'https://www.youtube.com/watch?v=-2opH8aG9Ag', code: '001' , pdfSRC: './resultat.pdf'},
              { images : lampe , videoSRC: 'https://www.youtube.com/watch?v=Jn09UdSb3aA', code: '002' , pdfSRC: './resultat.pdf'},
              { images : caisson2 , videoSRC: 'https://www.youtube.com/watch?v=-2opH8aG9Ag', code: '003' , pdfSRC: './resultat.pdf'},
              { images : hautParleur , videoSRC: 'https://www.youtube.com/watch?v=-2opH8aG9Ag', code: '004' , pdfSRC: './resultat.pdf'},]

const categories = [
{src: categorie_caisson_de_basse, name: 'Sonorisation de puissance', id: 1},
{src: categorie_caisson_de_basse, name: 'Sonorisation de salon', id: 2},
{src: categorie_caisson_de_basse, name: 'Mise en scene', id: 3},
{src: categorie_caisson_de_basse, name: 'Haut parleurs', id: 4},
{src: categorie_caisson_de_basse, name: 'Accessoires', id: 5},
{src: categorie_caisson_de_basse, name: 'Sur mesures', id: 6},
]

const black = grey[900];
const blanc = blueGrey[50];

const theme = createMuiTheme({
  palette: {
    primary: {
      main: black,
      light: grey[400],
      dark : black
    },
    secondary: {
      main: blanc,
    },
  },
  typography: {
    fontFamily: "Jazz LET, fantasy",
  }
});

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      item: {},
      classes : props.classes,
    }
  }

  handleCodeSubmit(code){
    let newItem = items.filter((item)=>{
      return item.code === code;
    })

    this.setState({item:newItem});
  }

  render(){
    const {classes,item} = this.state
    return (
      <div className="App">
        <ThemeProvider theme = {theme}>
          <CssBaseline />
          <Container className = {classes.container} maxWidth="md">
            <ToolBar position = "sticky"/>
            <Presentation images = {images} interval = {4000}/>
            <Space size={6}/>
            <Categories categories = {categories}/>
            <Space size={6}/>
            <Contents docSearcherProps = {{item: item , onClick: (code)=>{ this.handleCodeSubmit(code) }}}/>
            <Typography component="div" style={{ backgroundColor: theme.palette.primary.light, height: '50vh' }}/>
          </Container>
        </ThemeProvider>
      </div>
    );
  }



}

export default withStyles(styles)(App);
