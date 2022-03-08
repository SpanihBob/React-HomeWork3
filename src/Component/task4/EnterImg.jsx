import React, {useState} from "react";
import MyButton from "./myButton/MyButton";
import MyInput from "./myInput/MyInput";
import Page from "./Page";

const  EnterImg = () => {
    let [photoArr, setPhotoArr] = useState([]);
    const [photo, setPhoto] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const [condition, setCondition] = useState(false)

    const addPhoto = (event) => {
        event.preventDefault();
        let photoObj = {
            photo: photo,
            description: description,
            tags: tags
        }
        photoArr.push(photoObj)
        setPhotoArr(photoArr) 
          
            
        setCondition(true)
    }
    return(
        <div>
        <form action="">
            <MyInput    type="text" 
                        placeholder="photo" 
                        required
                        value={photo}
                        onChange={e =>setPhoto(e.target.value)}/>
            <MyInput    type="text" 
                        placeholder="description" 
                        required
                        value={description}
                        onChange={e =>setDescription(e.target.value)}/>
            <MyInput    type="text" 
                        placeholder="tags" 
                        required
                        value={tags}
                        onChange={e =>setTags(e.target.value)}/>
            <MyButton onClick={addPhoto}>Enter photo</MyButton>
        </form>
        {condition &&  
        <div style={{marginBottom:'50px'}}>                   
                {
                photoArr.map(data => <Page page={data} />)
                }                   
        </div>} 
        </div>
    )
}
export default EnterImg;

