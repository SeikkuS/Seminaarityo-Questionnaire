import React, { useState, useEffect } from 'react';
import { Container, Button, Navbar, Row, Col } from 'react-bootstrap';
import { Result, message, Typography } from 'antd';
import 'antd/dist/reset.css';

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(
        'https://the-trivia-api.com/api/questions?limit=20'
      );
      const data = await response.json();
      console.log('Data:', data);
      setQuestions(data);
    } catch (error) {
      console.error(error);
    }
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleNextQuestionClick = () => {
    setShowAnswer(false);
    setCurrentQuestionIndex((currentIndex) => currentIndex + 1);
  };

  const handleAnswerClick = (answer) => {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
      message.success('That was the correct answer! You gain one point!');
    } else {
      message.error('Your answer was incorrect.');
    }
    setShowAnswer(true);
  };

  const shuffleAnswers = (answers) => {
    const shuffledAnswers = [...answers];
    let currentIndex = shuffledAnswers.length;

    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [shuffledAnswers[currentIndex], shuffledAnswers[randomIndex]] = [        shuffledAnswers[randomIndex],
        shuffledAnswers[currentIndex],
      ];
    }

    return shuffledAnswers;
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  if (!questions.length) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const options = shuffleAnswers([
    ...currentQuestion.incorrectAnswers,
    currentQuestion.correctAnswer,
  ]);

  return (
    <div>
      <Navbar bg="dark" variant="dark" className="navBar">
        <Navbar.Brand>Questionnaire App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Score: {score}</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Container style={{ marginTop: '2rem' }}>
        {currentQuestion && (
          <Typography variant="h4">{currentQuestion.question}</Typography>
        )}
        <div style={{ marginTop: '2rem' }}>
          <Row>
            {currentQuestion &&
              shuffleArray([
                ...currentQuestion.incorrectAnswers,
                currentQuestion.correctAnswer,
              ]).map((answer) => (
                <Col xs={12} md={6} key={answer}>
                  <Button
                    variant="outline-secondary"
                    size="lg"
                    style={{ margin: '1rem' }}
                    disabled={showAnswer}
                    onClick={() => handleAnswerClick(answer)}
                  >
                    {answer}
                  </Button>
                </Col>
              ))}
          </Row>
        </div>
        <div style={{ marginTop: '2rem' }}>
          {showAnswer && (
            <Result
              status={score < 5 ? 'error' : 'success'}
              title={`The correct answer is: ${currentQuestion.correctAnswer}`}
            />
          )}
          {currentQuestionIndex < 9 ? (
            <Button
              variant="secondary"
              size="lg"
              style={{ marginTop: '2rem' }}
              onClick={handleNextQuestionClick}
            >
              Next Question
            </Button>
          ) : (
            <Result
              status={score < 5 ? 'error' : 'success'}
              title={`You've answered all questions! Your score is: ${score}`}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export default QuizPage;