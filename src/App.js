import './styles/App.scss';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Home />
    </div>
  );
}

export default App;
