import React from "react";

function Header(){
     
    const style={
        color:"red",
        backgroundColor:"black"
    }
    return (
        <div>
            {/* Style en ligne */}
        <h1 style={
            {
                color:"red",
                backgroundColor:"black"
            }
        }>my header</h1>
        <h1 style={style}>hello header</h1>
        <h2>hello </h2>
        </div>
    );
}
export default Header

