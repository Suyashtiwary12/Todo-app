import styles from "./cards.module.css";
import YourContext from "./store/store-context";
import { useContext } from "react";
function Cards() {
    let {tasksToShow,deleteElement}=useContext(YourContext);
    const primaryDelete=(taskName)=>{
        deleteElement(taskName);
    }
    return (
        <>
            {tasksToShow.map((item) => (
                    <div className="container">
                        <div className={`row ${styles.kgcon}`}>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Task</h5>
                                        <p className="card-text">{item.name} <br /> Time: {item.time}</p>
                                        <button type="button" className="btn btn-danger"
                                        onClick={()=>primaryDelete(item.name)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            ))}
        </>
    )
}
export default Cards;