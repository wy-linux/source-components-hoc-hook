import { StatesType } from "../model";
import React from 'react'
import { componentType } from "../model";
const HocComponent =(Com: componentType)  => {
    class HocWrapperMouse extends React.Component<any, StatesType> {
        state = {
            x: 0,
            y: 0
        }
        handleMouseMove = (e: MouseEvent): void => {
            this.setState({
                x: e.pageX,
                y: e.pageY
            })
        }
        componentDidMount(): void {
            document.addEventListener('mousemove', this.handleMouseMove)
        }
        componentWillUnmount(): void {
            document.removeEventListener('mousemove', this.handleMouseMove)
        }
        render() {
            return <Com {...this.state} />
        }
    }
    return HocWrapperMouse
}
export default HocComponent