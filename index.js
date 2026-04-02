const  titles = document.getElementsByClassName("title");
for (let a = 0; a < titles.length; a++){
    titles[a].style.color = "azure";
}

// const lists = document.getElementById("list");
// const NewLists = document.createElement("li");
// NewLists.innerText="punching";
// NewLists.classList.add("app")
// lists.append(NewLists);
const list3 = document.getElementById("list")
const NewButtons =document.createElement("button")
NewButtons.innerText = "Punching"
NewButtons.classList.add("buttons")
list3.append(NewButtons)

const list2 = document.getElementById("list");
// console.log(list2.childNodes)

// console.log(list2.parentNode)


// console.log(list2.parentElement)

// console.log(list2.firstChild)
// console.log(list2.lastChild)

// console.log(list2.children)
// console.log(list2.firstChild)
// console.log(list2.lastElementChild)
// console.log(list2.previousSibling)
// console.log(list2.nextSibling)

console.log(list2.previousElementSibling)
console.log(list2.nextElementSibling)

// const btn6 =document.getElementById("6");

// function bt6(name){
//     alert("Punching coming up..")
// };

// btn6.addEventListener("click", bt6)



// function bt6(name){
//     name = prompt("What is your name?")
//     alert("Punching coming up, " + name + "!")
// };

// btn6.addEventListener("click", bt6)
// const btn6 =document.getElementById("6");
const btn6 =document.getElementById("6");

function bt6(name){
   name.target.style.backgroundColor = "orange";
};

btn6.addEventListener("click", bt6);


const hide = document.querySelector(".hide")
const reveal = document.querySelector(".reveal")

function revealContent (){
    if (hide.classList.contains('reveal')){
        hide.classList.remove('reveal')
    }
    else{
        hide.classList.add('reveal')
    }
}

reveal.addEventListener("click", revealContent)