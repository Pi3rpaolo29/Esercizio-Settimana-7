import './App.css';
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import MainComponent from './components/MainComponent';

function App() {
  return (
    <div className="App text-bg-dark">
      <NavbarComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
