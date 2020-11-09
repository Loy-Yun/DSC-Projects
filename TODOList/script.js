var list = document.getElementById('list');
var button = document.getElementById('button');
var input = document.getElementById('input');
var count = 1;
var date = document.getElementById('currentDate');
var currentdate = new Date().toISOString().substring(0, 10);
var dayalert;
var d_day;

button.addEventListener('click', clickButton);
date.value = currentdate;

function clickButton() {
    var li = document.createElement('li');
    dday();
    li.setAttribute("id", "li"+count);
    li.setAttribute("class", "list-group");

    li.innerHTML = dayalert+"<br>";
    li.innerHTML += input.value;
    li.innerHTML += "<button class='btn btn-warning' style='float: right; margin-left: auto;' onclick='remove("+count+")'>삭제</button>"

    count++;
    list.appendChild(li);
    input.value = "";
}

function remove(count) {
    var li = document.getElementById('li'+count);
    list.removeChild(li);
}

function dday() {
    var currdate = new Date(currentdate).getTime();
    var setdate = new Date(date.value).getTime();
    d_day = (setdate-currdate)/24/60/60/1000;
    if(d_day>=0) dayalert = "D-"+d_day;

    else dayalert = "D+"+d_day;
}