let toggler = document.querySelector('#switch');
toggler.addEventListener('click', () => {
    if (toggler.checked === true) {
        document.body.style.backgroundColor = "black";
        console.log("Toggling");
    } else {
        document.body.style.backgroundColor = "white";
        console.log("nothing");
    }
    console.log(toggler.checked);
})