import Footer from './components/Home/Footer';
import AllNav from './components/Home/AllNav';
import Home from './pages/Home';
import About from './pages/About';
import Modal from './components/Modals/Modal';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Modal />
      <AllNav />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
