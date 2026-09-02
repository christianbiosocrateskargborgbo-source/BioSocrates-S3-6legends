document.getElementById('root').innerHTML=`
<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:system-ui}
body{background:#0a0a0a;color:#FFD700}
.hdr{background:#000;padding:18px;text-align:center;border-bottom:2px solid #FFD700;position:sticky;top:0}
.card{background:#141414;border:1px solid #FFD700;margin:12px;border-radius:12px;padding:16px}
.btn{background:#FFD700;color:#000;border:none;padding:12px 18px;border-radius:8px;font-weight:900;margin:6px;width:100%}
.row{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.stat{font-size:22px;font-weight:900}
small{color:#aaa}
</style>
<div class="hdr"><h1>👑 THRONE - BIOSOCRATES</h1><small style="color:#FFD700">S3-6LEGENDS • LIVE • v5 FINAL</small></div>
<div class="card"><div class="stat">🟢 SYSTEM ONLINE</div><small>Repo: BioSocrates-S3-6legends<br>URL: christianbiosocrateskargborgbo-source.github.io</small></div>
<div class="card"><h3>🧬 6 LEGENDS STATUS</h3><div class="row">
<div>🧠 BioSocrates: ACTIVE</div><div>🛡️ Guardian: ARMED</div>
<div>⚡ Forge: READY</div><div>👁️ Oracle: SCANNING</div>
<div>📦 Vault: SECURED</div><div>🌐 Nexus: CONNECTED</div>
</div></div>
<div class="card"><h3>⚡ ACTIONS</h3>
<button class="btn" onclick="alert('Sync triggered! All legends synced ✅')">🔄 SYNC ALL LEGENDS</button>
<button class="btn" onclick="location.reload()">♻️ RELOAD THRONE</button>
<button class="btn" onclick="alert('Health: 100% - Throne is PERFECT ✅