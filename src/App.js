import logo from "./logo.svg";
import "./App.css";
import Parse, { domToReact } from "html-react-parser";
import React from "react";

function App() {
  const options = {
    replace: ({ attribs, children }) => {
      if (attribs && attribs.class === "test") {
        return <Check>{domToReact(children, options)}</Check>;
      }
    },
  };
  const htmlString =
    "<table class='test'><tr><td>hello</td></tr><tr><td>hi</td></tr><tr><td>hello</td></tr><tr><td>hi</td></tr><tr><td>hello</td></tr><tr><td>hi</td></tr><tr><td>hello</td></tr><tr><td>hi</td></tr><tr><td>hello</td></tr><tr><td>hi</td></tr></table>";

  const parsedString = Parse(htmlString, options);

  console.log(parsedString);

  return (
    <div className="App">
      {parsedString}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

class Check extends React.PureComponent {
  state = {
    show: 0,
  };
  render() {
    
    let child = { ...this.props.children };
    child = { ...child.props.children };
    let only = [];
    let i = 0;
    for (let el in child) {
    
      if (i < this.state.show) only.push(child[el]);
      i++;
    }

    console.log(only);

    return (
      <div className="container">
      <h1>project accepted</h1>

        <table>
          <tbody>{only}</tbody>
        </table>
        <button onClick={()=>{this.setState({show:this.state.show+2})}}className="ok">on Click</button>
      </div>
    );
  }
}

export default App;
