
let x = localStorage.getItem("level");//איזה שלב נמצאים
whichLevel();


//בודק מה להציג- לאן לשלוח
function whichLevel() {
    if (sessionStorage.getItem("history") == 1)
        his();
    else if (x == 3) {
        wins();
    }

}

//הצגת ההצלחות
function his() {
    let go1 = document.getElementById("finishGTL");
    let go2 = document.getElementById("finishNL");
    let good1 = document.getElementById("finishH2");
    let good2 = document.getElementById("finishH1");
    let win1=document.getElementById("winText1");
    go2.style.display='none';
    good2.style.display = 'none';
    good1.textContent=" ";
    let s1 = sessionStorage.getItem(1);
    let s2 = sessionStorage.getItem(2);
    let s3 = sessionStorage.getItem(3);
    win1.style.fontSize="300px";
    go1.style.marginLeft=("37vw");

    let winText = document.getElementById("winText1").textContent = "your scores:";
    let scoreText1 = document.getElementById("winText2").textContent = "first level: " + s1 + "/6  scores";
    let scoreText2 = document.getElementById("winText3").textContent = " second level: " + s2 + "/5  score";
    let scoreText3 = document.getElementById("winText4").textContent = " third level: " + s3 + "/5  scores";
    sessionStorage.setItem("history",0);
}

//הצגת הניצחונות בסיום המשחק
function wins() {
    let go1 = document.getElementById("finishGTL");
    let go2 = document.getElementById("finishNL");
    go1.style.display = 'none';
    go2.style.display = 'none';
    let s1 = sessionStorage.getItem(1);
    let s2 = sessionStorage.getItem(2);
    let s3 = sessionStorage.getItem(3);

    let winText = document.getElementById("winText1").textContent = "your scores:";
    let scoreText1 = document.getElementById("winText2").textContent = "first level: " + s1 + "/6  scores";
    let scoreText2 = document.getElementById("winText3").textContent = " second level: " + s2 + "/5  score";
    let scoreText3 = document.getElementById("winText4").textContent = " third level: " + s3 + "/5  scores";
}

//לשלב הבא
function more() {
    let y = localStorage.getItem("level");
    y++;
    localStorage.setItem("level", y);
    window.location.href = 'readinGamePlay.html';
}

