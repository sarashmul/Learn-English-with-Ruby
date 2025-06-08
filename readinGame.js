const text = "הי! שמי רולי, באתי ללמד אתכם אנגלית אז בואו נתחיל!!";
let index = 0;
let bacimage = document.getElementById("bhp");
let text_output = document.getElementById("output");
var audiohp = document.getElementById("myAudio_hp");
let verifyPassward = document.getElementById("user_check_password");
let type;

//הגדרת מערך אובייקטים משתמשים
let users;
//ברוכים הבאים
function typeLetter() {

    if (index == 0) {
        playAudiohp();
    }
    if (index < text.length) {
        document.getElementById("output").innerHTML += text.charAt(index);

        if (index % 6 == 1) {
            bacimage.style.backgroundImage = "url('images/hp.jpg')"; // עדכון הרקע לתמונה הנכונה
        }
        else if (index % 6 == 3) {
            bacimage.style.backgroundImage = "url('images/hp2.jpg')"; // עדכון הרקע לתמונה הנכונה
        }
        else if (index % 6 == 5) {
            bacimage.style.backgroundImage = "url('images/hp3.jpg')"; // עדכון הרקע לתמונה הנכונה
        }
        index++;
        if (text_output.style.display != 'none') {
            setTimeout(typeLetter, 80); // זמן המתנה בין כל אות (במילישניות)
        }
    }
}

//מפעיל את המלל ומציג כפתורים
function start() {
    // localStorage.setItem("users",);
    sessionStorage.setItem("1",0);
    sessionStorage.setItem("2",0);
    sessionStorage.setItem("3",0);
    typeLetter(); // התחל את הפונקציה
    var btn = document.getElementById("btndiv");

    btn.innerHTML = `<button type="button" id="btmconnect" onclick="document.getElementById('id01').style.display='block' , connect()" style="width:auto;">התחברות</button> 
    <button type="button" id="btnregister" onclick="document.getElementById('id01').style.display='block' ,Register()" style="width:auto;">הרשמה</button> 
    `; 
}

// התחברות

function connect() {
    text_output.style.display = 'none';
    audiohp.pause(); // מכבה את האודיו
    audiohp.currentTime = 0;
    verifyPassward.style.display = 'none';
    type = 2;

}

//האם המשתמש קיים
function if_user_exists() {
    let registeMessage = document.getElementById("registerMssege");
    let user = document.getElementById("name1");
    let pass = document.getElementById("user_password");
    let users2 = localStorage.getItem('users');
    let usersjs = JSON.parse(users2);
    for (let j = 0; j < usersjs.length; j++) {
        const tus = usersjs[j];
        if (tus.pass == pass.value && tus.name == user.value) {
            window.location.href = 'readinGameLevel.html';
        }

    }
    registeMessage.style.display = 'block';
}



//שמירת משתמש חדש
function save_in_localstorage() {
    let registeMessage1 = document.getElementById("registerMssege");
    registeMessage1.style.display = 'none';
    
    users= localStorage.getItem("users");
    if(users==null){
        users=[];
        localStorage.setItem("users",JSON.stringify(users));
    }
    let user = {
        name: document.getElementById('name1').value,
        pass: document.getElementById("user_password").value
    };

    let users1 = localStorage.getItem('users');
    let usersj = JSON.parse(users1);
    usersj.push(user);
    localStorage.setItem('users', JSON.stringify(usersj));
    move1();
}
function move1(){
    window.location.href = 'readinGameLevel.html';
}
//קוביה להצגת הסיסמה
function Passwordf() {
    var x = document.getElementById("user_password");
    if (x.type == "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function Passwordf2() {
    var x = document.getElementById("user_check_password");
    if (x.type == "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
    Passwordf();
}

// הרשמה

//פונקציה לפתיחת קובץ
function Register() {
    text_output.style.display = 'none';
    audiohp.pause(); // מכבה את האודיו
    audiohp.currentTime = 0;
    verifyPassward.style.display = 'block';
    type = 1;
}
// 

//בדיקה האם כל השדות תקינים אם כן מעבר לשמירת או חיפוש המשתמש 
function AddUser() {
    let password = document.getElementById("user_password").value;
    let checkPassword = document.getElementById("user_check_password").value;
    let errorMessage = document.getElementById("errorMssege");
    if (type == 1) {

        if (password != checkPassword) {
            errorMessage.style.display = 'block';
            verifyPassward.style.display = 'none';
            verifyPassward.style.display = 'block';
        }
        else { save_in_localstorage(); }
    }
    else if (type == 2) {

        if_user_exists();
    }
}

//הפעלת השמע
function playAudiohp() {
    audiohp.play();
}