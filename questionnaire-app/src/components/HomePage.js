import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { Typography } from 'antd';

const { Title } = Typography;

function HomePage() {
  return (

    <Container fluid className="bg-primary text-white text-center">
      <Title variant="light" className="py-3 px-5">Questionnaire App</Title>
      <Link to="/quiz">
        <Button variant="light" className="py-3 px-5">
          Start Quiz
        </Button>
      </Link>
    </Container>

  );
}

export default HomePage;