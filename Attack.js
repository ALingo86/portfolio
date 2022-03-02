var i = 0;
var speed = 50;

function helloWriter() {
    document.getElementById("attack").innerHTML = '';
    document.getElementById("run").innerHTML = '';
    var txt = "Hello traveller! My name is Meek! Welcome to Andrew Lingo's portfolio page for Application Development! Please have a look around!  "
    if (i < txt.length) {
        document.getElementById("hello").innerHTML += txt.charAt(i);
        i++;
        setTimeout(helloWriter, speed);
    }

}
var m = 0;

function helloWriter2() {
    document.getElementById("hello").innerHTML = '';
    document.getElementById("run").innerHTML = '';
    var txt = "NO! Please no attack Meek! Meek just trying to tell you about Andrew's portfolio page! AHH!  "
    if (m < txt.length) {
        document.getElementById("attack").innerHTML += txt.charAt(m);
        m++;
        setTimeout(helloWriter2, speed);
    }


}
var n = 0;

function helloWriter3() {
    document.getElementById("hello").innerHTML = '';
    document.getElementById("attack").innerHTML = '';
    var txt = "No run from Meek! Meek just as afraid of you as you is of Meek! Please look at Andrew's portfolio page! He need job!"
    if (n < txt.length) {
        document.getElementById("run").innerHTML += txt.charAt(n);
        n++;
        setTimeout(helloWriter3, speed);
    }

}

function Clear() {
    document.getElementById("hello").innerHTML = '';
    document.getElementById("attack").innerHTML = '';
    document.getElementById("run").innerHTML = '';
}