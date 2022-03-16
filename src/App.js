import './App.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';

function App() {

const user = "Elif";
const day = "Wednesday";
const weather = "cloudy";


  return ( 
    <div className="container">
      <Header user={user} day={day} />
      <MainContent user={user} />
      <Footer weather={weather}/>
    </div>

  );
} 

export default App; 
