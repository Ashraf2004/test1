/* function component */
function Header(props)
{
    return(
        <div>
            <h1>header {props.name}</h1>
        </div>
    )
}
/* default export */
export default Header; /* namespace export */

export function Footer()
{
    return(
        <div>
            <h1>footer</h1>
        </div>
    )
}