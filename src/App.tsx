import './App.css';
import { background } from './Assets';
import styled from 'styled-components'
import Routers from './Routes';


function App() {

  return (
    <Container className="w-screen h-screen bg-white">
      <Routers/>
    </Container>
  );
}

const Container = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${background});

`

export default App;
