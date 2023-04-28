import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import ResultsPage from './components/ResultsPage'; 

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <div className="container">
            <h1>My App</h1>
          </div>
        </Header>
        <Content>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/results" element={<ResultsPage />} />
            </Routes>
          </div>
        </Content>
        <Footer>
          <div className="container">
            <p>My App ©{new Date().getFullYear()}</p>
          </div>
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;