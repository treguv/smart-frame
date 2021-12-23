import React, {useState} from 'react';
import Axios from "axios";
import {Typography,Button, Divider, makeStyles} from "@material-ui/core";
require('dotenv').config()
const BASE_URL = process.env.BASE_URL;

const useStyles = makeStyles({
    padding:{
        padding:"20px"
    },
    margin: {
        marginTop:"100px"
    }
})
function ImageUpload(){
    const classes = useStyles();
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
            console.log(response.data);
            const data = {
                "imageURL" : response.data.url
            }
            Axios.post(`${BASE_URL}/api/images`, data)
            .then(response => window.location.reload())
            .catch(err => console.log(err));
       });
    }

    return(
        <div className={classes.padding, classes.margin}>
            <Typography variant="h3">Upload Image</Typography>
            <input type = "file" onChange={e => {
                setImageSelected(e.target.files[0]);
            }}></input>
            <Divider></Divider>
            <Button color="inherit" onClick ={() => {
                uploadImage();
            }}>Upload Image</Button>
        </div>
    )
}
export default ImageUpload;