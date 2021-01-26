import { Component } from 'react';
import './App.css';

import ToolBar from './Home_Page/ToolBar.js';
import Presentation from './Home_Page/presentation.js';
import Categories from './Home_Page/catégorie.js'
import Contents from './Home_Page/contents.js'

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';

import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';

import categorie_caisson_de_basse from "./images_rsc/categorie_caisson_de_basse.jpg";
import lampe from './images_rsc/lampe.jpg';
import caisson2 from './images_rsc/caisson2.jpg';
import hautParleur from './images_rsc/hautParleur.jpg';
import acessoire from './images_rsc/acessoire.png';
import surMesure from './images_rsc/surMesure.jpg'


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
];

const items = [{ images : categorie_caisson_de_basse , videoSRC: 'https://www.youtube.com/watch?v=-2opH8aG9Ag', code: 'MHB001' , pdfSRC: './resultat.pdf'},
              { images : lampe , videoSRC: 'https://www.youtube.com/watch?v=Jn09UdSb3aA', code: 'MHB002' , pdfSRC: './resultat.pdf'},
              { images : caisson2 , videoSRC: 'https://www.youtube.com/watch?v=-2opH8aG9Ag', code: 'MHB003' , pdfSRC: './resultat.pdf'},
              { images : hautParleur , videoSRC: 'https://www.youtube.com/watch?v=-2opH8aG9Ag', code: 'MHB004' , pdfSRC: './resultat.pdf'},]

const categories = {
  name:'categorie',
  subCategories:[
    {src: caisson2 , name: 'Sonorisation de puissance', subCategories:[
        {src: caisson2 , name: 'Sets complets',link:''},
        {src: categorie_caisson_de_basse , name: 'Aigus - piézo',link:''},
        {src: caisson2 , name: 'Mediums - Bass', link:''},
        {src: surMesure , name: 'Pièces détachées', subCategories:[
            {src: caisson2 , name: 'Grilles de protection',link:''},
            {src: caisson2 , name: 'Haut-Parleurs',link:''},
            {src: caisson2 , name: 'Platines pour connectiques',link:''},
            {src: caisson2 , name: 'Coins & Frettes',link:''},
            {src: caisson2 , name: 'Isolation Phonique',link:''},
            {src: caisson2 , name: 'Peintures',link:''},
          ]},
      ]},
    {src: categorie_caisson_de_basse , name: 'Sonorisation de salon', subCategories:[
      {src: caisson2 , name: 'Enceintes Passives'},
      {src: caisson2 , name: 'Enceintes Actives'},
      {src: caisson2 , name: 'Enceintes Sans Fil'},
      {src: caisson2 , name: 'Pièces Détacées',subCategories:[
          {src: caisson2 , name: 'Amplificateur encastrable'},
          {src: caisson2 , name: 'completer'},
          {src: caisson2 , name: 'completer'},
          {src: caisson2 , name: 'completer'},
          {src: caisson2 , name: 'completer'},
          {src: caisson2 , name: 'completer'},
        ]},
     ]},
    {src: lampe, name: 'Enceintes portables',subCategories:[
        {src: caisson2 , name: 'Enceintes Vintage'},
        {src: caisson2 , name: 'Enceintes Sac-à-Dos'},
        {src: caisson2 , name: 'Autocollants'},
        {src: caisson2 , name: 'pièces Détachées',subCategories:[
            {src: caisson2 , name: 'completer'},
            {src: caisson2 , name: 'completer'},
        ]},
     ]},
    {src: hautParleur, name: 'Haut parleurs',subCategories:[
      {src: caisson2 , name: 'Projecteurs Laser'},
      {src: caisson2 , name: 'Pyrotechnie'},
      {src: caisson2 , name: 'Machines à fumer',subCategories:[
          {src: caisson2 , name: 'Electrique'},
          {src: caisson2 , name: 'Gaz'},
          {src: caisson2 , name: 'pièces détachées'},
      ]},
      {src: caisson2 , name: 'Pilotage MIDI',subCategories:[
        {src: caisson2 , name: 'Contrôleurs MIDI'},
        {src: caisson2 , name: 'Câbles MIDI'},
        {src: caisson2 , name: 'Récepteurs MIDI'},
       ]},
     ]},
    {src: acessoire, name: 'Câbles & connectiques',subCategories:[
        {src: caisson2 , name: 'Cables et Embases MIDI'},
        {src: caisson2 , name: 'Enceintes Actives'},
     ]},
    {src: surMesure, name: 'Pièces Détachées',subCategories:[
        {src: caisson2 , name: 'Sonorisation de puissance', subCategories:[
            {src: caisson2 , name: 'Grilles de protection'},
            {src: caisson2 , name: 'Haut-Parleurs',link:''},
            {src: caisson2 , name: 'Platines pour connectiques'},
            {src: caisson2 , name: 'Coins & Frettes'},
            {src: caisson2 , name: 'Isolation Phonique'},
            {src: caisson2 , name: 'Peintures'},
          ]},
        {src: caisson2 , name: 'sonorisation HIFI',subCategories:[
            {src: caisson2 , name: 'Amplificateur encastrable'},
            {src: caisson2 , name: 'completer'},
            {src: caisson2 , name: 'completer'},
            {src: caisson2 , name: 'completer'},
            {src: caisson2 , name: 'completer'},
            {src: caisson2 , name: 'completer'},
          ]},
        {src: caisson2 , name: 'Encaintes Portables',subCategories:[
            {src: caisson2 , name: 'completer'},
            {src: caisson2 , name: 'completer'},
        ]},
        {src: caisson2 , name: 'Projecteurs Laser'},
        {src: caisson2 , name: 'Machines à Fumer'},
    ]},
  ]
}



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
            <Categories tree = {categories}/>
            <Space size={6}/>
            <Contents docSearcherProps = {{item: item , onClick: (code)=>{ this.handleCodeSubmit(code) }}}/>
            <Typography component="div" style={{ backgroundColor: theme.palette.primary.light, height: '50vh' }}/>
          </Container>
        </ThemeProvider>
      </div>
    )
  }



}

export default withStyles(styles)(App);
