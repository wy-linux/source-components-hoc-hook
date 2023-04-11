import React from 'react'
import { StatesType } from "../model";

class Display extends React.Component<any, StatesType> {
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
        return (
            <div>
                A组件: {this.state.x},{this.state.y}
            </div>
        )
    }

}
export default Display