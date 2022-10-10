
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { Loby } from './modules/Loby';
import { LobyList } from './modules/LobyList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/room/:id' element={<Loby/>}/>
        <Route path='/' element={<LobyList/>}/>
        {/* <Route element={NotFound404}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
