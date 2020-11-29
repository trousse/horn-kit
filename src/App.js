
import './App.css';
import ToolBar from './ToolBar.js'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



function App() {
  return (
    <div className="App">

    <CssBaseline />
      <Container maxWidth="md">
      <ToolBar position = "sticky"></ToolBar>
    <Typography component="div" style={{ backgroundColor: 'white', height: '100vh' }} />

    </Container>

    </div>
  );
}

export default App;
