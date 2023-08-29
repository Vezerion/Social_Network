import './css/main.min.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Profile from './components/Profile'
import Posts from './components/Posts'
function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className='container'>
        <div className='container-fluid'>
          <Navigation />
          <Profile />
          <Posts />
        </div>

      </div>
      <footer>
      </footer>
    </div>


  );
}

export default App;
