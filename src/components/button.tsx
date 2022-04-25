import classNames from 'classnames';
import React from 'react'

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children?: React.ReactNode;
    href?: string;
}

const Button = ({btnType = ButtonType.Default, disabled = false, size, children, href, ...props}: BaseButtonProps) => {
    const classes = classNames('btn', {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link) && disabled
    })

    if (btnType === ButtonType.Link && href) {
        return (
            <a
                className={classes}
                href={href}
            >{children}</a>
        )
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
            >{children}</button>
        )
    }
}

export default Button;
