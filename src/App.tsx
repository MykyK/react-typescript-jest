import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import EditPage from "./pages/EditPage";
import Dashboard from './pages/Dashboard';
import NavBar from './components/navBar';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/user/:id" component={EditPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
