"use strict";

// async function resolveSample() {
//     setTimeout(() => {
//         return 'after 1 sec';
//     }, 1000);
// }
//
// resolveSample().then(value => {
//     console.log(value); // undefined
// });

// setTimeout で return を遅らせると undefined になる
// setTimeout を使わずそのまま return すると成功するが、それじゃ意味ない
// 処理に時間のかかる関数の実行を待てるようにしたい

let test = null;

// setTimeout を Promise でラップ
const wait = (ms) => new Promise(resolve => {
    setTimeout(() => {
        test = "after 1 sec";
        resolve(test);
    }, 1000);
});

// async
async function awaitFunc() {
    console.log("start");
    const result = await wait(); // Promise が返ってくるまで awaitで 処理停止
    console.log(result);
}

awaitFunc();