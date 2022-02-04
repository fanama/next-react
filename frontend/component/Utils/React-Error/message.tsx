import * as React from 'react'
import { ReactElement, useState } from 'react'
import { crossStyle, hoverStyle } from './style'

interface Props {
    error: string
    action: (error: string) => void
    color?: string
}

export function Message({ error, action, color }: Props): ReactElement {
    const [hover, setHover] = useState<boolean>(false)

    const style = {
        ...crossStyle,
        color: color || 'red',
        border: color ? `1px solid ${color} ` : '1px solid red',
        ...(hover ? hoverStyle : {}),
    } as React.CSSProperties

    return (
        <div
            style={style}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => action(error)}
        >
            X
        </div>
    )
}
