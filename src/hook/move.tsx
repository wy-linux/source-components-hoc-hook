import React from 'react'
import useMouse from './hook';
const Move = () => {
    const {x, y} = useMouse()
    return (
        <span
          style={{
            color:'red',
            border: '1px solid #ccc',
            position: 'absolute',
            left: x,
            top: y
          }}
        >
            B组件: {x},{y}
        </span>
    )
}

export default Move