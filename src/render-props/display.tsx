import React from 'react'
import { StatesType } from "../model";
import WithComponent from './withComponent'
interface PropsType extends StatesType {
// none
}
const _Display = ({x, y}: PropsType) => {
    return (
        <div>
            A组件: {x},{y}
        </div>
    )
}
const Display = () => {
    return (
        <WithComponent>
            {(props: PropsType) => <_Display {...props}/>}
        </WithComponent>
    )
}

export default Display