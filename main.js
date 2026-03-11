console.log('666你居然在看');




//慢慢打字显示出来
const text = "欢迎来到我的小站！这是一段慢慢地打字出现的一行文字哦";  // 要显示的文字
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);  // 每个字间隔0.1秒
    }
}
window.onload = typeWriter;//慢慢打字出现的文字请用下方代码
//     <p id="typewriter"></p>
