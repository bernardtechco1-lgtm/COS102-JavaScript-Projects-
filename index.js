// const  titles = document.getElementsByClassName("title");
// for (let a = 0; a < titles.length; a++){
//     titles[a].style.color = "azure";
// }

// // const lists = document.getElementById("list");
// // const NewLists = document.createElement("li");
// // NewLists.innerText="punching";
// // NewLists.classList.add("app")
// // lists.append(NewLists);
// const list3 = document.getElementById("list")
// const NewButtons =document.createElement("button")
// NewButtons.innerText = "Punching"
// NewButtons.classList.add("buttons")
// list3.append(NewButtons)

// const list2 = document.getElementById("list");
// // console.log(list2.childNodes)

// // console.log(list2.parentNode)


// // console.log(list2.parentElement)

// // console.log(list2.firstChild)
// // console.log(list2.lastChild)

// // console.log(list2.children)
// // console.log(list2.firstChild)
// // console.log(list2.lastElementChild)
// // console.log(list2.previousSibling)
// // console.log(list2.nextSibling)

// console.log(list2.previousElementSibling)
// console.log(list2.nextElementSibling)

// // const btn6 =document.getElementById("6");

// // function bt6(name){
// //     alert("Punching coming up..")
// // };

// // btn6.addEventListener("click", bt6)



// // function bt6(name){
// //     name = prompt("What is your name?")
// //     alert("Punching coming up, " + name + "!")
// // };

// // btn6.addEventListener("click", bt6)
// // const btn6 =document.getElementById("6");
// const btn6 =document.getElementById("6");

// function bt6(name){
//    name.target.style.backgroundColor = "orange";
// };

// btn6.addEventListener("click", bt6);


// const hide = document.querySelector(".hide")
// const reveal = document.querySelector(".reveal")

// function revealContent (){
//     if (hide.classList.contains('reveal')){
//         hide.classList.remove('reveal')
//     }
//     else{
//         hide.classList.add('reveal')
//     }
// }

// reveal.addEventListener("click", revealContent)






// DOM stands for Document Object Model

// DOM IS A TREE LIKE STRUCTURE BULIT BY A WEBPAGE WHEN A WEBSITE LOADS


// DOM MANIPULATION IS THE MANIPULATION OF ELEMENTS ON A WEBPAGE USING JS



// getElementById()
// const elementid = document.getElementById("money");
// console.log(elementid)
// //getElementsByClassName()
// const elementClass = document.getElementsByClassName("money");
// elementClass.style.color ="azure";
// // //getElementByTagName()
// const elementtag = document.getElementsByTagName("h2")
// console.log(elementtag)
// //querySelector()
// const queryselect = document.querySelector(".money")
// console.log(queryselect)
// // querySelectorAll()
// const queryall = document.querySelectorAll(".money")
// console.log(queryall)
// const elementClass = document.getElementById("change")
// elementClass.style.color ="azure";

// const change = document.getElementsByClassName("title");

// for(let a = 1 ; a < change.length; a++){
//     change[a].style.color = "azure";
// };

// const change = document.getElementById("change")
// change.style.color = "azure"


// const change2  = document.getElementsByClassName("title");
// for (let i = 1; i < change2.length; i++){
//     change2[i].style.color ="azure"
// }

const list = document.getElementById("list")
const Newitem = document.createElement("li")

Newitem.innerText = "punching";

// Newitem.setAttribute('class', 'buttons');

Newitem.classList.add("buttons")

list.append(Newitem)


//TO ADD AN ELEMENT
//.innerText
//.TextContent
//.innerHTML


//to add an attribute in DOM
// .setAttribute()
// .classList.add()

// to remove an attribute in DOM
// .removeAttribute()
// .classList.remove

// const demo1 = document.getElementById("access");
// console.log(demo1.parentElement);

//.parentNode
//.parentElement

// const demo2 = document.getElementById("list");
// console.log(demo2.parentElement);

// const demo3 = document.getElementById("name");
// console.log(demo3.parentElement);

// const demo4 = document.getElementById("list");
// console.log(demo4.children);

// to traverse the dom and get the children 
// .childNodes
// .children

// to traverse through the first and last child 
// .firstChild
// .lastChild
// .firstElementChild
// .lastElementChild

// const demo4 = document.getElementById("list");
// console.log(demo4.firstElementChild);

// console.log(demo4.lastElementChild);


// const demo4 = document.getElementById("list");
// const b = demo4.children;


// for ( let a = 0 ; a < b.length ; a++){
//     b[a].style.backgroundColor = "yellow"
// }


// element.addEventListener("action", function );
// const demo10 = document.getElementById("but2");

// function but2Event(){
//     alert("Hello there!")
// }

// demo10.addEventListener("click", but2Event);

const demo10 = document.getElementById("but2");

function but2Event(){
    demo10.style.backgroundColor = "yellow"
}


function but2Event2  ( ){
    demo10.style.backgroundColor = "brown"
}

demo10.addEventLiStener("click", but2Event);

demo10.addEventListener("dblclick", but2Event2);

























// const demo5 = document.getElementById("name");
// console.log(demo5.children);


// console.log(demo5.childNodes)



// const demo6 = document.getElementById("body");
// console.log(demo6.previousElementSibling)

// .previousSibling
// .previousElementSibling

// .nextSibling
// .nextElementSibling


// const demo6 = document.getElementById("head");
// console.log(demo6.nextElementSibling);