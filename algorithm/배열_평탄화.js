// 배열 평탄화 알고리즘 문제

var entry = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
var output = [];

for(var i = 0; i < entry.length; i++) {
    if(Array.isArray(entry[i]) === false) {
        output.push(entry[i]);
    } else {
        funcA(i);
    }
}

function funcA(a){
    for(var i = 0; i < entry[a].length; i++) {
        if(Array.isArray(entry[a][i]) === false) {
            output.push(entry[a][i]);
        } else {
            funcB(a, i);
        }
    }
}

function funcB(a, b) {
    for(var i = 0; i < entry[a][b].length; i++) {
        if(Array.isArray(entry[a][b][i]) === false) {
            output.push(entry[a][b][i]);
        }
    }
}

// MDN reference
function flatten(arr) {
    const result = []

    arr.forEach((i) => {
      if (Array.isArray(i)) {
        result.push(...flatten(i))
      } else {
        result.push(i)
      }
    })
    return result
  }

  // Usage
  const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]]
  flatten(nested) // [1, 2, 3, 4, 5, 6, 7, 8, 9]