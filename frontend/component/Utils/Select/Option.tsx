import * as React from 'react'
import { hoverStyle, optionStyle } from './style'

export const Option = ({ value, children, setValue, width, color }: any): JSX.Element => {
    const style = {
        width: width || '100%',
        color: color || 'black',
    } as React.CSSProperties

    // hover state for option
    const [hover, setHover] = React.useState(false)
    return (
        <option
            style={{ ...optionStyle, ...style, ...(hover ? hoverStyle : {}) }}
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
