import './css/main.min.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navigation from './components/Navigation/Navigation';
import MessagesContainer from './components/Messages/MessagesContainer';
import News from './components/Feed/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import FriendsContainer from './components/Friends/FriendsContainer';
import ProfileContainer from './components/Profile/ProfileContainer'
import Login from './components/Login/Login';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <HeaderContainer />
        <div className='container'>
          <div className='container-fluid'>
            <Navigation />
            <div className='content'>
              <Routes>
                <Route path='/' element={<Navigate to="/profile" />} />
                <Route path="/profile/:userId?" element={<ProfileContainer />} />
                <Route path="/messages/*" element={<MessagesContainer store={props.store} />} />
                <Route path="/friends" element={<FriendsContainer />} />
                <Route path="/news" element={<News />} />
                <Route path="/music" element={<Music />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </div>
        </div>
        <footer>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
