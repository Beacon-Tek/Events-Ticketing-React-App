import './App.css';
import Home from './Components/Home';
import Searchbox from './Components/Searchbox';
import Events from './Components/Events';
import CreateEvent from './Components/CreateEvent';
import Partners from './Components/Partners';
import Blog from './Components/Blog';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <Searchbox />
      <Events />
      <CreateEvent />
      <Partners /> 
      <Blog />  
      <Footer />   
    </div>
  );
}

export default App;
