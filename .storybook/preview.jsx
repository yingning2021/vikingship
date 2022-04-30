import '/src/styles/index.scss'
import {addDecorator} from "@storybook/react";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {withInfo} from "@storybook/addon-info";
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

library.add(fas)
const CenterDecorator = (storyFn) => <div style={styles}>{storyFn()}</div>
addDecorator(CenterDecorator)
// addDecorator(withInfo)
//     .addParameters({info: {inline: true}})
