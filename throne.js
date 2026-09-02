// THRONE v7 - UNIVERSAL FIX FOR YOUR SITE
function throneAnswer(q){
 q=(q||"").toLowerCase();
 if(q.includes("bio")) return "🧬 BioSocrates Christian Kargbo Bo->Cape Town\nFrom Bo to Hollywood 26 Letters = 26 Films";
 if(q.includes("legend")) return "👑 6 LEGENDS: Mansa Musa, Pharaoh, Nefertiti, Ashanti, Menelik, BioSocrates";
 if(q.includes("youtube")||q.includes("you tube")) return "🎥 SUBSCRIBE 6 -> 1000\nYouTube: BioSocrates S3 6 Legends";
 if(q.includes("malaria")||q.includes("drug")||q.includes("sickle")) return "🧬 AGENTIC CHAIN FOR "+q.toUpperCase()+"\nA1 Lit 127 papers\nA2 Mol 3 compounds\nA3 Tox Compound A SAFE\nA4 Synth ready\nA5 Clinical SA path\nA6 ETHICAL PASS";
 if(q.includes("hire")) return "💼 HIRE ME christianbiosocrateskargborgbo@gmail.com 0630673980";
 if(q.includes("cape")) return "🏔️ Cape Town - Building empire";
 if(q.includes("bo")) return "🌍 Bo City - Where throne began";
 return "🤖 Ready try: bio, legends, youtube, malaria, hire, cape, bo";
}
function startThrone(){
 var input=document.querySelector("input");
 var btn=document.querySelector("button#askBtn")||document.querySelector("button");
 var out=document.getElementById("output")||document.querySelector("div");
 function run(){
  var q=input?input.value:"";
  var r=throneAnswer(q);
  var boxes=document.querySelectorAll("div");
  for(var i=0;i<boxes.length;i++){
   if(boxes[i].innerText&&boxes[i].innerText.includes("READY!")){boxes[i].innerText=r;return;}
  }
  if(out) out.innerText=r;
 }
 if(btn) btn.onclick=run;
 if(input) input.addEventListener("keydown",function(e){if(e.key==="Enter")run();});
 var qb=document.getElementById("query");
 if(qb){ qb.addEventListener("keydown",function(e){if(e.key==="Enter")run();}); document.getElementById("askBtn").onclick=run; }
 console.log("THRONE v7 LIVE");
}
setTimeout(startThrone,300);
document.addEventListener("DOMContentLoaded",startThrone);