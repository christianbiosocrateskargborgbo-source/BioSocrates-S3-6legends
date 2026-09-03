
let cur="Socrates";
function enterThrone(){
let a=document.getElementById('chatArea');
if(!a){a=document.createElement('div');a.id='chatArea';document.body.appendChild(a);}
a.innerHTML='<div style="padding:15px"><h3 style="color:gold;text-align:center">'+cur+' LIVE!</h3><div id="msgs" style="height:200px;overflow:auto;border:2px solid gold;padding:10px;background:#111;color:#fff"></div><br><input id="inp" placeholder="Ask..." style="width:60%;padding:12px"><button onclick="send()" style="background:gold;color:black;padding:12px;font-weight:bold">SEND</button></div>';
add(cur+": Ask me anything Kargbo!");
}
function add(t){let m=document.getElementById('msgs');m.innerHTML+='<p>'+t+'</p>';m.scrollTop=m.scrollHeight;}
function send(){let i=document.getElementById('inp');let t=i.value;if(!t)return;add('<b>You:</b> '+t);i.value='';setTimeout(()=>{add('<b>'+cur+':</b> I hear '+t+' - Wisdom is power! 👑')},600);}
document.querySelectorAll('button').forEach(b=>{
let n=b.textContent.trim();
if(["Socrates","Galileo","Mandela","Ada","Leonardo","Cleopatra"].includes(n)){b.onclick=()=>{cur=n;enterThrone();}}
});
let eb=[...document.querySelectorAll('button')].find(x=>x.textContent.includes('ENTER'));
if(eb)eb.onclick=enterThrone;