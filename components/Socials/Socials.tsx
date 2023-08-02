import Icons from "../Icons.tsx";
const Socials = () => {
    return(
        <div style={{ position: 'absolute', bottom: 20, right:0, display:'flex' }}>
            <a href='https://dev.to/lausuarez02' target="_blank">
            <Icons name="dev"/>
            </a>
            <a href='https://www.linkedin.com/in/lautarosuarez/' target="_blank">
            <Icons name="linkedin"/>
            </a>
            <a href='https://github.com/lausuarez02' target="_blank">
            <Icons name="github"/>
            </a>
        </div>
    )
}

export default Socials;