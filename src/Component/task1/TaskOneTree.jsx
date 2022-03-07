import React from "react";
import TaskOneTreeOne from "./TaskOneTreeOne";

const TaskOneTree = () => {
    const arr = [
        {   
            id: 1,
            name:"Музей Калашникова",
            img:"https://img.tourister.ru/files/2/7/5/0/4/5/1/8/clones/1140_760_fixedwidth.jpg",
            info:"Музей в центре Ижевска, напротив Михайло-Архангельского собора, полностью посвящен одному из брендов Ижевска — стрелковому оружию, созданному советским и российским конструктором М. Т. Калашниковым. Работает музейный комплекс с 2004 года, его открытие было приурочено к 85-летию Калашникова, который смог присутствовать на открытии экспозиции.Выставочная площадь музея оружия — 940 кв. м, экспозиция и музейный фонд охватывают 6300 единиц хранения. Постоянная выставка посвящена биографии и работе М. Т. Калашникова, созданию и развитию оружейного производства в Ижевске, демонстрирует образцы исторического и современного оружия. В музее работает тир огнестрельного оружия и пневматики.",
        },
        {
            id: 2,
            name:"Набережная зодчего Дудина",
            img:"https://img.tourister.ru/files/2/7/5/0/4/5/1/6/clones/1140_760_fixedwidth.jpg",
            info:"Прогулочная набережная имени зодчего Дудина Е. С., первого архитектора Ижевска, проходит по левому берегу Ижевского пруда, от проезда Дерябина до Песочной улицы. Городская набережная сформировалась еще в XVIII веке: совпадает с одной из старейших ижевских улиц — бывшей Береговой.Современный облик набережная обрела в 2010 году после масштабной реконструкции. Ее самый популярный участок и доминанта — монумент Дружбы народов.",
        },
        {
            id: 3,
            name:"Ижевский зоопарк",
            img:"https://img.tourister.ru/files/2/7/5/0/4/7/3/8/clones/1140_855_fixedwidth.jpg",
            info:"Государственный зоопарк и выставочный комплекс на 11 гектарах в парке культуры и отдыха имени Кирова в северо-западной части города. Для животных достаточно места, большинство из них гуляет по огороженным ландшафтным зонам, насколько это возможно приближенным к естественной среде обитания.Ижевский зоопарк работает с 2008 года и сейчас входит в пятерку самых посещаемых зоопарков России. В нем содержится более 750 животных — представителей 240 видов. Это единственный в стране зоопарк, где демонстрируются краснокнижные тихоокеанские и атлантические моржи.",
        },        
    ]
        
    return(        
       <div>
           <h2>Достопримечательности</h2>
            {
            arr.map(data => 
            <div> 
                <TaskOneTreeOne page={data} key={data.id} /> 
            </div>
            )} 
       </div> 
    )
}
export default TaskOneTree;