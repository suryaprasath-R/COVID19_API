let container=document.createElement("div");
container.setAttribute("class","container");

let div1=document.createElement("div");
div1.setAttribute("class","main");
div1.setAttribute("id","main")

let h1= document.createElement("h1");
h1.setAttribute("class","Mainheading")
h1.innerHTML="Covid-19";

let pra=document.createElement("p");
pra.setAttribute("id","discription")
pra.innerHTML="Its About Covid-19 Cases";

let div2=document.createElement("div");
div2.setAttribute("id","main2");

let div3=document.createElement("div");
div3.setAttribute("id","main3");

let input=document.createElement("input")
input.setAttribute("type","text");
input.setAttribute("min-length","3");
input.setAttribute("placeholder","Enter the country name")
input.setAttribute("class","form-control");
input.setAttribute("id","country");
input.setAttribute("req","required");
let search=document.createElement("button");
search.setAttribute("type","button");
search.setAttribute("value","Search")
search.setAttribute("class","btn btn-primary");
search.setAttribute("id","search");
search.innerHTML="Search";

search.addEventListener("click",foo);


    

async function foo(){
    let val=document.getElementById("country").value;
    var url=`https://api.covid19api.com/dayone/country/${val}`;
    
    let res= await fetch(url);
    let res1= await res.json();
    active.innerHTML=`Total Active Case:${res1[res1.length-1].Active}`
    Confirmed.innerHTML=`Total Confirmed Case:${res1[res1.length-1].Confirmed}`
    recovered.innerHTML=`Total Recovered Case:${res1[res1.length-1].Recovered}`
    dead.innerHTML=`Total Death Case:${res1[res1.length-1].Deaths}`
}


let flag=document.createElement("div");
flag.setAttribute("id","flag")



let active=document.createElement("div")
active.setAttribute("id","active");


let Confirmed=document.createElement("div")
Confirmed.setAttribute("id","confirmed");



let recovered=document.createElement("div")
recovered.setAttribute("id","recovered")


let dead=document.createElement("div")
dead.setAttribute("id","dead");



div1.append(h1,pra);
div2.append(input,search)
div3.append(flag,active,Confirmed,recovered,dead)
container.append(div1,div2,div3);
document.body.append(container);