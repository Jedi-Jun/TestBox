// # innerText 가져오기
var p_tag = document.querySelectorAll('p');
// typeof(p_tag);                  // object
var text = ' ';
for (var i = 0; i < p_tag.length; i++) {
    text = text + p_tag[i].innerText;
}

// # 문장에서 단어로 스플릿 후 배열에 넣기
var word = text.split(' ');
// Array.isArray(word);           // true
var obj = new Object();
// var obj = {};
var j = 0;
while (j < word.length) {
    var data = word[j].toLowerCase(); 
    if(obj[data] === undefined){
        obj[data] = 1;
    } else {
        obj[data] = obj[data] + 1;
    }
    j++;
}

// # sort 메소드를 사용하기 위해 object에서 array로 push
var arr = [];
for (key in obj) {
    arr.push([key, obj[key]]);
}
arr.sort(function(a, b){
    return b[1] - a[1];
});

for (var i = 0; i < arr.length; i++) {
    console.log(`${arr[i][0]} : ${arr[i][1]}`)
}