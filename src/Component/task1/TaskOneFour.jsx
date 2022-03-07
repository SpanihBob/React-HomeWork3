import React from "react";
import TaskOneFourOne from "./TaskOneFourOne";

const TaskOneFour = () => {

    const cityPictures = [
        {id: 1,name: "Цирк в Ижевске", photo: "https://img.tourister.ru/files/2/7/5/0/4/6/2/0/clones/1140_760_fixedwidth.jpg"},
        {id: 2,name: "Центральная площадь Ижевска", photo: "https://avatars.mds.yandex.net/get-zen_doc/3985984/pub_5f8625b63940476c664e4846_5f86260e9cd6237d309e56d6/scale_1200"},
        {id: 3,name: "Карлутская площадь", photo: "https://avatars.mds.yandex.net/get-zen_doc/3993525/pub_5f8625b63940476c664e4846_5f8627e19cd6237d309f97e4/scale_1200"},
    ];
    return(        
        <div>
            <h2>Фотографии города</h2>
            {
            cityPictures.map(data =>              
                <TaskOneFourOne page={data} key={data.id} />             
            )}
        </div>    
    )
}
export default TaskOneFour