import React from "react";
import { Navbar, Footer } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
function App() {
  return (
    <div className='App'>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
