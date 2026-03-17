//sidebar starts
const sidebar = document.querySelector('.sidebar');

const showSidebar = document.querySelector('#showSidebar');
const hideSidebar = document.querySelector('#hideSidebar');

showSidebar.addEventListener('click', function (e) {
    sidebar.style.display = "flex";
})

hideSidebar.addEventListener('click', function (e) {
    sidebar.style.display = "none";
})

// create account page 
let createAcc = document.querySelector('button').addEventListener('click', function () {
    const name = document.querySelector('#name').value
    const number = document.querySelector('#number').value
    console.log(name)
    console.log(number)
    alert("Account created successful!");
})


//sidebar ends

// Bank structure 

