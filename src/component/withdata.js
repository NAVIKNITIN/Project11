import React, { Component } from "react";

 const Withdata = (Wrapcom,fetchdata) =>{
     class Withdata extends Component{
        constructor(){
            super();
            this.state={
                data:[]
            }
        };
        componentDidMount(){
            fetch(fetchdata)
            .then(response=>response.json())
            .then(data=>this.setState({data:data}))
        };

        render(){
            if (this.state.data.length < 1) {return <h2>Loading.....</h2>}
            return <Wrapcom d={this.state.data} {...this.props}/>
        }
     }
     return Withdata;

 };
 export default Withdata;