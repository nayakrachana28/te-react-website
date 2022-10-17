import React from "react";

class ClassComponent extends React.Component{
    render(){
        return ( <h4>I am First Class Components <FunctionalComponents></FunctionalComponents> <ClassComponent1></ClassComponent1></h4> )
    }
}

function FunctionalComponents() {
    return(
        <h4>I am Functional Components</h4>
    )
}

class ClassComponent1 extends React.Component{
    render(){
        return(
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJcm5Vib81a776LM7wRq7Ms6c_dkHimg6zQ&usqp=CAU" alt="Image" style={{ height:420 ,width:1400, textAlign:"center"}}/>
        )
    }
}

export default ClassComponent;