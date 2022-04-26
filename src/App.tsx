import React from 'react';
import './styles/index.scss'
import Button, {ButtonSize, ButtonType} from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button >Hello</Button>
        <Button autoFocus size={ButtonSize.Large}>World</Button>
        <Button disabled size={ButtonSize.Large}>World</Button>
        {/*<Button btnType={ButtonType.Primary} size={ButtonSize.Small}>World</Button>*/}
        {/*<Button btnType={ButtonType.Danger} size={ButtonSize.Large}>World</Button>*/}
        {/*<Button disabled btnType={ButtonType.Link} href="https://www.baidu.com">Baidu Link</Button>*/}
        {/*<Button btnType={ButtonType.Link} href="https://www.baidu.com" target="_blank">Baidu Link</Button>*/}
        <button className='test focus'>wang</button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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

export default App;

// .ant-btn:hover, .ant-btn:focus {
//   color: var(--ant-primary-color-hover);
//   border-color: var(--ant-primary-color-hover);
//   background: #fff;
// }