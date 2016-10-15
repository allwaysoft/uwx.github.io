'use strict';

/*exported generateNumberList, randomizeList, reverseList*/

function generateNumberList() {
  const prex = document.getElementById('prefix').value.replace(/\\x/g, '\n');
  const sufx = document.getElementById('suffix').value.replace(/\\x/g, '\n');
  const delimiter = document.getElementById('delimiter').value.replace(/\\x/g, '\n');
  const low = document.getElementById('low_num').value.replace(/\-/g, '') * 1;
  const high = document.getElementById('high_num').value.replace(/\-/g, '') * 1;
  let textout = [];
  let len = (high - low) + 1;
  let sca = low;
  let padnum = 0;
  const padnumto = high.toString().length;
  let padnumlen = 0;
  if (document.getElementById('pad_num').checked) {
    for (let x = 0; x < len; x++) {
      padnum = x + sca;
      padnumlen = padnum.toString().length;
      for (let y = padnumlen; y < padnumto; y++) {
        padnum = '0' + padnum;
      }
      textout[x] = prex + padnum + sufx;
    }
  }
  if (!document.getElementById('pad_num').checked) {
    for (let x = 0; x < len; x++) {
      textout[x] = prex + (x + sca) + sufx;
    }
  }
  textout = textout.join(delimiter);
  return textout; // output here
}

function shuffle(arr) {
  let x = arr.length;
  if (x === 0) return false;
  while (--x) {
    let y = Math.floor(Math.random() * (x + 1));
    let temp_x = arr[x];
    let temp_y = arr[y];
    arr[x] = temp_y;
    arr[y] = temp_x;
  }
  return arr;
}

function randomizeList(text) {
  text = text.replace(/\r/g, '');
  let delimiter = document.getElementById('delimiter').value.replace(/\\x/g, '\n');
  text = shuffle(text.split(delimiter)).join(delimiter);
  return text;
}

function reverseList(text) {
  text = text.replace(/\r/g, '');
  let delimiter = document.getElementById('delimiter').value.replace(/\\x/g, '\n');
  text = text.split(delimiter).reverse().join(delimiter);
  return text;
}