import yourContext from "./store/store-context";
import { useContext } from "react";

function Welcome(){
    const{tasksToShow}=useContext(yourContext);
    if(tasksToShow.length===0){
    return(
        <>
        <center>
        <h3>
            Enter your Tasks
        </h3>
        </center>
        </>
    )
    }
}
export default Welcome;