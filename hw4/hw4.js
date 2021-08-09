"use strict";
let text = document.querySelector('.text');
document.querySelector('.change').addEventListener('click', () => {
// 1 задание
//    text.textContent = text.textContent.replace(/'/gm, '"')

// 2 задание
    text.textContent = text.textContent.replace(/\B'|'\B/gm, '"')   
})

