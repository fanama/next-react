import * as React from 'react'
import { Dispatch, ReactElement, SetStateAction } from 'react'
import { Message } from './message'
import { errorContainer, errorStyle } from './style'

interface Props {
    listError: string[]
    setListError: Dispatch<SetStateAction<string[]>>
    className?: string
    color?: string
}

export function Error({ listError, setListError, className, color }: Props): ReactElement {
    const removeError = (error: string) => {
        let newList = [...listError]
        newList = newList.filter((err: string) => err !== error)
        setListError(newList)
    }

    const componentStyle = {
        ...errorContainer,
        ...{
            color: color || 'red',
        },
    }
    const elementStyle = {
        ...errorStyle,
        ...{
            color: color || 'red',
            borderBottom: color ? `1px solid ${color}` : '1px solid red',
        },
    }
    return (
        <div className={className || ''} style={componentStyle}>
            {listError?.map((error, i) => {
                return (
                    <div style={elementStyle} key={i}>
                        {error}
                        <Message error={error} action={removeError} color={color}></Message>
                    </div>
                )
            })}
        </div>
    )
}
