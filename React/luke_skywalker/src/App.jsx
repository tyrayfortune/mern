import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import StarWarsForm from './components/StarWarsForm';
import People from './views/People';
import Planets from './views/Planets';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <StarWarsForm/>  
      <Routes>
        <Route path="/people/:id" element={<People/>} />
        {/* can have self closing tags unless you have  a hild element, i.e for planets route if you added a city route */}
        <Route path="/planets/:id" element={<Planets/>} > </Route>
      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
