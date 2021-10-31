const form = document.querySelector('.greeting form');
const login = document.querySelector('.login');
const h1 = document.querySelector('.greeting h1');
const button = document.querySelector('button');

const USERNAME_KEY = 'userName';

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const value = login.value;
    localStorage.setItem(USERNAME_KEY,value);
    isLocalStorage();
    login.value ="";
})
button.addEventListener('click',()=>{
    localStorage.removeItem(USERNAME_KEY);
    form.classList.remove('hidden');
    h1.classList.add('hidden');
    button.classList.add('hidden');
})

if(localStorage.getItem(USERNAME_KEY) !== null){
    isLocalStorage()
}


function isLocalStorage(){
    h1.innerText = `${localStorage.getItem(USERNAME_KEY)}님 안녕하세요!`;
    h1.style.color = "white";
    h1.style.fontSize = "32px";
    form.classList.add('hidden');
    h1.classList.remove('hidden');
    button.classList.remove('hidden');
}



