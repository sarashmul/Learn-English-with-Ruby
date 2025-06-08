let flag;
let tipe;
let t;
let i = 0;
let tick1 = document.getElementById("11");
let tick2 = document.getElementById("22");
let tick3 = document.getElementById("33");
const words1 = ["hand", "and", "eand", "hid", "ead", "head", "lege", "leg", "legh", "lemp", "lemph", "lamp", "clock", "klock", "clack", "fone", "phone", "phon"];
const good1 = ["hand", "head", "leg", "lamp", "clock", "phone"];
const words2 = ["Computer", "Compioter", "komputeir", "touer", "tower", "tover", "mouse", "maus", "maoth", "arrow", "arou", "arowe", "coob", "cube", "cuby"];
const good2 = ["Computer", "tower", "mouse", "arrow", "cube"];
const words3 = ["screen", "skreen", "scrine", "facktorey", "fuctory", "factory", "headphones", "headphonse", "haedfones", "dron", "drowne", "drone", "keybord", "keiboard", "keyboard"];
const good3 = ["screen", "factory", "headphones", "drone", "keyboard"];
const pic1 = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg"];
const pic2 = ["images/7.jpg", "images/8.jpg", "images/9.jpg", "images/10.jpg", "images/11.jpg"];
const pic3 = ["images/12.jpg", "images/13.jpg", "images/14.jpg", "images/15.jpg", "images/16.jpg"];

const transWords1 = ["יד", "ראש", "רגל", "מנורה", "שעון", "פלאפון"];
const transWords2 = ["מחשב", "מגדל", "עכבר", "חץ", "קוביה"];
const transWords3 = ["מסך", "מפעל", "אוזניות ראש", "רחפן", "מקלדת"];

let text_tiket1 = document.createElement("p");
let text_tiket2 = document.createElement("p");
let text_tiket3 = document.createElement("p");
let x = localStorage.getItem("level");//איזה שלב נמצאים
let y = 0;
let score = 0; // ציון התחלתי
let timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
let timeLeft;// זמן התחלתי (בשניות)
var audioplayGood = document.getElementById("myAudio1");
var audioplayError = document.getElementById("myAudio2");
level();

//אחראי לשליחת המערכים המתאימים
function level() {
    timeLeft = 10;
    t1 = document.getElementById('timer');
    t1.style.display = 'block';
    enableButtons();
    if (x == 1) {

        if (i >= words1.length)
            goToLevel();
        else
            newWord(words1, pic1, transWords1);
    }
    else if (x == 2) {
        if (i >= words2.length)
            goToLevel();
        else
            newWord(words2, pic2, transWords2);
    }
    else {
        if (i >= words3.length)
            goToLevel();
        newWord(words3, pic3, transWords3);
    }
}

//שם את המילים המתאימות
function newWord(words, pic, transWords) {


    let text_output_response1 = document.getElementById("do111");
    text_output_response1.innerHTML = ".";

    this_image.src = pic[i / 3];
    this_image_text.textContent = transWords[i / 3];



    let rantop1 = Math.floor(Math.random() * 3 + 0);
    let rantop2;
    do {
        rantop2 = Math.floor(Math.random() * 3 + 0);
    } while (rantop1 == rantop2);
    let rantop3;
    do {
        rantop3 = Math.floor(Math.random() * 3 + 0);
    } while (rantop1 == rantop3 || rantop3 == rantop2);


    text_tiket1.textContent = words[i + rantop1];
    tick1.appendChild(text_tiket1);

    text_tiket2.textContent = words[i + rantop2];
    tick2.appendChild(text_tiket2);

    text_tiket3.textContent = words[i + rantop3];
    tick3.appendChild(text_tiket3);

    i += 3;
}

//בודק את נכונות ההקשה
function ansGood(y) {
    if (x == 1) {
        if (y === good1[i / 3 - 1])
            return true;
        else
            return false;
    }
    else if (x == 2) {
        if (y === good2[i / 3 - 1])
            return true;
        else
            return false;
    }
    else {
        if (y === good3[i / 3 - 1])
            return true;
        else
            return false;
    }
}

//בחרו בתשובה 1
function ans11() {
    addPointerFrom();

    t = 11;
    let text2;
    let t22 = document.getElementById("22");
    t22.onclick = "";
    disableButtons();
    let f = ansGood(text_tiket1.textContent);


    if (f) {
        addPoint();

        flag = 1;
        tipe = "myAudio1";
        playAudio(tipe);
        text2 = "!!wow!!! this is wanderful";
        setTimeout(function () { shoot(t); }, 0);
        setTimeout(function () { shoot(t); }, 150);
        setTimeout(function () { shoot(t); }, 300);
        setTimeout(function () { shoot(t); }, 450);
        setTimeout(function () { shoot(t); }, 600);
    }
    else {
        flag = 0;
        tipe = "myAudio2";
        playAudio(tipe);
        text2 = "!!ho!its error";

    }
    let index2 = -1;
    typeLetter2(text2, index2, flag);
}

//בחרו בתשובה 2
function ans22() {
    addPointerFrom();

    t = 22;
    let text2;
    disableButtons();
    let f = ansGood(text_tiket2.textContent);

    if (f) {
        addPoint();

        flag = 1;
        tipe = "myAudio1";
        playAudio(tipe);
        text2 = "!!wow!!! this is wanderful";
        setTimeout(function () { shoot(t); }, 0);
        setTimeout(function () { shoot(t); }, 150);
        setTimeout(function () { shoot(t); }, 300);
        setTimeout(function () { shoot(t); }, 450);
        setTimeout(function () { shoot(t); }, 600);
    }
    else {
        flag = 0;
        tipe = "myAudio2";
        playAudio(tipe);
        text2 = "!!ho!its error";

    }
    let index2 = -1;
    typeLetter2(text2, index2, flag);
}

//בחרו בתשובה 3
function ans33() {
    addPointerFrom();

    t = 33;
    let text2;
    disableButtons();
    let f = ansGood(text_tiket3.textContent);

    if (f) {
        addPoint();

        flag = 1;
        tipe = "myAudio1";
        playAudio(tipe);
        text2 = "!!wow!!! this is wanderful";
        setTimeout(function () { shoot(t); }, 0);
        setTimeout(function () { shoot(t); }, 150);
        setTimeout(function () { shoot(t); }, 300);
        setTimeout(function () { shoot(t); }, 450);
        setTimeout(function () { shoot(t); }, 600);
    }
    else {
        flag = 0;
        tipe = "myAudio2";
        playAudio(tipe);
        text2 = "!!ho!its error";

    }
    let index2 = -1;
    typeLetter2(text2, index2, flag);
}

//מסדר את הטיימר וכותב לו אם הצליח או לא
function typeLetter2(text_response, index_response, flag) {
    timeLeft = 10;
    t1 = document.getElementById('timer');
    t1.style.display = 'none';
    let bacimage2 = document.getElementById("bgp");
    let text_output_response = document.getElementById("do111");
    if (index_response < text_response.length) {
        text_output_response.innerHTML += text_response.charAt(index_response);

        if (flag && index_response % 6 == 0) {
            bacimage2.style.backgroundImage = "url('images/22.jpg')"; // עדכון הרקע לתמונה הנכונה
        }
        else if (flag && index_response % 6 == 3) {
            bacimage2.style.backgroundImage = "url('images/22-2.jpg')"; // עדכון הרקע לתמונה הנכונה
        }

        index_response++;
        if (text_output_response.style.display != 'none') {
            setTimeout(function () {
                typeLetter2(text_response, index_response, flag);
            }, 80);
        }
    }
    timeLeft = 12;
}

//בודק האם סיים שלב ושולח למקום המתאים
function next() {
    enableButtons();
    if (x == 1) {
        if (i < words1.length) {
            level();
        }
        else
            goToLevel();
    }
    else if (x == 2) {
        if (i < words2.length) {
            level();
        }
        else
            goToLevel();
    }
    else if (x == 3) {
        if (i < words3.length) {
            level();
        }
        else
            goToLevel();
    }
    else
        goToLevel();
}
// שלא תהיה אפשרות ללחוץ
function disableButtons() {
    tick1.onclick = null;
    tick2.onclick = null;
    tick3.onclick = null;
}
// להחזיר את האפשרות ללחוץ
function enableButtons() {
    tick1.onclick = ans11;
    tick2.onclick = ans22;
    tick3.onclick = ans33;
}
//קונפטי ככוכבים

const defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["star"],
    colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
};

function shoot(t) {
    const button = document.getElementById(t);
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + window.scrollY; // שומר על המיקום הנכון גם אם יש גלילה
    confetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: ["star"],
        origin: { x: x / window.innerWidth, y: y / window.innerHeight } // קביעת המיקום

    });

    confetti({
        ...defaults,
        particleCount: 10,
        scalar: 0.75,
        shapes: ["circle"],
        origin: { x: x / window.innerWidth, y: y / window.innerHeight } // קביעת המיקום

    });
}

// פונקציה שמבצעת הפעלת נגן המוזיקה
function playAudio(tipe) {
    var audio = document.getElementById(tipe);
    audio.play();
    setTimeout(next, 4000);
}

//למעבר לשלב הבא
function goToLevel() {
    sessionStorage.setItem(x, y);
    let text_output_response = document.getElementById("do111");
    text_output_response.innerHTML = "סיימת שלב!!! כל הכבוד!!!";
    window.location.href = 'readinGameGoToLevel.html';
}

//טיימר
const countdown = setInterval(() => {
    console.log(timeLeft);
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
        timeFinish();
    }
}, 1000);

//אם נגמר הזמן- כיתוב מתאים
function timeFinish() {
    disableButtons();
    let text_output_response = document.getElementById("do111");
    text_output_response.innerHTML = "time out!!! לא נורא, נסה שוב אולי בפעם הבאה...";
    console.log(text_output_response);
    timeLeft = 10;
    addPointerFrom();
    t1 = document.getElementById('timer');
    t1.style.display = 'none';
    setTimeout(level, 4000);
    timeLeft = 14;
}

//מיספור התשובות הטובות
function addPoint() {
    const pointDiv = document.getElementById("point");
    // קרא את הערך הנוכחי והמר אותו למספר
    let currentValue = parseInt(pointDiv.innerText);
    currentValue += 1;
    pointDiv.innerText = currentValue;
    y++;
}

//מיספור כל התשובות
function addPointerFrom() {
    const pointDivFrom = document.getElementById("pointFrom");
    // קרא את הערך הנוכחי והמר אותו למספר
    let currentValuefrom = parseInt(pointDivFrom.innerText);
    currentValuefrom += 1;
    pointDivFrom.innerText = currentValuefrom;
}

