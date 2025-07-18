import Nav from './components/Nav';
import "./index.css";
import Footer from './components/Footer';
import {BrowerRouter as Router, Route} from '.react-router-dom';
import Home from "./pages/Home";
import Books from './pages/Books';
import { books } from "../data";

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path='/' exact componet={Home}/>
      <Route path='/books' render={() => <Books books={books} />} />
      <Route path="/books/1" render={() => <BookInfo books={books} />} /> 
      <Footer />
   </div>
   </Router>
   );
}

export default App;
