import React, {useState} from 'react';
import Axios from "axios";
import {Button} from "@material-ui/core";
require('dotenv').config()
function ImageUpload(){
    console.log(process.env.REACT_APP_CLOUD_NAME)
    const [imageSelected, setImageSelected] = useState("");
    const uploadImage = () => {
        // console.log(files);
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
        
        //make post requests
        Axios.post(`http://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`, formData)
        .then(response => {
            console.log(response);
        });
    }

    return(
        <div>
            <input type = "file" onChange={e => {
                setImageSelected(e.target.files[0]);
            }}></input>
            
            <Button color="inherit" onClick ={() => {
                uploadImage();
            }}>Upload Image</Button>
        </div>
    )
}
export default ImageUpload;