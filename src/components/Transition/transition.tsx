import {CSSTransitionProps} from "react-transition-group/CSSTransition";
import {CSSTransition} from "react-transition-group";
import React from "react";

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'

type TransitionProps = CSSTransitionProps &{
    animation ?: AnimationName,
    wrapper?: boolean,
}

const Transition = ({children, classNames, animation,wrapper, unmountOnExit = true, ...restProps} : TransitionProps) => {
    // const innerChildren = wrapper ? <div>{children as React.ReactNode}</div> : children
    return (
        <CSSTransition
            classNames={classNames ? classNames: animation}
            unmountOnExit={unmountOnExit}
            {...restProps}
        >
            {children}
        </CSSTransition>
    )
}
export default Transition





