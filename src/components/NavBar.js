import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{ links.map((string,index)=>{
    return <a key={index} href={string}>{string}</a>
  })}</nav>;
}

export default NavBar;
