import React, {useEffect} from "react";

const Test = () => {
    
    let numberCheck = 2;

    let testVarCheck = (numberCheck === 1) ? console.log(numberCheck) : console.log("im here"); 

   /*  function testVarCheck() {
        
        if (numberCheck === 1) { 
                console.log(numberCheck); 
            } 
        else {
            console.log("im here");
        }
    } */
    
    useEffect(() => {
        console.log("");
    }, [testVarCheck])

    return <h1>Test</h1>
};

export default Test;