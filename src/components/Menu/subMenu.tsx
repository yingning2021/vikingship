import classNames from "classnames";
import React, {FunctionComponentElement, useContext, useState} from "react";
import {MenuContext} from "./menu";
import {MenuItemProps} from "./menuItem";
import {CSSTransition} from 'react-transition-group'

export interface SubMenuProps {
    index ?: string;
    title: string;
    className ?: string;
    children?: React.ReactNode
}

const SubMenu = ({index, title, className, children}: SubMenuProps) => {
    const context = useContext(MenuContext)

    // const openedSubMenus = context.defaultOpenSubMenus as Array<String>;
    const openedSubMenus = context.defaultOpenSubMenus
    const isOpened = (index && context.mode === 'vertical') ? openedSubMenus.includes(index): false;
    const [menuOpen, setOpen] = useState(isOpened)
    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index,
        'is-opened': menuOpen,
        'is-vertical': context.mode === 'vertical'
    } )
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setOpen(!menuOpen)
    }
    let timer: any;
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        clearTimeout(timer)
        e.preventDefault()
        timer = setTimeout(() => {
            setOpen(toggle)
        }, 300)
    }
    const clickEvents = context.mode === 'vertical' ? {
        onClick: handleClick
    }: {}
    const hoverEvents = context.mode !== 'vertical' ? {
        onMouseEnter: (e: React.MouseEvent) => {handleMouse(e, true)},
        onMouseLeave: (e: React.MouseEvent) => {handleMouse(e, false)}
    }: {}
    const renderChildren = () => {
        const subMenuClasses = classNames('viking-submenu', {
            'menu-opened': menuOpen
        })
        const childrenComponent = React.Children.map(children, (child, i) => {
            const childElement = child as FunctionComponentElement<MenuItemProps>
            if (childElement.type.displayName === 'MenuItem') {
                return React.cloneElement(childElement, {
                    index: `${index}-${i}`
                })
            } else {
                console.warn("Warning: SubMenu has a child which is not a MenuItem")
            }
        })
        return (
            <CSSTransition
                in={menuOpen}
                timeout = {300}
                classNames="zoom-in-top"
                appear
            >
                <ul className={subMenuClasses}>
                    {childrenComponent}
                </ul>

            </CSSTransition>
        )
    }
    return <li key={index} className={classes} {...hoverEvents}>
        <div className="submenu-title" {...clickEvents}>
            {title}
        </div>
        {renderChildren()}
    </li>
}

SubMenu.displayName = 'SubMenu'
export default SubMenu