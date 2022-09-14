
import Register from './components/register/Register';
import Landing from './components/landing/Landing';
import Login from './components/login/Login';
import JobSearch from './components/job-search/JobSearch';
import Offers from './components/offers/Offers';
import Chat from './components/chat/Chat';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App ">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/job-search" element={<JobSearch />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/chat" element={<Chat />} />
          </Routes>
      </Router>
  
   
    </div>
  );
}

export default App;
