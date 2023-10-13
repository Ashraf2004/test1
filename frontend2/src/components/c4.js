
function c4(){
    const Skills = ["typing", "programming", "communication"];
    const skillList = () => {
        return Skills.map((val)=>{
            return <li>{val}</li>
        })
    }
        return(
            <div>
                <ol>
                    {skillList()}
                </ol>
            </div>
        );
    }
export default c4;