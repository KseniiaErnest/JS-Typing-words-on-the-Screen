'use strict'
let text = 'I am a web developer...'; // 23
let i = 0;
let speed = 200;

function type() {
  if (i < text.length) {
    document.querySelector('#par').textContent += text.charAt(i);
    i++;
    setTimeout(type, speed);
  }
};

type();


