import React, { Component } from "react";
import post from "./post";
import Withdata  from "./withdata";
//  here we have reused the withdata component
const Userpost =(props)=>{
    return(
        <React.Fragment>
            <h1>USERS </h1>
            {props.d.slice(0,10).map(item=>{
                return (
                    <div className="col-md-12" key={item.id}>
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">
                                    {item.name}
                                </h4>
                                <p className="card-text">
                                    {item.email}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    )
};
export default Withdata(Userpost,"https://jsonplaceholder.typicode.com/users")
