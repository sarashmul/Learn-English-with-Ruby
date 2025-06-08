//שלב רששון
function l1(){
    localStorage.setItem("level","1");
     window.location.href = 'readinGamePlay.html';
 }
 //שלב שנין
 function l2(){
     localStorage.setItem("level","2");
     window.location.href = 'readinGamePlay.html';
 }
 //שלב שלישי
 function l3(){
     localStorage.setItem("level","3");
     window.location.href = 'readinGamePlay.html';
 }
// להצגת ההצלחות
 function history(){
    sessionStorage.setItem("history",1);
    window.location.href = 'readinGameGoToLevel.html';
 }