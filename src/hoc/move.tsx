import React from 'react'
import { StatesType } from "../model";
import HocComponent from './hocComponent'
interface PropsType extends StatesType {
    //none
}
const _Move = (props: PropsType) => {
    const {x, y} = props
    return (
        <span
            style={{
              color:'red',
              border: '1px solid #ccc',
              position: 'absolute',
              left: x,
              top:y
            }}
        >
          B组件: {x},{y}
        </span>
    )
}
const Move = HocComponent(_Move)
export default Move