export interface StatesType {
    x: number
    y: number
}
export interface componentType {
    (props: StatesType) : JSX.Element
}