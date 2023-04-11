import React from 'react'
import { StatesType } from "../model";
import WithComponent from './withComponent'
import { componentType } from "../model";
interface PropsType extends StatesType {
// none
}
const _Move = ({x, y}: PropsType) => {
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
const Move = () => {
    return (
        <WithComponent>
            {(props: PropsType) => <_Move {...props}/>}
        </WithComponent>
    )
}

export default Move