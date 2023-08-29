import './css/main.min.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Profile from './components/Profile'
import Messages from './components/Messages';
function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className='container'>
        <div className='container-fluid'>
          <Navigation />
          
          <div className='content'>
          <Profile />
          {/* <Messages /> */}
          </div>
          
        </div>

      </div>
      <footer>
      </footer>
    </div>


  );
}

export default App;
