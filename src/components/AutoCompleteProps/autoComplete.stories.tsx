import {storiesOf} from "@storybook/react";
import {AutoComplete} from "./autoComplete";
import {action} from "@storybook/addon-actions";

const SimpleComplete = () => {
    const lakers = ['bradley', 'pops', 'caruso', 'cook', 'cousins',
        'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
    const handleFetch = (query: string) => {
        return lakers.filter(name => name.includes(query))
    }
    return (
        <AutoComplete fetchSuggestions={handleFetch} onSelect={action('selected')}/>
    )
}

storiesOf('AutoComplete Component', module)
.add('AutoComplete', SimpleComplete)