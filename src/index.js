document.addEventListener("DOMContentLoaded", () => {
  // your code here

});

const taskList=document.getElementById('tasks')
const taskForm =document.getElementById('create-task-form')
taskForm.addEventListener('submit', (e)=>{

  e.preventDefault();
 const input = e.target.querySelector('#new-task-description').value
  const pTag = document.createElement('p')
  pTag.innerHTML = input
  taskList.appendChild(pTag)
  taskForm.reset()
console.log(input)

})
// let button = document.createElement=('button');
// button.setAttribute('value','CLEAR')
// document.appendChild(button)