import styled from "styled-components";
import Contact from "./components/Contact.jsx";
import Hero from "./components/Hero.jsx";
import Who from "./components/Who.jsx";
import Works from "./components/Works.jsx";

const Container = styled.div`
    height: 100vh;
    color: white;
    background: url("./img/bg.jpeg");
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

function App() {
    return (
        <Container>
            <Hero />
            <Who />
            <Works />
            <Contact />
        </Container>
    );
}

export default App;
