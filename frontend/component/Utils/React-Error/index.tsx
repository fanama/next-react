import * as React from 'react'
import { Dispatch, ReactElement, SetStateAction } from 'react'
import { Message } from './message'
import { errorContainer, errorStyle } from './style'

interface Props {
    listError: string[]
    setListError: Dispatch<SetStateAction<string[]>>
    className?: string
}

export function Error({ listError, setListError, className }: Props): ReactElement {
    const removeError = (error: string) => {
        let newList = [...listError]
        newList = newList.filter((err: string) => err !== error)
        setListError(newList)
    }

    return (
        <div className={className || ''} style={errorContainer}>
            {listError?.map((error) => {
                return (
                    <div style={errorStyle} key={Math.random()}>
                        {error}
                        <Message error={error} removeError={removeError}></Message>
                    </div>
                )
            })}
        </div>
    )
}
