// function getOperator()
// {
//     let opr=prompt("enter the operator +,-,*,/")
//     return opr;
// }
// function getNumber()
// {
//     let num1=parseInt(prompt("Enter the num1:")) 
//     let num2=parseInt(prompt("Enter the num2:")) 

//     return {num1,num2}

// }

// function calculator(opr,num1,num2)
// {
//     switch(opr)
//     {
//         case '+':
//             return num1+num2
//         case '-':
//             return num1-num2
//         case '*':
//             return num1*num2
//         case '/':
//             if(num2===0)
//             {
//                 return 'Cant divide denomenator when zero'
//             }
//             return num1/num2;
//         default:
//             return 'The operator can not match'
//     }
// }

// function getValues(){
// let operator1= getOperator()
// let {num1,num2} = getNumber()
// let result =calculator(operator1,num1,num2)
// console.log("opr:",operator1);
// console.log("num1:",num1);
// console.log("num2:",num2);

// console.log("result:",result);


// document.getElementById('result').textContent=result | 'No value';

// alert(`The Result:${result}`)
// }

// const display = document.getElementById("display")
// console.log(display);

// function appendToDisplay(val)
// {
//     if(display.value)
//     {
//         console.log(val);

//         display.value += val
//         console.log(display.value);
//     }
//     else{
//         console.log("display value empty");
        
//     }



// }

// function calculate()
// {
//     try {
//         display.value=eval(display.value)

//     } catch (error) {
//         console.log("calculate error");
//         display.value="Error"
        
//     }
// }

// function clearAll()
// {
//     if(display)
//     {
// display.value=""
//     }
//     else{
//         console.error("Display element not found");
//     }

// }




document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    console.log("value:",display.value);
    
    function appendToDisplay(val) {
        if (display) {
            display.value += val;
            console.log("value:",display.value);
        } else {
            console.error("Display element not found");
        }
    }

    function calculate() {
        if (display) {
            try {
                display.value = eval(display.value);
            } catch (error) {
                console.error("Invalid calculation");
                display.value = "Error";
            }
        } else {
            console.error("Display element not found");
        }
    }

    function clearAll() {
        if (display) {
            display.value = "";
        } else {
            console.error("Display element not found");
        }
    }

    // Attach these functions to the global scope for button `onclick` handlers
    window.appendToDisplay = appendToDisplay;
    window.calculate = calculate;
    window.clearAll = clearAll;
});


