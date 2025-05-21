import styled from "styled-components";
import Map from "./Map";

const Section = styled.section`
    height: 100vh;
    scroll-snap-align: center;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 50px;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Form = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

const Title = styled.h2`
    font-weight: 200;
`;

const Input = styled.input`
    padding: 20px;
    background-color: #e8e6e6;
    border: none;
    border-radius: 5px;
`;

const TextArea = styled.textarea`
    padding: 20px;
    background-color: #e8e6e6;
    border: none;
    border-radius: 5px;
`;

const Button = styled.button`
    color: white;
    background-color: #da4ea2;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    padding: 20px;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        // Here you can handle the form submission, e.g., send data to an API or you can use EmailJS
    };

    return (
        <Section>
            <Container>
                <Left>
                    <Form onSubmit={handleSubmit}>
                        <Title>Contact Us</Title>
                        <Input type="text" placeholder="Name" />
                        <Input type="email" placeholder="Email" />
                        <TextArea placeholder="Write your message..." rows={10}></TextArea>
                        <Button type="submit">Send</Button>
                    </Form>
                </Left>
                <Right>
                    <Map />
                </Right>
            </Container>
        </Section>
    );
};

export default Contact;
