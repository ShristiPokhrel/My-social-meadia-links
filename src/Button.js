import React from "react";

const Button= ({name, link}) =>{
return <a href={link} target="_blank"><button className="btn">{name}</button></a>
}
export default Button;
