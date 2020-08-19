
function countWithVar () {
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000)
  }
}
countWithVar();
// 결과: 5, 5, 5, 5, 5


function countWithLet () {
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000)
  }
}
countWithLet();
// 결과 0, 1, 2, 3, 4
