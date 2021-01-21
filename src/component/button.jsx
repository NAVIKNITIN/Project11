import React, { Component } from "react";
import Lang from "../context/language";

class Button extends Component{
    static contextType = Lang;
    render(){
        const text = this.context === "english" ? "submit" : "enviar";
        return(
            <>
            <button type="button" className="btn btn-danger btn-md context-align-center">
                {text}
            </button>
            </> 
        )
    }
    
};
export default Button;
