
console.log("Hello world");


const tasks = [];
const todos = document.getElementById("todos");



const Task = function(description, isCompleted){
    this.description = description;
    this.isCompleted = isCompleted;
};

function addTask(description, isCompleted = false){
    tasks.push(new Task(description, isCompleted));
};

function capture(){
  const namePaint = document.getElementById('inputPaint').value;
  addTask(namePaint);


      const todoText = inputPaint.value;


    if (namePaint) {
      const todoEl = document.createElement("li");
      todoEl.innerText = todoText;


      todoEl.addEventListener('click', ()=>{
        todoEl.classList.toggle('completed')
      });



      todoEl.addEventListener('contextmenu',
      (e)=> {
        e.preventDefault();

        todoEl.remove();
      });


      todos.appendChild(todoEl);
      inputPaint.value = ''
    };

    console.log(tasks)
};


function toggleTaskCompleted(tasks, index) {
  const newTasks = [].concat(tasks);
  if(newTasks[index]) {
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
  };
  return newTasks;
};

function deleteTask(tasks, index) {
  const newTasks = tasks.filter(function(task, i) {
    return i !== index;
  });
  return newTasks;
};



























// addTask("Monalisa")
// addTask("Ultima Cena")
// addTask("Noche Estrellada")
// addTask("El grito")
// addTask("Guernica")
// addTask("Creacion de Adan")
// addTask("Las meninas")
// addTask("Nacimiento de Venus")
// addTask("El beso")
// addTask("La joven de la perla")
// addTask("La ronda de la noche")
// addTask("La Balsa de la Medusa")
// toggleTaskCompleted(tasks,0)
// toggleTaskCompleted(tasks,1)
// toggleTaskCompleted(tasks,2)
// toggleTaskCompleted(tasks,3)
// toggleTaskCompleted(tasks,4)
// toggleTaskCompleted(tasks,5)
// toggleTaskCompleted(tasks,6)
// toggleTaskCompleted(tasks,7)
// toggleTaskCompleted(tasks,8)
// toggleTaskCompleted(tasks,9)
// toggleTaskCompleted(tasks,10)
// toggleTaskCompleted(tasks,11)
// console.log(tasks)



// const container = document.getElementById('app');
// container.className = 'recomendaciones';

// const title = createNode('h1', 'Nueva Pintura');
// title.className = "h1P"

// const addButton = createNode('button', 'Add', { type: 'button'});
// addButton.className = "buttonP"

// const input = createNode('input', '', { type: 'text', placeholder: 'New task...'});
// input.className = "inputPintura"


// appendChildren(container, [title, input, addButton]);

// function createNode(type, child, attrs){
//     let node = document.createElement(type);
//     if(attrs){
//         Object.keys(attrs).map(function(attr){
//             node[attr] = attr[attr];
//         });
//     }
//     if (typeof child === "string"){
//         node.appendChild(document.createTextNode(child));
//     } else {
//         node.appendChild(child);
//     }
//     return node
// }

// function appendChildren(node, children){
//     const documentFragment = document.createDocumentFragment();
//     children.forEach(function(child){
//         documentFragment.appendChild(child);
//     })
//     node.appendChild(documentFragment);
// }
















