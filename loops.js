var friends = ['guy', 'shay', 'grisha', 'tom', 'sumbat'];

var arr1 = [];

var arr2 = [];

// for (var i = 0; i < friends.length; i++) {
//     if (friends[i].startsWith('s')) {
//         arr1.push(friends[i])
//     }
// }

for (var f of friends) {
    if (f.startsWith('g')) {
        arr1.push(f);
    }
}

for (var i = 0; i < friends.length; i++) {
    if(friends[i].endsWith('y') && i % 2 == 0){
        arr2.push(friends[i]);
    }
}

console.log(arr1);

// console.log(arr1);