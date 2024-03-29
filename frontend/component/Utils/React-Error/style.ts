export const errorContainer = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: '1em',
    color: 'red',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5em',
    zIndex: '100',
} as React.CSSProperties

export const errorStyle = {
    position: 'relative',
    padding: '1em',
    background: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'red',
    borderBottom: '1px solid red',
} as React.CSSProperties

export const crossStyle = {
    marginLeft: '0.5em',
    border: '1px solid red',
    padding: '0.2em',
}

export const hoverStyle = {
    background: 'red',
    color: 'white',
}
