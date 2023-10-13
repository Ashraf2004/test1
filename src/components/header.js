import "../../src/App.css";
function Header(){
    /*const internalStyle = {
        color: "green",
        background: "pink",
    };*/
    return(
        <div class="bg-dark text-center text-light p-3">
            <h1 /*style={{color:"red"}}*/>shoppy website</h1>{/* inline styling syntax: {{}} */}
            <h3 /*style={internalStyle}*/>Where Quality Matters == At low cost</h3>{/* internal styling syntax: {object} */}
            <h3 /*id="i1"*/>explore now......</h3>
        </div>


    );
}
export default Header;