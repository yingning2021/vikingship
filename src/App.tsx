import React, {useState} from 'react';
import './styles/index.scss'
import Button, {ButtonSize, ButtonType} from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from './components/Menu/menuItem';
import SubMenu from "./components/Menu/subMenu";
import Icon from './components/Icon/icon'
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import Transition from "./components/Transition/transition";

library.add(fas)
function App() {
  const [display, setDisplay] = useState(true)

  const handleClick  = () => {
    setDisplay(!display)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon={"coffee"} theme="danger" size={"10x"}></Icon>
        <Icon icon={"coffee"} theme="primary" size={"10x"}></Icon>
        <Menu mode="horizontal" onSelect={(index) => {console.log(index)}}>
          <MenuItem >
            cool link
          </MenuItem>
          <MenuItem disabled>
            cool link 2
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown 1
            </MenuItem>
            <MenuItem>
              dropdown 2
            </MenuItem>
          </SubMenu>
          <MenuItem>
            cool link 3
          </MenuItem>
        </Menu>
        <Button >Hello</Button>
        <Button autoFocus size={ButtonSize.Large}>World</Button>
        <Button disabled size={ButtonSize.Large}>World</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>World</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>World</Button>
        <Button disabled btnType={ButtonType.Link} href="https://www.baidu.com">Baidu Link</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" target="_blank">Baidu Link</Button>

        <br/>
        <Button btnType={ButtonType.Primary} onClick={handleClick}>setDisplay</Button>
        <Transition in={display} animation="zoom-in-left" timeout={300} wrapper={false}>
          <div>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <Button btnType={ButtonType.Primary} onClick={handleClick}>setDisplay</Button>
          </div>
        </Transition>
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