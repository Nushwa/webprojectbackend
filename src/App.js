import Home from './components/Home.jsx'
import SinglePost from './components/pages/singlePost.jsx'
import Write from './components/pages/Write.jsx'
import Settings from './components/pages/Settings.jsx'
import Login from './components/pages/Login.jsx'
import Register from './components/pages/Register.jsx'
import {BrowserRouter as Router,
        Routes, Route, Link} from 'react-router-dom'
import Navbar from './components/Navbar.jsx' 

function App() {
  const user = false;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/register' element={user ? <Home /> : <Register />} />
        <Route path='/login' element={user ? <Home /> : <Login />} />
        <Route path='/write' element={user ? <Write /> : <Register />} />
        <Route path='/settings' element={user ? <Settings /> : <Register />} />
        <Route path='/post/:postId' element={user ?  <SinglePost />: <Register />} />

      </Routes>
    </Router>
  );
}

export default App;
