let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = ""
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == '⇐'){
            string = string.substring(0, string.length-1);
            document.querySelector('input').value = string; 
        }

        else if (e.target.innerHTML == '(') {
            string = string + "(";
            document.querySelector('input').value = string;
        }


        // else if (e.target.innerHTML == '+/-'){
        //     let num = string.lastIndexOf("+");
        //     let lol = string.split("")
        //     lol[num] = "-";
        //     document.querySelector('input').value = lol.join(""); 
        // }

        

        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})




// Styling :
    
// document.querySelector('*').style.textAlign="center";

// let mystyle = [
//     ["textAlign","center"],
//     ["backgroundColor","red"],
//     ["fontSize","50px"]
// ]
// mystyle.forEach(e =>
// document.querySelector('*').style[e[0]] = e[1])

// let hero = document.querySelector('*').style

let mystyle = s => document.querySelector(s).style

mystyle("*").textAlign="center";
mystyle("*").backgroundColor="#5ebc52";




