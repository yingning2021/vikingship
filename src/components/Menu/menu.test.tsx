import Menu, {MenuProps} from "./menu";
import MenuItem from "./menuItem";
import React from "react";
import {cleanup, fireEvent, getByTestId, render, screen} from "@testing-library/react";
import menu from "./menu";

const testProps: MenuProps = {
    defaultIndex: 0,
    onSelect: jest.fn(),
    className: 'test'
}

const testVerticalProps: MenuProps = {
    defaultIndex: 0,
    onSelect: jest.fn(),
    className: 'test',
    mode: "vertical"
}

const generateMenu = (props: MenuProps) => {
    return (
        <Menu {...props}>
            <MenuItem >
                active
            </MenuItem>
            <MenuItem disabled>
                disabled
            </MenuItem>
            <MenuItem>
                xyz
            </MenuItem>
            {/*<li>Hello</li>*/}
        </Menu>
    )
}

describe('test Menu and MenuItem component', () => {
    it('should render correct Menu and MenuItem based on default props', () => {
        render(generateMenu(testProps))
        const menuElement = screen.getByTestId('test-menu');
        const activeElement = screen.getByText('active');
        const disabledElement = screen.getByText('disabled')

        expect(menuElement).toBeInTheDocument()
        expect(menuElement).toHaveClass('viking-menu test')
        // eslint-disable-next-line testing-library/no-node-access
        expect(menuElement.getElementsByTagName('li').length).toEqual(3)
        expect(activeElement).toHaveClass('menu-item is-active')
        expect(disabledElement).toHaveClass('menu-item is-disabled')
    })

    it('click items should change active and call the right callback', () => {
        render(generateMenu(testProps))
        const menuElement = screen.getByTestId('test-menu');
        const activeElement = screen.getByText('active');
        const disabledElement = screen.getByText('disabled')

        const thirdItem = screen.getByText('xyz')
        fireEvent.click(thirdItem)
        expect(thirdItem).toHaveClass('is-active')
        expect(activeElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).toHaveBeenCalledWith(2)

        fireEvent.click(disabledElement)
        expect(disabledElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).not.toHaveBeenCalledWith(1)
    })

    it('should render vertical mode when mode is set ti vertical', () => {
        cleanup()
        render(generateMenu(testVerticalProps))
        const menuElement = screen.getByTestId('test-menu');
        const activeElement = screen.getByText('active');
        const disabledElement = screen.getByText('disabled')

        expect(menuElement).toHaveClass('menu-vertical')


    })
})