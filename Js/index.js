
var start=document.getElementById('start');
var stop=document.getElementById('stop');
var restart=document.getElementById('restart');
var hr=document.getElementById('hour');
var min=document.getElementById('minutes');
var sec=document.getElementById('seconds');
var mili=document.getElementById('miliSeconds');
var lap=document.getElementById('lap');
var timeElement = document.getElementById('time');
var timeList = document.getElementById("time_list");


var ms_Inter;
var sInter;
var minInter;
var hrInter;
var running=false;

timeElement.style.border = "3px solid #778899";
disableButton(restart);
disableButton(stop);
lap.disabled = true;

function Sixty(time){
    time=parseInt(time)+1;
    if(time==60){
        time='00';
    }
    else if(time<10){
        time="0"+time;
    }
    return time;
}


function disableButton(btn){
    btn.disabled = true;
    btn.style.background="rgb(128,128,128))";
    btn.style.hover="rgb(222 201 210)";
}

function enableButton(btn){
    btn.disabled = false;
    btn.style.background= "linear-gradient(0deg,rgba(71, 153, 71,1) 0%, rgba(111, 168, 182, 0.548) 100%)";
}


function lapButtonEnable(){
    lap.disabled=false;
}


start.addEventListener('click',function(){

    
    ms_Inter=setInterval(() => {
        mili.textContent=Sixty(mili.textContent);
    }, 1000/60);

  
    sInter=setInterval(() => {
        sec.textContent=Sixty(sec.textContent);
    }, 1000);

    
    minInter=setInterval(() => {
        min.textContent=Sixty(min.textContent);
    }, 1000*60);


    hrInter=setInterval(() => {
        hr.textContent=Sixty(hr.textContent);
    }, 1000*60*60);

    running=true;
    
    disableButton(start);
    enableButton(stop);
    enableButton(restart);
    lapButtonEnable();
    
    timeElement.style.border = "3px solid #40916c";
});



 
function clearIntervals(){
    clearInterval(ms_Inter);
    clearInterval(sInter);
    clearInterval(minInter);
    clearInterval(hrInter);
    enableButton(start);
}

var stopcount=1;
stop.addEventListener('click',function(){
       
    if (running) {
      
        running = false;
        timeElement.style.border = "3px solid #708090";
      
        var innerContent="<li>"+stopcount +".&nbsp&nbsp&nbsp&nbsp" +hr.textContent+" : "+min.textContent+" : "+sec.textContent+" : "+mili.textContent+"</li>";
        timeList.insertAdjacentHTML("afterbegin", innerContent);
    }

    clearIntervals();
    timeElement.style.border = "3px solid #708090";
    disableButton(stop);
    stopcount+=1;
    
});



restart.addEventListener("click",function(){
    
    timeElement.style.border = "3px solid #708090";
    
    hr.textContent='00';
    min.textContent='00';
    sec.textContent='00';
    mili.textContent='00';

    
    clearIntervals();
    disableButton(restart);
    disableButton(stop);

    
    while (flex.firstChild) {
        flex.firstChild.remove()
    }
    count=1;
    lap.disabled = true;
    
    timeList.innerHTML = "";
    stopcount=1;
});

var count=1;
lap.addEventListener('click',function(){

    
    let parent = document.createElement("div");  
    
    parent.classList.add("lap-item"); 

    var lapTime=hr.textContent+" : "+min.textContent+" : "+sec.textContent+" : "+mili.textContent
    parent.innerHTML =`<span>`+count+`.</span><span class="times">`+lapTime+`</span>`;

    count+=1;
    
    flex.appendChild(parent);    
    
});

