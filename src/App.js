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
                <Route path='/' element={<Profile/>}/>
                <Route path="/profile" element={<Profile posts={props.posts}/>} />
                <Route path="/messages/*" element={<Messages partners={props.partners} messages={props.messages}/>} />
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
