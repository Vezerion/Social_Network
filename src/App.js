import './css/main.min.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Profile from './components/Profile'
import Messages from './components/Messages';
import News from './components/News';
import Music from './components/Music';
import Settings from './components/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className='container'>
          <div className='container-fluid'>
            <Navigation />
            <div className='content'>
              <Routes>
                <Route path='/' element={<Profile profilePage = {props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                <Route path="/profile" element={<Profile profilePage = {props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>} />
                <Route path="/messages/*" element={<Messages messagesPage = {props.state.messagesPage} addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText} clearMessageText={props.clearMessageText}/>} />
                <Route path="/news" element={<News />} />
                <Route path="/music" element={<Music />} />
                <Route path="/settings" element={<Settings />} />
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
