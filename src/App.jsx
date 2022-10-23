import React from 'react';
import Funcom from './components/functional'
import Classcomp from './components/classcomponents'
import NavBar from './components/navbar'
import PageNot from './components/PageNotFound'
import HomeComponents from './components/home';
//router import
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        {/* <Route path="funcom" element={<Funcom></Funcom>}></Route>
        <Route path="classcom" element={<Classcomp></Classcomp>}></Route> */}
        <Route path="" element={<HomeComponents></HomeComponents>}></Route>
        <Route path="*" element={<PageNot></PageNot>}></Route> 
      </Routes>
    </div>
  );
}

export default App;
