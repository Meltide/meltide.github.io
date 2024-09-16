fetch('/public/drawer.html')
    .then(response => response.text())
    .then(data => {
    document.querySelector('#drawer').innerHTML = data;
});
fetch('/public/footer.html')
    .then(response => response.text())
    .then(data => {
    document.querySelector('#footer').innerHTML = data;
});