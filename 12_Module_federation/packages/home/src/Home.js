import React from "react";
import { Container, Button } from "reactstrap";

const Home = () => {
  return (
    <div>
      <Container>
        <h1 className="display-3">Olá Module Federation</h1>
        <hr className="my-2" />
        <p>Este componente é de outro app</p>
        <p className="lead">
          <Button color="primary">Botão</Button>
        </p>
      </Container>
    </div>
  );
};

export default Home;
