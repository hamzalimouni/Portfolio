import styled from 'styled-components'
import Contact from './components/Contact.jsx'
import Hero from './components/Hero.jsx'
import Who from './components/Who.jsx'
import Works from './components/Works.jsx'

const Container = styled.div`
  height: 100vh;
  background-color: rebeccapurple;
`;

function App() {

  return (
    <Container>
      <Hero /> 
      <Who /> 
      <Works /> 
      <Contact /> 
    </Container>
  )
}

export default App
