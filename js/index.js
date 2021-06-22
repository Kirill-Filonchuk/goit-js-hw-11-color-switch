// Array of colors
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
//Step 1 Function generate Random
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
//Step 2 refs of elements
const refs = {
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body')
}
// console.log(refs.btnStart);
// console.log(refs.btnStop);
// console.log(refs.body);

//Step 3 function - get random Color

function randomColor() {
    let min = 0;
    let max = colors.length - 1;
    const indexRandom = randomIntegerFromInterval(min, max);
    const color = colors[indexRandom];
    return color    
}

let counterId = null;
function intervalRecurs() {
    counterId = setInterval(() => {
        const color = randomColor()
        refs.body.style.backgroundColor=`${color}`
    }, 1000);
    return counterId
}

refs.btnStart.addEventListener('click', () => {
    intervalRecurs()
    refs.btnStart.setAttribute("disabled", "disabled");
});

refs.btnStop.addEventListener('click', () => {
    clearInterval(counterId)
refs.btnStart.removeAttribute("disabled");
})

// console.log(randomColor());

// function intervalRecurs() {
 
//        setTimeout(function go() {
//             console.log(randomColor());
//             setTimeout(go, 1000)
//             //  console.log(counter);
//         }, 1000);
    
// //    return counter;
// }
// console.log(counter);
 
// intervalRecurs()
