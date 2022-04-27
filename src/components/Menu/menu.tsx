import React, {createContext, useState} from "react";
import classNames from "classnames";
import {MenuItemProps} from "./menuItem";

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: number) => void;

export interface MenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: SelectCallback
    children?: React.ReactNode
}

interface IMenuContext {
    index: number;
    onSelect?: SelectCallback
}

export const MenuContext = createContext<IMenuContext>({
    index: 0
})

const Menu = ({className, mode = 'horizontal', style, onSelect, defaultIndex = 0, children}: MenuProps) => {
    const [currentActive, setActive] = useState(defaultIndex)

    const classes = classNames('viking-menu', className, {
        'menu-vertical': mode === 'vertical'
    })
    const handleClick = (index: number) => {
        setActive(index)
        if (onSelect) {
            onSelect(index)
        }
    }
    const passedContext: IMenuContext = {
        index: currentActive,
        onSelect: handleClick
    }
    const renderChildren = (children: React.ReactNode) => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            const {displayName} = childElement.type
            if (displayName === 'MenuItem') {
                return React.cloneElement(childElement, {
                    index
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