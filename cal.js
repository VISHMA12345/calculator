// let display = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');

// let buttonsArray = Array.from(buttons);

// let string ='';

// buttonsArray.forEach(btn => {

//     btn.addEventListener('click',(e) => {

//         if(e.target.innerHTML == 'DEL'){
//             string = string.substring(0, string.length-1);
//             display.value = string;
//         }else if(e.target.innerHTML == 'AC'){
//             string ='';
//             display.value = string;
//         }else if(e.target.innerHTML == '='){
//             string = eval(string);
//             display.value = string;
//         }else{
//         string += e.target.innerHTML;
//         display.value = string;
//         } 
//     });

// });
let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string = '';

// Function to evaluate the expression
function calculate() {
    try {
        string = eval(string).toString();
        display.value = string;
    } catch (error) {
        display.value = 'Error';
    }
}

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;
        if (buttonText === '=') {
            calculate();
        } else if (buttonText === 'AC') {
            string = '';
            display.value = '0';
        } else if (buttonText === 'DEL') {
            string = string.slice(0, -1);
            display.value = string;
        } else {
            string += buttonText;
            display.value = string;
        }
    });
});