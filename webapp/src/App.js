import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavigationBar from "./components/NavigationBar";
import Data from "./components/Data";
import DataList from "./components/DataList";
import Home from "./components/Home";
import {Col, Container, Row} from "react-bootstrap";
const marginTop = {
    marginTop:"20px"
};
function App() {
  return (
    <Router>
        <NavigationBar/>
      <Container>
            <Row>
                <Col style = {marginTop}>
                    <Switch>
                        <Route path = "/" exact component= {Home}/>
                        <Route path = "/add" exact component= {Data}/>
                        <Route path = "/edit/:id" exact component= {Data}/>
                        <Route path = "/list" exact component= {DataList}/>
                    </Switch>
                </Col>
           </Row>

        </Container>
    </Router>
  );
}

export default App;
