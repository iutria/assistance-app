import { CSSProperties } from "react"

export const Box = ({children, className, style}: {children?: any, className?: string, style?: CSSProperties})=>{
    return <div style={style} className={className}>
        {children}
    </div>
}