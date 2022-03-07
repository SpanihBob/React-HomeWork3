import React from "react";
const TaskOneOne = () => {
    return(
       <div>
           <h2>Информация о городе</h2>
            <table>
                <tbody>
                <tr>
                    <td>Страна</td><td>Россия</td>                       
                </tr>
                <tr>
                    <td>Субьект Федерации</td><td>Удмуртия</td>                   
                </tr>
                <tr>
                    <td>Город</td><td>Ижевск</td>                    
                </tr>
                <tr>
                    <td>Основан</td><td>1760</td>                    
                </tr>
                <tr>
                    <td>Флаг</td><td>
                    <img
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Izhevsk_%28Udmurtia%29.svg/180px-Flag_of_Izhevsk_%28Udmurtia%29.svg.png' />
                    </td>
                </tr>
                <tr>
                    <td>Колличество жителей</td><td>646 468 человек (2021)</td>
                </tr>
                <tr>
                    <td>Площадь</td><td>315,15 кв.км</td>
                </tr>
                <tr>
                    <td>Телефонный код</td><td>+7 3412</td>
                </tr>
                </tbody>
            </table>
       </div> 
    )
}
export default TaskOneOne;