import React, {createContext, useState} from "react";
import classNames from "classnames";
import {MenuItemProps} from "./menuItem";

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: string) => void;

export interface MenuProps {
    defaultIndex?: string;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: SelectCallback;
    children?: React.ReactNode;
    defaultOpenSubMenus?: string[];
}

interface IMenuContext {
    index: string;
    onSelect?: SelectCallback;
    mode?: MenuMode;
    defaultOpenSubMenus: string[];
}

export const MenuContext = createContext<IMenuContext>({
    index: '0',
    defaultOpenSubMenus: []
})

const Menu = ({className, mode = 'horizontal', style, onSelect, defaultIndex = '0', children, defaultOpenSubMenus = []}: MenuProps) => {
    const [currentActive, setActive] = useState(defaultIndex)

    const classes = classNames('viking-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode ==='horizontal'
    })
    const handleClick = (index: string) => {
        setActive(index)
        if (onSelect) {
            onSelect(index)
        }
    }
    const passedContext: IMenuContext = {
        index: currentActive,
        onSelect: handleClick,
        mode,
        defaultOpenSubMenus
    }
    const renderChildren = (children: React.ReactNode) => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            const {displayName} = childElement.type
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return React.cloneElement(childElement, {
                    index: index.toString()
                })
            }else {
                console.warn("Warning: Menu has not ")
            }
        })
    }
    return <ul className={classes} style={style} data-testid="test-menu">
        <MenuContext.Provider value={passedContext}>
            {renderChildren(children)}
        </MenuContext.Provider>
    </ul>
}

export default Menu;