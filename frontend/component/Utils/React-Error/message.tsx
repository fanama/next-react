import * as React from 'react'
import { ReactElement, useState } from 'react'
import { crossStyle, hoverStyle } from './style'

interface Props {
    error: string
    removeError: (error: string) => void
}

export function Message({ error, removeError }: Props): ReactElement {
    const [hover, setHover] = useState<boolean>(false)

    return (
        <div
            style={{ ...crossStyle, ...(hover && hoverStyle) }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => removeError(error)}
        >
            X
        </div>
    )
}
