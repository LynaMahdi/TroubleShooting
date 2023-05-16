import './App.css';
import First from './components/main';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import Choices from './components/choices';
import Show from './components/show';
function App() {

  const [os,setOs]=useState("");
  const [problemH,setProblemH]=useState("");
  const [problemS,setProblemS]=useState("");
  const [problemB,setProblemB]=useState("");

  return (
    <BrowserRouter>
    <Routes>
      
      <Route exact path='/' element={<First setOs={setOs} />}></Route>
      <Route exact path='/Problem' element={<Choices setOs={setOs} os={os} problemH={problemH} setProblemH={setProblemH} problemS={problemS} setProblemS={setProblemS} problemB={problemB} setProblemB={setProblemB}/>}></Route>
      <Route exact path='/Result' element={<Show os={os}  problemH={problemH}/>}></Route>


    </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
