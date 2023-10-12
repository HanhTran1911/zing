
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom'
import { Home, Login, Public } from './containers/public'
import path from './ultils/path';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />}> </Route>
          <Route path={path.LOGIN} element={<Login />}>  </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
