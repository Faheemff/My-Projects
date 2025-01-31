let num = document.getElementById('num');


setInterval(()=>{
    let a = 100
    let currentnum = num.innerText;
    if(currentnum < a){
        num.innerText = currentnum + 1
    }

},1000)


// let num = document.getElementById('num');

// setInterval(() => {
//     let a = 100;
//     let currentNum = parseInt(num.innerText); // Get the current number from the element
//     if (currentNum < a) {
//         num.innerText = currentNum + 1; // Update the element's content
//     }
// }, 20);
