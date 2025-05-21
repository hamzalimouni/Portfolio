import { useState } from "react";
import styled from "styled-components";
import WebDesign from "./WebDesign";
import Development from "./Development";
import ProductDesign from "./ProductDesign";

const data = ["Web Design", "Development", "Illustration", "Product Design", "Social Media"];

const Section = styled.section`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 1400px;
    scroll-snap-align: center;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: none;
`;

const ListItem = styled.li`
    cursor: pointer;
    font-size: 70px;
    font-weight: bold;
    color: transparent;
    -webkit-text-stroke: 1px white;
    position: relative;

    &::after {
        content: "${(props) => props.text}";
        position: absolute;
        top: 0;
        left: 0;
        color: pink;
        width: 0px;
        overflow: hidden;
        white-space: nowrap;
    }

    &:hover {
        &::after {
            animation: moveText 0.5s linear both;

            @keyframes moveText {
                to {
                    width: 100%;
                }
            }
        }
    }
`;

const Right = styled.div`
    flex: 1;
`;

const Works = () => {
    const [work, setWork] = useState("Web Design");
    return (
        <Section>
            <Container>
                <Left>
                    <List>
                        {data.map((item, i) => (
                            <ListItem key={i} text={item} onClick={() => setWork(item)}>
                                {item}
                            </ListItem>
                        ))}
                    </List>
                </Left>
                <Right>{work === "Web Design" ? <WebDesign /> : work === "Development" ? <Development /> : <ProductDesign />}</Right>
            </Container>
        </Section>
    );
};

export default Works;
