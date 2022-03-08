// Задание 1
// Используя механизм routes создайте приложение, посвященное
// вашему городу. Один маршрут должен вести на информацию
// о городе, другой маршрут на его самую известную достопри-
// мечательность, третий маршрут на другие достопримечатель-
// ности, четвертый на фотографии города.
// Задание 2
// Добавьте к заданию 1 механизм ссылок, который позволит
// переходить с главной страницы по ссылкам на маршруты.
// Задание 3
// Добавьте к заданию 1 передачу параметров при переходе на
// маршрут.
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import TaskOneOne from "./Component/task1/TaskOneOne";
import TaskOneTwo from "./Component/task1/TaskOneTwo";
import TaskOneTree from "./Component/task1/TaskOneTree";
import TaskOneFour from "./Component/task1/TaskOneFour";
import News from "./Component/task1/News";

function Info() {
return <TaskOneOne />;
}
function mainAttraction() {
  return <TaskOneTwo />;
}
  function attraction() {
  return <TaskOneTree />;
}
  function photo() {
   return <TaskOneFour />;
  }
  function NotFound() {
  return <h2>Not found</h2>;
}

export default function Task1() {
  return (
  <div>
      <Router>
         <nav style={{display:"flex" ,flexDirection:"column"}}>
            <Link to="/">Информация о городе</Link>
            <Link to="/mAtr">Достопримечательность</Link>
            <Link to="/atr">Достопримечательности</Link>
            <Link to="/photo">Фотографии</Link>
         </nav>

            <Switch>
                  <Route exact path="/" component={Info} />
                  <Route path="/mAtr" component={mainAttraction} />
                  <Route path="/atr" component={attraction} />
                  <Route path="/photo" component={photo} />
                  <Route path="/news/:id"component={News} />
                  <Route component={NotFound} />
            </Switch>
      </Router>
  </div>
  );
  }
