import * as React from 'react'
import { optionBoxStyle, selectStyle, triangleUp, triangleDown, valueStyle } from './style'

export function Select({ children, value, width, className }: any) {
    const [focus, setFocus] = React.useState<boolean>(false)
    const [keys, setKeys] = React.useState<string[]>([])

    React.useEffect(() => {
        if (value) {
            console.log({ value })
            const keys = Object.keys(value)
            console.log({ keys })
            setKeys(keys)
        }
    }, [value])

    const props = {
        width: width || '100%',
    } as React.CSSProperties

    return (
        <div className={className || ''} style={{ ...selectStyle, ...props }}>
            <div
                onClick={() => {
                    focus ? setFocus(false) : setFocus(true)
                }}
                style={valueStyle}
            >
                <label>{value[keys[0]]}</label>
                <div style={focus ? triangleUp : triangleDown}></div>
            </div>
            {focus && (
                <span style={optionBoxStyle} onClick={() => setFocus(false)}>
                    {children}
                </span>
            )}
        </div>
    )
}
