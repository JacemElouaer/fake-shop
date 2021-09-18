import './App.css';
import Header from './containners/Header'; 
import {BrowserRouter as Router ,  Switch  ,  Route}from  'react-router-dom';
import ProductListing from './containners/ProductListing';
import ProductDetail from './containners/ProductDetail';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/> 
      <Switch>
        <Route path="/" exact  component={ProductListing} /> 
        <Route path="/product/:productId" exact   component={ProductDetail} /> 
        <Route>Not Found</Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
