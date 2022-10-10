
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Loby } from './modules/Loby';
import { LobyList } from './modules/LobyList';
import { RoomNotFind } from './modules/RoomNotFind';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/room/:id' element={<Loby />} />
        <Route path='/' element={<LobyList />} />
        <Route path='/room-not-find' element={<RoomNotFind />} />

        {/* <Route element={NotFound404}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
