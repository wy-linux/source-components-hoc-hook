import React from 'react'
import { StatesType } from "../model";
import HocComponent from './hocComponent'
interface PropsType extends StatesType {
    //none
}
const _Display = (props: PropsType) => {
    const {x, y} = props
    return (
        <div>
            A组件: {x},{y}
        </div>
    )
}
const Display = HocComponent(_Display)
export default Display