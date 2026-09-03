
let cur="Socrates";
function enterThrone(){
let a=document.getElementById('chatArea');
if(!a){a=document.createElement('div');a.id='chatArea';document.body.appendChild(a);}
a.style.padding="15px";
a.innerHTML="";
let h=document.createElement('h3');h.textContent=cur+" LIVE!";h.style.color="gold";h.style.textAlign="center";a.appendChild(h);
let box=document.createElement('div');box.id="msgs";box.style.height="200px";box.style.overflow="auto";box.style.border="2px solid gold";box.style.padding="10px";box.style.background="#111";box.style.color="#fff";a.appendChild(box);
let br=document.createElement('br');a.appendChild(br);
let inp=document.createElement('input');inp.id="inp";inp.placeholder="Ask...";inp.style.width="60%";inp.style.padding="12px";a.appendChild(inp);
let btn=document.createElement('button');btn.textContent="SEND";btn.style.background="gold";btn.style.color="black";btn.style.padding="12px";btn.style.fontWeight="bold";btn.onclick=send;a.appendChild(btn);
add(cur+": Ask me anything Kargbo!");
}
function add(t){let m=document.getElementById('msgs');let p=document.createElement('p');p.innerHTML=t;m.appendChild(p);m.scrollTop=m.scrollHeight;}
function send(){let i=document.getElementById('inp');let t=i.value;if(!t)return;add("<b>You:</b> "+t);i.value="";setTimeout(()=>{add("<b>"+cur+":</b> I hear "+t+" - Wisdom is power! 👑")},600);}
document.querySelectorAll('button').forEach(b=>{
let n=b.textContent.trim();
if(["Socrates","Galileo","Mandela","Ada","Leonardo","Cleopatra"].includes(n)){b.onclick=()=>{cur=n;enterThrone();}}
});
let eb=[...document.querySelectorAll('button')].find(x=>x.textContent.includes('ENTER'));
if(eb)eb.onclick=enterThrone;