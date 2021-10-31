const todos = document.querySelector('.todos');
const memo = document.querySelector('.memo');
const list = document.querySelector('.list');

let check = true;
todos.addEventListener('click', ()=>{
    check = !check;
    if(check){
        memo.style.display = "none";
        memo.style.width = "0"
        

    }else{
        memo.style.display = "flex";
        memo.style.width = "350px"
    }
    
});

const TODOS_KEY = 'todos';
const todosForm = document.querySelector('.todosForm');

//로컬스토리지에 값을 가져오기
const savedToDos = localStorage.getItem(TODOS_KEY);
let todoLists = [];

if(savedToDos !== null){
    const parseToDos = JSON.parse(savedToDos);
    todoLists = parseToDos;
    parseToDos.forEach(paintTodo)
}


todosForm.addEventListener('submit',handleTodoSubmit)

function handleTodoSubmit(e){
    e.preventDefault();
    const todosValue = document.querySelector('.todos-value');
    const newTodoObj = {
        text: todosValue.value,
        id: Date.now(),
        select: false,
    }
    todoLists.push(newTodoObj)
    paintTodo(newTodoObj);
    saveTodo();
    todosValue.value = '';
}

// 투두리스트 선택 함수
function selectTodo(e){
    const deleteLi = e.target.parentElement;
    const p = e.target;
    p.classList.toggle('select');
    todoLists = todoLists.map( item => {
        if(Number(deleteLi.className) === item.id){
            item.select = !item.select
            return item; 
        }
        return item
    })
    saveTodo()
}
// 투두리스트 삭제 함수
function deleteTodo(e){
    const deleteLi = e.target.parentElement;
    todoLists = todoLists.filter( item => (Number(deleteLi.className) !== item.id))
    deleteLi.remove();
    saveTodo()
}

// li태그를 생성하여 작성한 내용을 기록 
function paintTodo(newTodo){

    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.marginTop = '1rem';
    div.style.marginLeft = '3rem';
    div.className = newTodo.id;
   

    const p = document.createElement('p');
    p.textContent = newTodo.text;

    if(newTodo.select){
        p.classList.add('select');
    }else{
        p.classList.remove('select');
    }
    p.addEventListener('click', selectTodo);
    const button = document.createElement('button');
    button.textContent = 'x';
    button.addEventListener('click',deleteTodo)
    div.appendChild(p);
    div.appendChild(button);
    list.appendChild(div)
    

}

// 로컬스토리지에 등록
function saveTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoLists));
}