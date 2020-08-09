import React from "react";
import "./App.css";

interface props {
  lang: string;
}

function LanguageButton(prop: props) {
  let path = "../" + prop.lang.toLowerCase() + ".png";
  return (
    <button className="language-button">
      <img className="language-icon" src={path} alt={path}></img>
    </button>
  );
}

function ButtonBar() {
  return (
    <div className="button-bar">
      <LanguageButton lang="C++" />
      <LanguageButton lang="Python" />
      <LanguageButton lang="JavaScript" />
      <LanguageButton lang="CSharp" />
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <ButtonBar />
      <button className="vscode-button"></button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
