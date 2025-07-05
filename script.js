const hrEle=document.getElementById("hr");
const minEle=document.getElementById("min");
const secEle=document.getElementById("sec");
const ampmEle=document.getElementById("ampm");
function liveClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM";
    let dayNames=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    let monthNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let day=dayNames[new Date().getDay()];
    let date=new Date().getDate();
    let month=monthNames[new Date().getMonth()];
    let year=new Date().getFullYear();
    let fullDate=`${day}, ${date} ${month} ${year}`;
    document.getElementById("daydate").textContent=fullDate;
    if(h>=12){
        ampm="PM";
    }
    if(h>12){
          h=h-12;
    }
    h=h<10 ?"0"+h :h;
    m=m<10 ?"0"+m :m;
    s=s<10 ?"0"+s :s;
    hrEle.innerText=h;
    minEle.innerText=m;
    secEle.innerText=s;
    ampmEle.innerText=ampm;
    setTimeout(()=>{liveClock();},1000);
    
}
liveClock();