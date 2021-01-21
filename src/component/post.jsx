import React from "react";
import Withdata from "./withdata";
//  here we have reused the withdata component
const Post = (props)=>{
    // console.log(props);

    return(
        <React.Fragment>
            <h1>POST</h1>
            {props.d.slice(0,10).map(item=>{
                return (
                    <div className="col-md-12" key={item.id}>
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">
                                    {item.title}
                                </h4>
                                <p className="card-text">{item.body}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    )
};
export default Withdata(Post,"https://jsonplaceholder.typicode.com/posts")
