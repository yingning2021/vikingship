import {Input, InputProps} from "../Input/input";
import {ChangeEvent, ReactElement, useState} from "react";

// export type AutoCompleteProps = InputProps & {
//     fetchSuggestions: (str: string) => string[];
//     onSelect?: (item: string) => void;
// }

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    fetchSuggestions: (str: string) => string[];
    onSelect?: (item: string) => void;
    renderOption?: (item: string) => ReactElement
}

export const AutoComplete = ({fetchSuggestions, onSelect, value, ...restProps}: AutoCompleteProps) => {
    const [inputValue, setInputValue] = useState(value)
    const [suggestions, setSuggestions] = useState<string[]>([])
    console.log(inputValue);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim()
        setInputValue(value)
        if (value) {
            const results = fetchSuggestions(value)
            setSuggestions(results)
        } else {
            setSuggestions([])
        }
    }

    const handleSelect = (item: string) => {
        setInputValue(item)
        setSuggestions([])
        if(onSelect) {
            onSelect(item)
        }
    }

    const generateDropdown = () => {
        return <ul>
            {suggestions.map((item, index) => {
                    return (<li key={index} onClick={() => handleSelect(item)}>{item}</li>)
                }
            )
            }
        </ul>
    }

    return <div className="viking-auto-complete">
        <Input
            value={inputValue}
            onChange={handleChange}
            {...restProps}
        />
        {(suggestions.length > 0) && generateDropdown()}
    </div>
}