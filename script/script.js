const sidebar = document.querySelector('.sidebar');

const showSidebar = document.querySelector('#showSidebar');
const hideSidebar = document.querySelector('#hideSidebar');

hideSidebar.addEventListener('click', function (e) {
    sidebar.style.display = "none";
})

showSidebar.addEventListener('click', function (e) {
    showSidebar.style.display = "flex";
})

