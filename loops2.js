var friends = [
    { name: 'grisha', friends: ['igal', 'liron'] },
    { name: 'shay', friends: ['enosh', 'guy'] },
    { name: 'guy', friends: ['enosh', 'shay'] },
]

var i = 0;
var perfectFriend;


while (i < friends.length) {
    var isEndsWithY = friends[i].name.endsWith('y');
    var hasEnosh = false;

    for (var f of friends[i].friends) {
       if(f == 'enosh') {
        hasEnosh = true;
       }
    }

    if(isEndsWithY && hasEnosh){
        perfectFriend = friends[i];
        break;
    }

    i++;
}

console.log(perfectFriend);
