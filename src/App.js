import React , {useState} from 'react';
import News from './components/News';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  const [category, setCategory] = useState('general');

    return (
        <div className="App" >
          <Navbar setCategory={setCategory} />
          <News category={category} />
          <Footer/>
        </div>
    );
}

export default App;