import React from 'react'
import useMouse from './hook';
const Display = () => {
    const {x, y} = useMouse()
    return (
        <div>
            A组件: {x},{y}
        </div>
    )
}
export default Display