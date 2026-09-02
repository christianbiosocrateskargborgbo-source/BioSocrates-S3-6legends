document.getElementById('askBtn').onclick = function() {
  let input = document.getElementById('query').value.toLowerCase();
  let out = document.getElementById('output');
  let response = "";

  if (input.includes("bio")) {
    response = "🧬 BioSocrates GenAI: Founder Christian Kargbo, Bo->Cape Town. Bio x AI for Africa.";
  } else if (input.includes("6 legends") || input.includes("legends")) {
    response = "👑 6 LEGENDS: Mansa Musa (Wealth), Pharaoh (Eternal), Nefertiti (Divine), Ashanti (Warrior), Menelik (Victory), BioSocrates (Future)";
  } else if (input.includes("malaria") || input.includes("drug") || input.includes("sickle")) {
    response = `🧬 AGENTIC CHAIN FOR: ${input.toUpperCase()}
Agent1 Literature: 127 papers scanned
Agent2 Molecule: 3 compounds proposed
Agent3 Toxicity: Compound A SAFE (12%)
Agent4 Synthesis: Protocol ready
Agent5 Clinical: SA pathway mapped
Agent6 Socrates: ETHICAL PASS - Recommend Compound A`;
  } else if (input.includes("hire")) {
    response = "💼 HIRE ME: AI Engineer | Agentic AI | AWS | christianbiosocrateskargborgbo@gmail.com | 063 067 3980 | Ready for NJ Pharma";
  } else if (input.includes("youtube") || input.includes("cape") || input.includes("bo")) {
    response = "📍 From Bo, Sierra Leone to Cape Town - YouTube: BioSocrates S3-6Legends LIVE v5 FINAL";
  } else {
    response = "🤖 READY! Try: bio, 6 legends, malaria, drug, hire me, projects";
  }
  out.innerHTML = response;
};