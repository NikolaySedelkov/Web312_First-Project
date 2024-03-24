import "./SizeBlock.css";

export default function SizeBlock({width = 0, height = 0}) {
    return (
        <div 
            className="red-block"
            style={{
                width: `${width}px`,
                height: `${height}px`
            }}
        />
    )
}