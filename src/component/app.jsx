import React, { Component } from "react";
import Userfield from "./user";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Lang from "../context/language";
 
class App extends Component{
    constructor(){
        super();
        this.state={
            lang:"english"
        }
    };
    Language=(data)=>{
        this.setState({lang:data});

    };

    render(){
        return(
            <>
            <div className="container">
                <div className="col-md-12">
                    <button className="btn btn-primary"
                    onClick={()=>this.Language("english")}
                    >english</button>
                    <button className="btn btn-danger"
                    onClick={()=>this.Language("spanish")}
                    >spanish</button>
                </div>
                <div className="row">'
                <div className="col-md-6">
                    <Lang.Provider value={this.state.lang}>
{/* from here the value is directly gone to the language.js in Lang create context */}
                    <Userfield/> 
                    </Lang.Provider>
                    
                </div>
                <div className="col-md-4">
                    <h3>Users</h3>
                </div>
                </div>
            </div>
            </>
        )
    }
};
export default App;
