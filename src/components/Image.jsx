import React from "react";


const UploadAndDisplayImage = (props) => {
  return (
    <div>
      <h1>Upload an Image</h1>
      {props.selectedImage && (
        <div>
        <img alt="" width={"250px"} src={URL.createObjectURL(props.selectedImage)} />
        <br />
        <button onClick={()=> {
          props.setSelectedImage(null);
          props.setPrediction(null);
        }}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        capture="user" 
        accept="image/*"
        onChange={props.handleUpload}
      />
    </div>
  );
};

export default UploadAndDisplayImage;
