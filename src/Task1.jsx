// Задание 1
// Используя механизм routes создайте приложение, посвященное
// вашему городу. Один маршрут должен вести на информацию
// о городе, другой маршрут на его самую известную достопри-
// мечательность, третий маршрут на другие достопримечатель-
// ности, четвертый на фотографии города.
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import TaskOneOne from "./Component/task1/TaskOneOne";
import TaskOneTwo from "./Component/task1/TaskOneTwo";
import TaskOneTree from "./Component/task1/TaskOneTree";
import TaskOneFour from "./Component/task1/TaskOneFour";


export default function Task1() {
    return(
      <>
      {/* <BrowserRouter> */}
         <nav>
            <Link to="/">Информация о городе</Link>
            <Link to="two">Достопримечательность</Link>
            <Link to="tree">Достопримечательности</Link>
            <Link to="four">Фотографии</Link>
         </nav>
         
            <Routes>
               <Route path="/" element={<TaskOneOne />} />
               <Route path="two" element={<TaskOneTwo />} />
               <Route path="tree" element={<TaskOneTree />} />
               <Route path="four" element={<TaskOneFour />} />
            </Routes>
          {/* </BrowserRouter> */}
      </>
       
   )
}
