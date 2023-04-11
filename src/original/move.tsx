import React from 'react'
import { StatesType } from "../model";

class Move extends React.Component<any, StatesType> {
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
            <span
              style={{
                color:'red',
                border: '1px solid #ccc',
                position: 'absolute',
                left: this.state.x,
                top: this.state.y
              }}
            >
                B组件: {this.state.x},{this.state.y}
            </span>
        )
    }

}
export default Move