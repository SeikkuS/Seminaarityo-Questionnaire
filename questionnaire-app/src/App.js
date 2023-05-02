import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';
import { Layout } from 'antd';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';


const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        
        <Content>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/quiz" element={<QuizPage />} />
            </Routes>
          </div>
        </Content>
        <Footer>
          <div className="container">
            <p>Questionnaire App {new Date().getFullYear()}</p>
          </div>
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;