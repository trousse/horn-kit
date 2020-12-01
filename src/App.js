
import './App.css';
import ToolBar from './ToolBar.js';
import Presentation from './presentation.js';
import Categories from './catégorie.js'
import Contents from './contents.js'

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';


function Space(props){
  const size = props.size
  return(
      <Typography component="div" style={{ backgroundColor: 'white', height: size +'vh' }}/>
  )
}

function App() {

  const Black_soft = blueGrey[900];
  const orange_soft = grey[500];
  const black = grey[900];
  const blanc = blueGrey[50];

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: black,
      },
      secondary: {
        main: blanc,
      },
    },
    typography: {
      fontFamily: "Jazz LET, fantasy",
    }

  });

  return (
<div className="App">
  <ThemeProvider theme = {theme}>
    <CssBaseline />
    <Container maxWidth="md">
      <ToolBar position = "sticky"/>
      <Presentation/>
      <Space size={6}/>
      <Categories/>
      <Space size={6}/>
      <Contents/>
      <Typography component="div" style={{ backgroundColor: '#bdbdbd', height: '50vh' }}/>
    </Container>
  </ThemeProvider>
</div>
  );
}

export default App;
