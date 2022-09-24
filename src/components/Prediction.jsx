import React from "react";

const ImagePrediction = (props) => {
    const listItems = props.result.confidences.map(item => {
        return <li>{item.label}: {`${(item.confidence * 100).toFixed(2)} %`}</li>
    })

    return (
        <div>
            <h2>This is {props.result.label}</h2>
            <p>
                <h4>Confidences</h4>
                <ul>{listItems}</ul>
            </p>
        </div>
    )
}

export default ImagePrediction;
