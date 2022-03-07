import React from "react";

const TaskOneTreeOne = (props) => {
    return(
        <div>
            <h3>{props.page.name}</h3>
            <img src={props.page.img} alt="" />
            <div>{props.page.info}</div>
        </div>
    )
}
export default TaskOneTreeOne;