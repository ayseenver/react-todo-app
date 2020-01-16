import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import { StoreProvider, createStore } from "easy-peasy";
import Model from "./Model";

const store = createStore(Model);

function App() {
  return (
    <StoreProvider store={store}>
    <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo />
                <h1>App</h1>
                <Todos />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;
