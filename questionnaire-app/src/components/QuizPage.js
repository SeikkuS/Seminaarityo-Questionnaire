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
        "https://the-trivia-api.com/api/questions"
      );
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNextQuestionClick = () => {
    setShowAnswer(false);
    setCurrentQuestionIndex((currentIndex) => currentIndex + 1);
  };

  const handleAnswerClick = (answer) => {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
      message.success("That was the correct answer! You gain one point!");
    } else {
      message.error("Your answer was incorrect.");
    }
    setShowAnswer(true);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  if (!questions.length) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Quiz App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Score: {score}
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Container style={{ marginTop: "2rem" }}>
        <Typography variant="h4">{currentQuestion.question.text}</Typography>
        <div style={{ marginTop: "2rem" }}>
          <Row>
            {currentQuestion.incorrectAnswers.map((answer) => (
              <Col xs={12} md={6} key={answer}>
                <Button
                  variant="outline-secondary"
                  size="lg"
                  style={{ margin: "1rem" }}
                  disabled={showAnswer}
                  onClick={() => handleAnswerClick(answer)}
                >
                  {answer}
                </Button>
              </Col>
            ))}
            <Col xs={12} md={6}>
              <Button
                variant="outline-secondary"
                size="lg"
                style={{ margin: "1rem" }}
                disabled={showAnswer}
                onClick={() => handleAnswerClick(currentQuestion.correctAnswer)}
              >
                {currentQuestion.correctAnswer}
              </Button>
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: "2rem" }}>
          {showAnswer && (
            <Result
              status={score < 5 ? "error" : "success"}
              title={`The correct answer is: ${currentQuestion.correctAnswer}`}
            />
          )}
          <Button
            variant="secondary"
            size="lg"
            style={{ marginTop: "2rem" }}
            onClick={handleNextQuestionClick}
          >
            Next Question
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default QuizPage;