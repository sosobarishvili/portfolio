import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Background from './components/First background/Background';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <About />
      <Contact />
    </div>
  );
}

export default App;
