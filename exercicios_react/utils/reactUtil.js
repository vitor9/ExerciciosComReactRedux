import React from 'react'

function childrenWithProps(childen, props) {
    React.Children.map(props.children, 
        child => React.cloneElement(child, {...props}))
}

export { childenWithProps }