import React from "react";
import '../styles/functional.css'

/*export default function functionalComponents(){
    return <h1>I am First Functional components</h1>
}*/

//Writen in this way
function FunctionalComponents(){
    return (
    <h1>I am First Functional components <FunctionalComponents1></FunctionalComponents1></h1> 
    )
}

function FunctionalComponents1(){
    return(
        <h4>Rachana Nayak <Arrowfunction></Arrowfunction></h4>
    )
}

//To specify more than one element inside the return we need to store that inside the div elements
//To avoid div useage we use react fragments
const Arrowfunction=()=>{
return(
    <div>
    <h1>HELLO</h1>
    <h3>EVERYONE !!!!!!!!!! <Arrowfunction1></Arrowfunction1></h3>
    </div>
)
}

//ReactFragments <></> or <React.fragment></React.fragment>
const Arrowfunction1=()=>{
    return(
        <>
        <h1>HELLO</h1>
        <h5>EVERYONE !!!!!!!!!! <Arrowfunction2></Arrowfunction2></h5>
        </>
    )
    }

    const Arrowfunction2=()=>{
        return(
            <React.Fragment>
            <h1>HELLO</h1>
            <h1>This is React fragements !!!!!!!!!!</h1>
            </React.Fragment>
        )
        }

//only one export can be writen 
export default FunctionalComponents;