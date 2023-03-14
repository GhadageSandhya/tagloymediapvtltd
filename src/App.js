import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Pages/Sidebar';
import ImagesComponent from './Pages/ImagesComponent';
import Checkboxes from './Pages/Checkboxes';
// Bootstrap css path
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    // Create Routes here
    <Router>
      <Sidebar>
        <Routes>
          <Route exact path='/images' element={<ImagesComponent />}></Route>
          <Route exact path='/checkboxes' element={<Checkboxes />}></Route>
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;