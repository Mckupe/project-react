
import './App.css';
import { Routes,Route} from 'react-router-dom';

import {TestPage} from './pages/Test'
import {Main} from './pages/Main'

function App() {
  return (
        <div className="App">             
            <Routes>
                <Route exact path="/" element={<Main/>}/>
                <Route exact path="/test" element={<TestPage/>}/>
            </Routes>
        </div>
  );
}

export default App;
