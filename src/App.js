import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Specials from './components/Specials';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className='app'>
      <Header /> 
      <Main></Main>
      <Specials />
      <Testimonial />
      <Footer></Footer>
    </div>
  );
}

export default App;
