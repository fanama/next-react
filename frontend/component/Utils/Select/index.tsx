import * as React from 'react'
import { selectStyle, valueStyle } from './style'

export function Select({ children, value }: any) {
    const [focus, setFocus] = React.useState<boolean>(false)

    return (
        <div style={{ ...selectStyle }}>
            <div
                onClick={() => {
                    focus ? setFocus(false) : setFocus(true)
                }}
                style={valueStyle}
            >
                {value[0]}
            </div>
            {focus && <span onClick={() => setFocus(false)}>{children}</span>}
        </div>
    )
}
