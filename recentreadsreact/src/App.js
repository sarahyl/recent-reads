import './App.css';
import React from "react";
import {AllBooks} from './Books'; 
import {AllAuthors} from './Authors'; 

// main app
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="m-auto p-5 w-75 rounded border border-white shadow">
          <h1>Recent Reads</h1>
          <h5>Sarah Liu / <a href="mailto:sarah.liu.va@gmail.com">sarah.liu.va@gmail.com</a> / <a href="https://github.com/sarahyl/recent-reads">Link to GitHub Repo</a></h5>
        </div>
        <div className="subheader">
          <h5>
            Scroll to check out some of the books I've been reading! 📖
          </h5>
        </div>
      </header>
      <div className="cards">
        <div className="bookcardsection">
          <div>
            <h2>Some Recent Reads</h2>
            <AllBooks/>
          </div>
          <div className="mt-5">
            <h2 className="mt-5">Some Recent Authors</h2>
            <AllAuthors/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;