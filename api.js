function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}
//========================================
// json placeholder theke 10 user ke nilam
//========================================

function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())

        .then(data => displayUsers(data));
}


//========================================
// json placeholder theke 100 post nilam
//========================================
function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data));
}

function displayUsers(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}
