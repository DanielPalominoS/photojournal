import logo from './logo.svg';
import BannerImage  from './components/BannerImage';
import AlbumMaker from './components/AlbumMaker';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BannerImage></BannerImage>
        <div>
          <h2>Welcome to My Photo Journal !</h2>

          <h3>
            <a
              className="App-link"
              href="https://www.linkedin.com/in/danielpalominosuarez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Daniel Palomino Suarez
            </a>
            </h3>
            {/* <PhotoEntry src="Popayan.JPG" location="Popayan, Colombia" caption="The Colombian religious Capital"></PhotoEntry> */}
            <AlbumMaker/>
        </div>

      </header>
    </div>
  );
}

export default App;
