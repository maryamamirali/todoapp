const input = document.querySelector(".input");
input.style.margin = "25px";


const unordered = document.querySelector("ul")

const arr = []


function extra(){
unordered.innerHTML = " "
for(let i = 0; i < arr.length; i++){
unordered.innerHTML += `<li>${arr[i]}
<button class = "del" onclick = "delval(${[i]})">delete</button>
<button class = "edit" onclick ="editval(${[i]})">edit</button>
</li>`
}
}


function todoapp(){
arr.push(input.value)
console.log(arr);
input.value = " "
extra()
}


function delval(i){
arr.splice(i, 1)
extra()
}


function editval(i){
const thevalue = prompt("enter edited text!")
arr.splice(i , 1 , thevalue)
extra()
}

function delallval(){
arr.pop()
extra()
}