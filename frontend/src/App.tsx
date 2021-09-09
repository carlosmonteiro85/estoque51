
import './App.css';


import { NavBar } from 'components/navbar';
import { Footer } from 'components/footer';
import { Rotas } from 'Rotas';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Rotas />
      <Footer />
    </div>
  );
}

export default App;
