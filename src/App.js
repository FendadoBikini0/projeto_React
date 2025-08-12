import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Portfolio from './components/Portfolio';
import About from './components/About';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Catalog />
      <Portfolio />
      <About />
    </>
  );
}

export default App;
