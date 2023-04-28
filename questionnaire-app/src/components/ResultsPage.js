import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';

const { Title } = Typography;

const containerStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#6a0080',
};

const titleStyle = {
  fontSize: 40,
  fontWeight: 'bold',
  color: '#fff',
  marginBottom: 24,
};

const scoreStyle = {
  fontSize: 32,
  fontWeight: 'bold',
  color: '#fff',
  marginBottom: 24,
};

const messageStyle = {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#fff',
  marginBottom: 24,
  textAlign: 'center',
};

const buttonStyle = {
  backgroundColor: '#fff',
  color: '#6a0080',
  padding: '10px 30px',
  marginTop: 24,
  borderRadius: 0,
  borderColor: '#6a0080',
  borderWidth: 2,
};

function ResultsPage({ score }) {
  const message =
    score === 0
      ? 'Better luck next time!'
      : score < 3
      ? 'Not bad, keep trying!'
      : score < 5
      ? 'Good job!'
      : 'Excellent work!';

  return (
    <div style={containerStyle}>
      <Title style={titleStyle}>Quiz App</Title>
      <Title level={2} style={scoreStyle}>
        Your score: {score} / 5
      </Title>
      <Title level={3} style={messageStyle}>
        {message}
      </Title>
      <Link to="/">
        <Button variant="outline-primary" style={buttonStyle}>
          Go Home
        </Button>
      </Link>
    </div>
  );
}

export default ResultsPage;