import "./SizeBlock.css";

export default function SizeBlock({width, height}) {
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