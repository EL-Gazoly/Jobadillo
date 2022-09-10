
// import Register from './components/register/Register';
// import Landing from './components/landing/Landing';
//import Login from './components/login/Login';
import JobSearch from './components/job-search/JobSearch';
import Offers from './components/offers/Offers';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App ">
      <Router>
        <Routes>
          <Route path="/job-search" element={<JobSearch />} />
          <Route path="/offers" element={<Offers />} />
          </Routes>
      </Router>
  
   
    </div>
  );
}

export default App;
