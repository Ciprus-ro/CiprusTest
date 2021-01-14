// $(document).ready( function() {
// })


function countRabbit() {
    for( let i = 0; i <= 3; i++) {
        alert('Rabbit number' + i);
    }
}

function myFunction() {
    let x = document.getElementById('fname');
    x.value = x.value.toUpperCase();
}

function mOver(obj) {
    obj.innerHTML = 'Mouse over me';
}

function mOut(obj) {
    obj.style.backgroundColor = '#23c553';
    obj.innerHTML = 'See you soon';
}

function mDown(obj) {
    obj.style.backgroundColor = '#1ec5e5';
    obj.innerHTML = 'Release me';
}
