import '/src/styles/index.scss'
import {addDecorator} from "@storybook/react";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
const styles  = {
  textAlign: 'center'
}

const CenterDecorator = (storyFn) => <div style={styles}>{storyFn()}</div>
addDecorator(CenterDecorator)