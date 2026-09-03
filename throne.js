const legends = {
  Socrates: "I am Socrates. I question everything. What is truth to you, Kargbo?",
  Galileo: "I am Galileo. I saw stars move. What do you want to discover?",
  Mandela: "I am Mandela. Freedom is not given, it is taken. What will you fight for?",
  Ada: "I am Ada Lovelace. First coder. What will you build that lasts?",
  Leonardo: "I am Leonardo. Art and science are one. What will you create?",
  Cleopatra: "I am Cleopatra. Power is strategy. How will you rule your throne?"
};
let current = "Socrates";
function enterThrone() {
  document.getElementById('chatArea').innerHTML = `
    <div style="padding:20px; color:gold;">
      <h2>${current} LIVE!</h2>
      <div id="messages" style="height:200px; overflow-y:auto; border:1px solid gold; padding:10px; margin:10px 0; background:#111;"></div>
      <input id="userInput" placeholder="Ask ${current}..." style="width:70%; padding:10px; background:black; color:gold; border:1px solid gold;" />
      <button onclick="sendMsg()" style="padding:10px; background:gold; color:black; font-weight:bold;">SEND</button>
    </div>
  `;
  addMsg(legends[current], current);
}
function addMsg(text, who) {
  const m = document.getElementById('messages');
  if(m) m.innerHTML += `<p><b style="color:gold;">${who}:</b> <span style="color:white;">${text}</span></p>`;
}
function sendMsg() {
  const input = document.getElementById('userInput');
  const txt = input.value;
  if(!txt) return;
  addMsg(txt, "Kargbo 10");
  input.value = "";
  setTimeout(() => {
    let reply = `As ${current}, I hear you: "${txt}". You hold the throne! 👑`;
    if(current === "Socrates") reply = `You say "${txt}" - but what does it REALLY mean? Question it!`;
    if(current === "Galileo") reply = `"${txt}" - Look to the stars! Evidence will prove it!`;
    if(current === "Mandela") reply = `"${txt}" - Courage brother! Freedom continues!`;
    addMsg(reply, current);
  }, 800);
}
document.addEventListener('DOMContentLoaded', () => {
  document.queryS