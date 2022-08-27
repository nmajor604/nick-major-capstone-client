import React, { useState } from 'react'
import './ImageUpload';
const ImageUpload = () => {
const [image, setImage ] = useState("");
const [ url, setUrl ] = useState("");
const uploadImage = () => {
const data = new FormData()
data.append("file", image)
data.append("upload_preset", "iztnlqat")
data.append("cloud_name","dnceb1qqy")
fetch("https://api.cloudinary.com/v1_1/dnceb1qqy/image/upload",{
method:"post",
body: data
})
.then(resp => resp.json())
.then(data => {
setUrl(data.url)
})
.catch(err => console.log(err))
}
return (
<div>
<div className='upload__container'>
    <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>

    <button onClick={uploadImage}>Upload</button>
</div>
<div>
<h4>Preview your image here</h4>
<img 
src={url} 
alt="description"
width="125px"/>
</div>
</div>
)
}
export default ImageUpload;