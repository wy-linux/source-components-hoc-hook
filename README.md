### React 组件逻辑复用总结
```shell
1. npm install  下载相关依赖
2. npm run start 启动项目
```
###### HOC 高阶组件

```javascript
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
```
###### Render-Props 属性渲染
```javascript
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
```
###### useHook 自定义钩子函数
```javascript
const useMouse = () => {
    const [x, setX] = useState<number>(0)
    const [y, setY] = useState<number>(0)
    const handleMouseMove = (e: MouseEvent) => {
        setX(e.pageX)
        setY(e.pageY)
    }
    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove)
        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])
    return {
        x,
        y
    }
}
```
