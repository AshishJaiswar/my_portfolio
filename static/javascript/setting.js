var yellow = document.getElementById('yellow');
var red = document.getElementById('red');
var green = document.getElementById('green');
var blue = document.getElementById('blue');

// yellow color   
yellow.addEventListener('click', function(){
    document.body.style.setProperty("--color-primary", "#ffc820");
    document.body.style.setProperty("--color-primary-dark", "#ffb30a")
    document.getElementById('b').style.backgroundImage = "url('/static/images/banner_yellow.png')";
})

red.addEventListener('click', function(){
    document.body.style.setProperty("--color-primary", "#ff5651");
    document.body.style.setProperty("--color-primary-dark", "#ff4b43")
    document.getElementById('b').style.backgroundImage = "url('/static/images/banner_red.png')";
})
green.addEventListener('click', function(){
    document.body.style.setProperty("--color-primary", "#0be881");
    document.body.style.setProperty("--color-primary-dark", "#05c46b")
    document.getElementById('b').style.backgroundImage = "url('/static/images/banner_green.png')";
})
blue.addEventListener('click', function(){
    document.body.style.setProperty("--color-primary", "#357EF6");
    document.body.style.setProperty("--color-primary-dark", "#0984e3")
    document.getElementById('b').style.backgroundImage = "url('/static/images/banner.png')";
})
