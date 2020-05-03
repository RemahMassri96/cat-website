'use strict'
console.log('remah');

var name = prompt("What is your name");

document.getElementById("name").innerHTML="Hi "+ name + ".";

var dateOfBirth = prompt("what year is your birth year ?");

var age = 2020 - dateOfBirth;

function sayHello(){
    var item = '';
    var ask4 = prompt("how many times you want us to Greating you");
    for (var i=0;i<ask4;i++){
        var id = i + 1;
     item = item + "<h4> " + id + " Hi " + name + " </h4>";
    }
    return item;
}


//orderSomething();


/*function orderSomething(){
    var userOrder = prompt("what would like to order flower or coffee?");
    var item ='';

    while(userOrder !== 'flower' && userOrder !== 'coffee'){
        var userOrder = prompt("what would like to order flower or coffee?");

    }

    if(userOrder == 'flower'){
        item = item + '<img src ="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"'
    }

    if(userOrder == 'coffe'){
        item = item + '<img src ="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"'
    }

} */