document.documentElement.style.background='#000';
document.body.style.cssText='margin:0;background:#000;color:#FFD700;font-family:system-ui,Segoe UI,Roboto,sans-serif;min-height:100vh';
const root=document.getElementById('root');
root.innerHTML=`
<style>
  *{box-sizing:border-box}
  .wrap{max-width:1100px;margin:0 auto;padding:18px}
  .throne{border:1px solid #FFD70033;border-radius:24px;padding:22px;background:radial-gradient(1200px 400px at 50% -20%,#FFD70022,transparent),#0a0a0a;box-shadow:0 0 60px #FFD70011}
  .top{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}
  .badge{border:1px solid #FFD70055;padding:6px 12px;border-radius:999px;font-size:12px;letter-spacing:2px}
  .h1{font-size:42px;line-height:.9;margin:16px 0 8px;font-weight:900;letter-spacing:-1px}
  .gold{background:linear-gradient(90deg,#FFD700,#FFA500);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
  .sub{color:#fff9;max-width:720px;line-height:1.5}
  .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px;margin:20px 0}
  .card{border:1px solid #ffffff14;background:#111;border-radius:18px;padding:16px}
  .k{color:#FFD700;font-size:11px;letter-spacing:2px;margin-bottom:6px}
  .v{color:#fff;font-weight:700;font-size:18px}
  .chat{border:1px solid #FFD70022;background:#0f0f0f;border-radius:18px;overflow:hidden;margin-top:18px}
  .chatHead{display:flex;justify-content:space-between;padding:12px 16px;background:#151515;border-bottom:1px solid #ffffff10;font-size:12px;letter-spacing:2px;color:#FFD700}
  .msgs{height:360px;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:10px}
  .msg{max-width:85%;padding:10px 14px;border-radius:14px;font-size:14px;line-height:1.4}
  .me{align-self:flex-end;background:#FFD700;color:#000;font-weight:600}
  .ai{align-self:flex-start;background:#1c1c1c;color:#fff;border:1px solid #ffffff12}
  .in{display:flex;gap:8px;padding:10px;background:#0a0a0a;border-top:1px solid #fff