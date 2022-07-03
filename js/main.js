$("body").append("<div class='KRTime'></div>");
$("body").append("<div class='NYTime'></div>");
$("body").append("<div class='VietnamTime'></div>");
$("body").append("<div class='TiwanTime'></div>");
$("body").append("<div class='ChinaTime'></div>");
$("body").append("<div class='RusiaTime'></div>");
$("body").append("<div class='GermanyTime'></div>");
$("body").append("<div class='EnglishTime'></div>");
$("body").append("<div class='ArgentinaTime'></div>");
$("body").append("<div class='AustrailiaTime'></div>");

function KRTime(){
  let today = new Date();

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  let Time = document.getElementsByClassName("KRTime")[0];
  Time.innerHTML =`현재 한국 시간 ${hours} : ${minutes} : ${seconds}`;
}
function NYTime(){
  let today = new Date();

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  let Time = document.getElementsByClassName("NYTime")[0];
  Time.innerHTML =`현재 뉴욕 시간 ${hours-14} : ${minutes} : ${seconds}`;
}
function VietnamTime(){
  let today = new Date();

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  let Time = document.getElementsByClassName("VietnamTime")[0];
  Time.innerHTML =`현재 베트남 시간 ${hours-2} : ${minutes} : ${seconds}`;
}
function TiwanTime(){
  let today = new Date();

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  let Time = document.getElementsByClassName("TiwanTime")[0];
  Time.innerHTML =`현재 태국 시간 ${hours-2} : ${minutes} : ${seconds}`;
}
function ChinaTime(){
  let today = new Date();

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  let Time = document.getElementsByClassName("ChinaTime")[0];
  Time.innerHTML =`현재 중국 시간 ${hours-1} : ${minutes} : ${seconds}`;
}
function RusiaTime(){
  let today = new Date();

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  let Time = document.getElementsByClassName("RusiaTime")[0];
  Time.innerHTML =`현재 러시아 시간 ${hours-6} : ${minutes} : ${seconds}`;
}
function GermanyTime(){
  let today = new Date();

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  let Time = document.getElementsByClassName("GermanyTime")[0];
  Time.innerHTML =`현재 독일 시간 ${hours-8} : ${minutes} : ${seconds}`;
}
function EnglishTime(){
  let today = new Date();

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  let Time = document.getElementsByClassName("EnglishTime")[0];
  Time.innerHTML =`현재 영국 시간 ${hours-9} : ${minutes} : ${seconds}`;
}
function ArgentinaTime(){
  let today = new Date();

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  let Time = document.getElementsByClassName("ArgentinaTime")[0];
  Time.innerHTML =`현재 아르헨티나 시간 ${hours-12} : ${minutes} : ${seconds}`;
}
function AustrailiaTime(){
  let today = new Date();

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  let Time = document.getElementsByClassName("AustrailiaTime")[0];
  Time.innerHTML =`현재 호주 시간 ${hours-2} : ${minutes} : ${seconds}`;
}

KRTime();
NYTime();
VietnamTime();
TiwanTime();
ChinaTime();
RusiaTime();
GermanyTime();
EnglishTime();
ArgentinaTime();
AustrailiaTime();

setInterval(KRTime, 1000);
setInterval(NYTime,1000);
setInterval(VietnamTime,1000)
setInterval(TiwanTime,1000)
setInterval(ChinaTime,1000)
setInterval(RusiaTime,1000)
setInterval(GermanyTime,1000)
setInterval(EnglishTime,1000)
setInterval(ArgentinaTime,1000)
setInterval(AustrailiaTime,1000)


//10개 국의 시계 만들기
