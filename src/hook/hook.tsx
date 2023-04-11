import {useState, useEffect} from 'react'
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
export default useMouse