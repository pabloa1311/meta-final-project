import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Specials from './components/Specials';

function App() {
  return (
    <div className='app'>
      <Header /> 
      <Main></Main>
      <Specials />
      <Footer></Footer>
    </div>
  );
}

export default App;
