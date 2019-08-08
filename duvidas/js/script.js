window.addEventListener("DOMContentLoaded", function () {

    //Question 01
    let q1 = document.getElementById('q1');
    let r1 = document.getElementById('r1');
    let show1 = document.getElementById('show1');
    let hide1 = document.getElementById('hide1');
    q1.addEventListener('click', function () {
        if (r1.style.display === "block") {
            r1.style.display = "none";
            show1.classList.add('active');
            hide1.classList.remove('active');

        } else {
            r1.style.display = "block";
            show1.classList.remove('active');
            hide1.classList.add('active');
        }
    });


    //Question 02
    let q2 = document.getElementById('q2');
    let r2 = document.getElementById('r2');
    let show2 = document.getElementById('show2');
    let hide2 = document.getElementById('hide2');
    q2.addEventListener('click', function () {
        if (r2.style.display == "block") {
            r2.style.display = "none";
            show2.classList.add('active');
            hide2.classList.remove('active');
        } else {
            r2.style.display = "block";
            show2.classList.remove('active');
            hide2.classList.add('active');
        }
    });


    //Question 03
    let q3 = document.getElementById('q3');
    let r3 = document.getElementById('r3');
    let show3 = document.getElementById('show3');
    let hide3 = document.getElementById('hide3');
    q3.addEventListener('click', function () {
        if (r3.style.display == "block") {
            r3.style.display = "none";
            show3.classList.add('active');
            hide3.classList.remove('active');
        } else {
            r3.style.display = "block";
            show3.classList.remove('active');
            hide3.classList.add('active');
        }
    });

});