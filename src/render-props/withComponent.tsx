import React from 'react'
import { StatesType } from "../model";
import { componentType } from "../model";
interface propsType {
    children: componentType
}
class WithComponent extends React.Component<propsType, StatesType> {
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
                {this.props.children(this.state)}
            </div>
        )
    }
}
export default WithComponent