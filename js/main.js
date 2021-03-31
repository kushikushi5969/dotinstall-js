'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    // const results = ['大吉','中吉','凶', '末吉'];
    // const results = ['大吉','大吉','凶', '大吉'];
    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];
    // btn.textContent = results[Math.floor(Math.random() * results.length)];
    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = '大吉'; // 5%
    }
    else if (n < 0.2) {
      btn.textContent = '中吉'; // 15%
    }
    else {
      btn.textContent = '凶'; //80%
    }
    // switch (n) {
    //   case 0:
    //     btn.textContent = '大吉';
    //     break;
    //   case 1:
    //     btn.textContent = '中吉';
    //     break;
    //   case 2:
    //     btn.textContent = '凶';
    //     break;
    // }
  });
}
// ランダム　0 , 1 ,2
// Math.floor(Math.random() * 3)
// ランダム　0 ... n
// Math.floor(Math.random() * (n + 1))
// min ... max
// min + Math.floor(Math.random() * (max + 1 - min))
