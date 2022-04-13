import Formm from './components/Formm'
import TablaGastos from './components/TablaGastos'
import "bootstrap/dist/css/bootstrap.min.css";
import { Coin } from 'react-bootstrap-icons';
import { Route } from 'react-router';
import { Link, Switch } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {LinkContainer} from 'react-router-bootstrap'


function App() {
  return (
    <>   
      <main>
        <Navbar collapseOnSelect bg="dark" expand="md" className="mb-3">
        <LinkContainer to="/">
          <Navbar.Brand>
            <h5 Style="color: white">Gastos personales</h5>
            </Navbar.Brand>
        </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav>              
              <LinkContainer to="/">
                <Nav.Link>
                  <h5 Style="color: white">Home</h5>
                  </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/listado">
                <Nav.Link>
                  <h5 Style="color: white">Listado</h5>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/" component={Formm} exact />
          <Route path="/listado" component={TablaGastos} />
        </Switch>        
        
        </main>  
    </>
    
  );
}

export default App;
