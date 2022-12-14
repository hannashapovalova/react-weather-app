
import './App.css';
import Weather from './Weather';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <main className="container">
        <Weather dafaultCity="Kyiv"/>
      </main>
      <footer>
        This project was coded by{" "}
        <a 
         className="link"
         href="https://www.linkedin.com/in/anna-shapovalova-63116b238/" 
         target="_blank" 
         rel="noreferrer">
          Anna Shapovalova
        </a> 
        {" "}and is open-sourced on{" "}
        <a
         className="link"
         href="https://github.com/hannashapovalova/react-weather-app" 
         target="_blank" 
         rel="noreferrer">GitHub</a> 
        {" "}and hosted on{" "}
        <a
         className="link"
         href="https://unique-kangaroo-bdf1ea.netlify.app/" 
         target="_blank" 
         rel="noreferrer">Netlify</a>
        .
      </footer>
    </div>
  );
}

export default App;
