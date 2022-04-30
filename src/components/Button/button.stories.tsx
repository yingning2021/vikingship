import Button, {ButtonSize, ButtonType} from "./button";
import {action} from "@storybook/addon-actions";
import {storiesOf} from "@storybook/react";
import React from "react";
import {withInfo} from '@storybook/addon-info'


const defaultButton = () => (
    <Button onClick={action('clicked')}>default button</Button>
)

const buttonWithSize = () => (
    <>
        <Button size={ButtonSize.Large}>large button</Button>
        <Button size={ButtonSize.Small}>sm button</Button>
    </>
)

const buttonWithType = () => (
    <>
        <Button btnType={ButtonType.Primary}>primary button</Button>
        <Button btnType={ButtonType.Danger}>danger button</Button>
        <Button btnType={ButtonType.Link}>Link button</Button>
    </>
)

storiesOf('Button Component', module)
    // @ts-ignore
    // .addDecorator(withInfo)
    // .addParameters({
    //     info: {
    //         test: `this is a very nice compnent
    //         ## this is a header`,
    //         inline: true
    //     }
    // })
.add('默认 Button', defaultButton)
.add('不同尺寸的Button', buttonWithSize)
.add('不同类型的button', buttonWithType)