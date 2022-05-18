import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Edit from './views/Edit';

function App() {
  return (
    <BrowserRouter> 
    <div className="App">
    <Routes>
      {/* ROOT ROUTE FOR MAIN */}
      <Route path="/" element={<Main/>}/>
      {/* product_id route for details */}
      <Route path="/:product_id" element={<Detail/>}/>
      <Route path="/:product_id/edit" element={<Edit/>}/>
    </Routes>


    </div>
    </BrowserRouter>
  );
}

export default App;
