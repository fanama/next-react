import * as React from 'react'
import { hoverStyle, optionStyle } from './style'

export const Option = ({ value, children, setValue }: any): JSX.Element => {
    // hover state for option
    const [hover, setHover] = React.useState(false)
    return (
        <option
            style={{ ...optionStyle, ...(hover ? hoverStyle : {}) }}
            value={value}
            onClick={() => {
                setValue(value)
            }}
            onMouseEnter={() => {
                setHover(true)
            }}
            onMouseLeave={() => {
                setHover(false)
            }}
        >
            {children}
        </option>
    )
}
