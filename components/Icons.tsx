type IconsProps = {
    name: string;
    width?: number;
    height?: number;
}

const Icons = (props:IconsProps) => {
    const {name, width = 80, height = 80} = props;
    return <img src={`./bxl-${name}.svg`} style={{height:`${height}px`, width:`${width}px`}}/>
}
export default Icons;

