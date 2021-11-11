import React from 'react'
import ReactDom from 'react-dom'
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value: "OFF"
        };
        //this.togglevalue=this.togglevalue.bind(this)
    }
    togglevalue(msg){
        alert(msg);
        this.setState((prevState)=>({
            value: prevState.value === "OFF"? "ON": "OFF"

        }));
    }
    render(){
        return(
            <button onClick={() => this.togglevalue('Hello')} >
                {this.state.value}
            </button>
        )
    }
}
ReactDom.render(
    <App />,
    document.getElementById("root")
)