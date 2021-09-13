import logo from './logo.svg';
import './App.css';
import NavBar  from "./Components/NavBar/NavBar";
import ImageUpload from "./Components/ImageUpload/ImageUpload";
import TextUpload from "./Components/TextUpload/TextUpload";
import TextFeed from "./Components/TextFeed/TextFeed";
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <NavBar></NavBar>
          <ImageUpload></ImageUpload>
          <TextUpload></TextUpload>
          <TextFeed></TextFeed>
      </header>
    </div>
  );
}

export default App;
