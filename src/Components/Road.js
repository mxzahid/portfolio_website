import React from "react";

function Road(props) {
        return (
            <div
            className = {props.StylingInfo}
            style = {{
            height: props.height, 
            width: props.width,
            right: props.right,
            left: props.left,
            top:props.top
            } 
            }>
                <div className={props.dashType}></div>
            </div>
        )
}

export default Road;

