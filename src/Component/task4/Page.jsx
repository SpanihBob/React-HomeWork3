import React from "react";
function Page(props) {
 console.log(props);
  return (
    <div>         
      <div>{props.page.description}</div>
      <div>{props.page.tags}</div>
      <div><img src={props.page.photo} alt="" /></div>
    </div>
  );
}

export default Page;
