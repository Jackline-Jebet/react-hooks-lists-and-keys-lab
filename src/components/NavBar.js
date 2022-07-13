import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const elements = links.map(link => {
    return <a key={link} href={"#" + link}>{link}</a>;
  })

  return <nav>{elements}</nav>;
}

export default NavBar;
