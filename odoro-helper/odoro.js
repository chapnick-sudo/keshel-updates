// Odoro Helper — גרסת סימנייה (Bookmarklet). נבנה אוטומטית מתוך התוסף.
// לא מכיל מידע על מטופלים. רץ רק בדפדפן של המשתמש, בתוך אודורו, בחיבור שלו.
(function(){if(window.__odoroHelperLoaded)return;if(!/(^|\.)odoro\.co\.il$/.test(location.hostname)){alert("הסימנייה עובדת רק בתוך אתר אודורו");return;}window.__ohBookmarklet=true;var s=document.createElement("style");s.id="oh-style";s.textContent=".oh-toggle {\n  position: fixed; top: 8px; left: 12px; z-index: 2147483000;\n  background: #1f6f43; color: #fff; border: 0; border-radius: 18px;\n  padding: 6px 14px; font: bold 13px Arial, sans-serif; cursor: pointer;\n  box-shadow: 0 2px 6px rgba(0,0,0,.25);\n}\n.oh-panel {\n  position: fixed; top: 44px; left: 12px; z-index: 2147483000;\n  width: 380px; max-height: 82vh; overflow-y: auto;\n  background: #fff; color: #222; direction: rtl; text-align: right;\n  font: 13px Arial, sans-serif; border-radius: 10px;\n  box-shadow: 0 6px 24px rgba(0,0,0,.25); border: 1px solid #ccc;\n}\n.oh-hidden { display: none !important; }\n.oh-header { display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: #1f6f43; color: #fff; font-weight: bold; border-radius: 10px 10px 0 0; }\n.oh-x { background: none; border: 0; color: #fff; font-size: 20px; cursor: pointer; line-height: 1; }\n.oh-tabs { display: flex; border-bottom: 1px solid #ddd; }\n.oh-tab { flex: 1; padding: 8px; border: 0; background: #f4f4f4; cursor: pointer; font: 13px Arial, sans-serif; }\n.oh-tab.oh-active { background: #fff; font-weight: bold; border-bottom: 2px solid #1f6f43; }\n.oh-body { padding: 10px 12px; }\n.oh-row { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; margin: 6px 0; }\n.oh-time-pick { display: inline-flex; align-items: center; gap: 2px; font-weight: bold; }\n.oh-tsel { width: auto !important; padding: 1px 2px; margin: 0; height: auto; font: 13px Arial, sans-serif; }\n.oh-chip { border: 1px solid #1f6f43; color: #1f6f43; background: #fff; border-radius: 12px; padding: 2px 10px; cursor: pointer; font-size: 12px; }\n.oh-chip:hover { background: #e9f5ee; }\n.oh-hint { color: #555; font-size: 12px; margin-bottom: 4px; }\n.oh-list { border: 1px solid #e3e3e3; border-radius: 6px; max-height: 260px; overflow-y: auto; padding: 4px 6px; margin: 6px 0; }\n.oh-item { display: flex; gap: 6px; align-items: center; padding: 3px 0; border-bottom: 1px solid #f1f1f1; cursor: pointer; margin: 0; font-size: 13px; }\n.oh-item input { margin: 0; }\n.oh-time { font-weight: bold; min-width: 40px; }\n.oh-name { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.oh-st { font-size: 11px; padding: 1px 6px; border-radius: 8px; background: #eee; white-space: nowrap; }\n.oh-st-sent { background: #d9f2df; color: #1d6b33; }\n.oh-st-confirmed { background: #d6e8fb; color: #1a4f8a; }\n.oh-st-pending { background: #eee; color: #555; }\n.oh-warn { font-size: 11px; color: #b00; }\n.oh-empty { color: #777; padding: 8px 0; }\n.oh-select { width: 100%; margin: 0; }\n.oh-text { width: 100%; box-sizing: border-box; font: 13px Arial, sans-serif; direction: rtl; }\n.oh-preview { font-size: 12px; color: #444; background: #fafafa; border-radius: 6px; padding: 4px 6px; margin: 4px 0; white-space: pre-wrap; }\n.oh-preview:empty { display: none; }\n.oh-primary { width: 100%; margin-top: 6px; padding: 8px; background: #1f6f43; color: #fff; border: 0; border-radius: 6px; font: bold 14px Arial, sans-serif; cursor: pointer; }\n.oh-primary:disabled { opacity: .5; cursor: default; }\n.oh-log { font-size: 12px; max-height: 160px; overflow-y: auto; margin-top: 6px; }\n.oh-log:empty { display: none; }\n.oh-good { color: #1d6b33; font-weight: bold; }\n.oh-bad { color: #b00; }\n/* תיבות סימון ביומן ופס פעולות */\ninput.oh-rowcb { margin: 0 0 0 6px !important; vertical-align: middle; cursor: pointer; width: 15px; height: 15px; }\n.oh-bar {\n  position: fixed; bottom: 16px; left: 50%; transform: translateX(-50%); z-index: 2147483000;\n  width: min(460px, calc(100vw - 32px)); direction: rtl; text-align: right;\n  background: #fff; border: 2px solid #1f6f43; border-radius: 12px; padding: 8px 10px;\n  box-shadow: 0 6px 24px rgba(0,0,0,.3); font: 13px Arial, sans-serif; color: #222;\n}\n.oh-bar-top { display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }\n.oh-bar-count { font-weight: bold; margin-left: auto; }\n.oh-bar-btn { border: 0; border-radius: 6px; padding: 6px 10px; cursor: pointer; font: bold 13px Arial, sans-serif; color: #fff; }\n.oh-bar-btn:disabled { opacity: .5; }\n.oh-bar-wa { background: #25a35a; }\n.oh-bar-sms { background: #2a6db0; }\n.oh-bar-clear { background: #eee; color: #333; font-weight: normal; }\n.oh-bar-smsbox { margin-top: 8px; display: flex; flex-direction: column; gap: 6px; }\n.oh-bar-smsbox.oh-hidden { display: none !important; }\n\n/* מסך טלפון */\n@media (max-width: 760px) {\n  .oh-toggle { top: auto; bottom: 14px; left: 14px; padding: 10px 16px; font-size: 15px; }\n  .oh-panel { top: 8px; left: 8px; right: 8px; width: auto; max-height: calc(100vh - 80px); font-size: 15px; }\n  .oh-tab { padding: 12px; font-size: 15px; }\n  .oh-chip { padding: 7px 12px; font-size: 14px; }\n  .oh-item { padding: 9px 0; font-size: 15px; }\n  .oh-item input { width: 20px; height: 20px; }\n  .oh-tsel, .oh-select, .oh-text { font-size: 16px !important; padding: 6px 4px !important; }\n  .oh-primary { padding: 12px; font-size: 16px; }\n  input.oh-rowcb { width: 22px; height: 22px; margin-left: 8px !important; }\n  .oh-bar { bottom: 8px; width: calc(100vw - 16px); padding: 10px; font-size: 15px; }\n  .oh-bar-btn { padding: 10px 12px; font-size: 15px; }\n}\n";document.head.appendChild(s);})();
// Odoro Helper — תוסף מקומי ליומן אודורו
// שתי פעולות:
// 1. וואטסאפ חוזר: מחזיר תורים במצב "נשלח ולא אושר" (ירוק) למצב "יישלח" (אפור), והמערכת שולחת שוב.
// 2. SMS קבוצתי: שולח הודעה (מתבנית או חופשית) לתורים שנבחרו.
// התוסף משתמש בחיבור הקיים שלך לאודורו. הוא לא שומר מידע ולא שולח אותו לשום מקום אחר.

(() => {
  if (window.__odoroHelperLoaded) return;
  window.__odoroHelperLoaded = true;

  // רץ רק בתצוגת יום של היומן
  if (!document.querySelector('td.event_status[data-id]') && !document.getElementById('day_date')) {
    window.__odoroHelperLoaded = false;
    if (window.__ohBookmarklet) alert('יש לפתוח את תצוגת היום ביומן אודורו, ואז ללחוץ שוב על הסימנייה.');
    return;
  }

  const STATUS = {
    'sms-white': 'none',      // לא תישלח
    'sms-gray': 'pending',    // תישלח
    'sms-green': 'sent',      // נשלחה, לא אושרה
    'sms-tick': 'confirmed'   // אושרה
  };
  const STATUS_HE = { none: 'לא תישלח', pending: 'תישלח', sent: 'נשלח, לא אישר', confirmed: 'אישר' };

  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const pad = n => String(n).padStart(2, '0');
  const fmt = m => pad(Math.floor(m / 60)) + ':' + pad(m % 60);
  const toMin = s => { const [h, m] = (s || '0:0').split(':').map(Number); return h * 60 + m; };

  function dayDate() {
    const v = document.getElementById('day_date')?.value;
    if (v && /^\d{8}$/.test(v)) return v;
    const m = location.search.match(/date=(\d{8})/);
    if (m) return m[1];
    const d = new Date();
    return d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate());
  }
  function todayStr() { const d = new Date(); return d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate()); }
  function nowMin() { const d = new Date(); return d.getHours() * 60 + d.getMinutes(); }
  const isToday = () => dayDate() === todayStr();

  // קריאת התורים מתוך דף היומן (או מעותק טרי שלו)
  function parse(doc) {
    const out = [];
    const seen = new Set();
    doc.querySelectorAll('td.event_status[data-id]').forEach(td => {
      const id = td.getAttribute('data-id');
      if (!id || seen.has(id)) return;
      const tr = td.closest('tr');
      const a = tr && tr.querySelector('td.event_confirm a[href*="evConfUpdate"]');
      if (!a) return; // לא תור רגיל (הודעה, חסימה וכו')
      seen.add(id);
      const img = a.querySelector('img');
      const src = img ? img.getAttribute('src') || '' : '';
      const key = (src.match(/confirm\/([a-z-]+)\.png/) || [])[1] || '';
      const hm = (a.getAttribute('href') || '').match(/evConfUpdate\('(\d+)',\s*'(\d+)',\s*'([^']+)'\)/);
      out.push({
        id,
        start: Number(td.getAttribute('data-start_hour')) || 0,
        name: (td.getAttribute('data-name') || '').trim(),
        phone1: td.getAttribute('data-phone1') || '',
        phone2: td.getAttribute('data-phone2') || '',
        status: STATUS[key] || key || 'unknown',
        conf: hm ? hm[2] : '1',
        user: hm ? hm[3] : null
      });
    });
    return out.sort((x, y) => x.start - y.start);
  }

  async function fetchFresh() {
    const res = await fetch('day.php?date=' + dayDate(), { credentials: 'same-origin', cache: 'no-store' });
    const html = await res.text();
    return parse(new DOMParser().parseFromString(html, 'text/html'));
  }

  const calUser = () => parse(document).find(r => r.user)?.user || 'chapnik';
  const calName = () => (document.querySelector('td.hour_group span')?.textContent || '').trim();

  function mobileOf(r) {
    for (const p of [r.phone1, r.phone2]) {
      const d = (p || '').replace(/\D/g, '');
      if (/^05\d{8}$/.test(d)) return d;
    }
    return '';
  }

  function render(tpl, r) {
    const dd = dayDate();
    const parts = r.name.split(/\s+/);
    return tpl
      .replaceAll('{hour}', fmt(r.start))
      .replaceAll('{name}', r.name)
      .replaceAll('{fname}', parts[0] || '')
      .replaceAll('{lname}', parts.slice(1).join(' '))
      .replaceAll('{date}', dd.slice(6, 8) + '/' + dd.slice(4, 6))
      .replaceAll('{dd}', dd.slice(6, 8))
      .replaceAll('{mm}', dd.slice(4, 6))
      .replaceAll('{yy}', dd.slice(2, 4))
      .replaceAll('{cal}', calName());
  }

  // ---------- ממשק ----------
  const el = (tag, attrs = {}, ...kids) => {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'class') e.className = v;
      else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v);
    }
    kids.flat().forEach(k => e.append(k instanceof Node ? k : document.createTextNode(String(k))));
    return e;
  };

  const toggleBtn = el('button', { class: 'oh-toggle', title: 'Odoro Helper' }, '⚡ אוטומציה');
  const panel = el('div', { class: 'oh-panel oh-hidden' });
  document.body.append(toggleBtn, panel);
  toggleBtn.addEventListener('click', () => panel.classList.toggle('oh-hidden'));

  const header = el('div', { class: 'oh-header' },
    el('span', {}, 'Odoro Helper'),
    el('button', { class: 'oh-x', onclick: () => panel.classList.add('oh-hidden') }, '×'));
  const tabWa = el('button', { class: 'oh-tab oh-active' }, 'וואטסאפ חוזר');
  const tabSms = el('button', { class: 'oh-tab' }, 'SMS');
  const bodyWa = el('div', { class: 'oh-body' });
  const bodySms = el('div', { class: 'oh-body oh-hidden' });
  tabWa.onclick = () => { tabWa.classList.add('oh-active'); tabSms.classList.remove('oh-active'); bodyWa.classList.remove('oh-hidden'); bodySms.classList.add('oh-hidden'); };
  tabSms.onclick = () => { tabSms.classList.add('oh-active'); tabWa.classList.remove('oh-active'); bodySms.classList.remove('oh-hidden'); bodyWa.classList.add('oh-hidden'); };
  panel.append(header, el('div', { class: 'oh-tabs' }, tabWa, tabSms), bodyWa, bodySms);

  // טווח שעות משותף
  function rangeControls(onChange) {
    // בחירת שעה בפורמט 24 שעות: שעה + דקות (קפיצות של 5)
    function timePicker() {
      const h = el('select', { class: 'oh-tsel' });
      const m = el('select', { class: 'oh-tsel' });
      for (let i = 0; i < 24; i++) h.append(el('option', { value: i }, pad(i)));
      for (let i = 0; i < 60; i += 5) m.append(el('option', { value: i }, pad(i)));
      h.onchange = onChange; m.onchange = onChange;
      // בכיוון RTL: דקות משמאל, שעה מימין → נראה כמו HH:MM
      const box = el('span', { class: 'oh-time-pick', dir: 'ltr' }, h, ':', m);
      return {
        box,
        get: () => Number(h.value) * 60 + Number(m.value),
        set: (mins, roundUp) => {
          mins = Math.max(0, Math.min(23 * 60 + 55, mins));
          let mm = mins % 60;
          let hh = Math.floor(mins / 60);
          mm = roundUp ? Math.ceil(mm / 5) * 5 : Math.floor(mm / 5) * 5;
          if (mm === 60) { mm = 0; hh = Math.min(23, hh + 1); }
          h.value = hh; m.value = mm;
        }
      };
    }
    const from = timePicker();
    const to = timePicker();
    const setRange = (a, b) => { from.set(a, false); to.set(Math.min(23 * 60 + 59, b), true); onChange(); };
    const base = () => (isToday() ? nowMin() : 0);
    const quick = (label, mins) => el('button', { class: 'oh-chip', onclick: () => setRange(base(), mins == null ? 23 * 60 + 59 : base() + mins) }, label);
    const box = el('div', { class: 'oh-range' },
      el('div', { class: 'oh-row' }, 'משעה ', from.box, ' עד ', to.box),
      el('div', { class: 'oh-row' }, quick('שעה קרובה', 60), quick('שעתיים', 120), quick('3 שעות', 180), quick('עד סוף היום', null)));
    return { box, get: () => [from.get(), to.get() === 23 * 60 + 55 ? 23 * 60 + 59 : to.get()], setRange, base };
  }

  function listView(rows, checkedByDefault) {
    const wrap = el('div', { class: 'oh-list' });
    if (!rows.length) { wrap.append(el('div', { class: 'oh-empty' }, 'אין תורים מתאימים בטווח')); return { wrap, selected: () => [] }; }
    const boxes = rows.map(r => {
      const cb = el('input', { type: 'checkbox' });
      cb.checked = checkedByDefault;
      cb.dataset.id = r.id;
      const ph = mobileOf(r);
      wrap.append(el('label', { class: 'oh-item' }, cb,
        el('span', { class: 'oh-time' }, fmt(r.start)),
        el('span', { class: 'oh-name' }, r.name || '(ללא שם)'),
        el('span', { class: 'oh-st oh-st-' + r.status }, STATUS_HE[r.status] || r.status),
        ph ? '' : el('span', { class: 'oh-warn' }, 'אין נייד')));
      return cb;
    });
    const all = el('div', { class: 'oh-row' },
      el('button', { class: 'oh-chip', onclick: () => boxes.forEach(b => (b.checked = true)) }, 'סמן הכל'),
      el('button', { class: 'oh-chip', onclick: () => boxes.forEach(b => (b.checked = false)) }, 'נקה'));
    wrap.prepend(all);
    return { wrap, selected: () => boxes.filter(b => b.checked).map(b => b.dataset.id) };
  }

  const logBox = () => el('div', { class: 'oh-log' });
  const log = (box, msg, cls = '') => { box.append(el('div', { class: cls }, msg)); box.scrollTop = box.scrollHeight; };

  // ---------- פעולות משותפות ----------

  // מחזיר תורים למצב "יישלח" (אפור), צעד אחד בכל פעם, עם בדיקה אחרי כל לחיצה
  async function resendWhatsApp(ids, allowed, out) {
    out.replaceChildren();
    const date = dayDate();
    try {
      log(out, 'בודק מצב עדכני מול השרת…');
      const fresh = await fetchFresh();
      let done = 0;
      for (const id of ids) {
        let r = fresh.find(x => x.id === id);
        if (!r) { log(out, `תור ${id}: לא נמצא, דילגתי`, 'oh-bad'); continue; }
        const label = `${fmt(r.start)} ${r.name}`;
        if (r.status === 'pending') { log(out, `${label}: כבר במצב "יישלח"`); done++; continue; }
        if (!allowed.includes(r.status)) { log(out, `${label}: המצב "${STATUS_HE[r.status] || r.status}", דילגתי`, 'oh-bad'); continue; }
        const startStatus = r.status;
        let reached = false;
        for (let step = 0; step < 4; step++) {
          const url = `event_update.php?id=${encodeURIComponent(id)}&confirm=${encodeURIComponent(r.conf)}&user=${encodeURIComponent(r.user || calUser())}&scroll=0&date=${date}`;
          const res = await fetch(url, { credentials: 'same-origin', cache: 'no-store' });
          let next = parse(new DOMParser().parseFromString(await res.text(), 'text/html')).find(x => x.id === id);
          if (!next) next = (await fetchFresh()).find(x => x.id === id);
          await sleep(400);
          if (!next) break;
          r = next;
          if (r.status === 'pending') { reached = true; break; }
          if (r.status === startStatus) break; // חזר להתחלה בלי לעבור באפור
        }
        if (reached) { done++; log(out, `${label}: הועבר ל"יישלח"`); }
        else log(out, `${label}: לא הצלחתי להגיע ל"יישלח" (מצב נוכחי: ${STATUS_HE[r.status] || r.status}). כדאי לבדוק ידנית.`, 'oh-bad');
      }
      log(out, 'מאמת…');
      const after = await fetchFresh();
      const ok = ids.filter(id => after.find(x => x.id === id)?.status === 'pending').length;
      log(out, `הסתיים: ${ok} מתוך ${ids.length} במצב "יישלח". הדף יתרענן בעוד רגע.`, ok === ids.length ? 'oh-good' : 'oh-bad');
      setTimeout(() => (location.href = 'day.php?date=' + date), 2500);
    } catch (e) {
      log(out, 'שגיאה: ' + e.message, 'oh-bad');
    }
  }

  async function sendSmsBatch(ids, tpl, out) {
    if (!ids.length) return alert('לא נבחרו תורים');
    if (!tpl) return alert('אין תוכן הודעה');
    const rows = parse(document).filter(r => ids.includes(r.id));
    const sendable = rows.filter(r => mobileOf(r));
    if (!sendable.length) return alert('לאף אחד מהנבחרים אין טלפון נייד');
    const sample = render(tpl, sendable[0]);
    if (!confirm(`לשלוח SMS ל-${sendable.length} מטופלים?` +
      (rows.length - sendable.length ? `\n(${rows.length - sendable.length} בלי טלפון נייד — ידולגו)` : '') +
      `\n\nדוגמה:\n${sample}\n\nכל הודעה כרוכה בתשלום.`)) return;
    out.replaceChildren();
    const cal = calUser();
    let ok = 0;
    for (const r of sendable) {
      try {
        const body = new URLSearchParams({ calendar: cal, phone: mobileOf(r), content: render(tpl, r), event_id: r.id });
        const res = await fetch('send_sms_handler.php', {
          method: 'POST', credentials: 'same-origin',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'X-Requested-With': 'XMLHttpRequest' },
          body
        });
        let j = null; try { j = await res.json(); } catch (_) {}
        if (j && j.success === true) { ok++; log(out, `${fmt(r.start)} ${r.name}: נשלח`); }
        else log(out, `${fmt(r.start)} ${r.name}: נכשל`, 'oh-bad');
      } catch (e) {
        log(out, `${fmt(r.start)} ${r.name}: שגיאה ${e.message}`, 'oh-bad');
      }
      await sleep(700);
    }
    log(out, `הסתיים: ${ok} מתוך ${sendable.length} נשלחו.`, ok === sendable.length ? 'oh-good' : 'oh-bad');
  }

  function templateSelect(textarea, onPick) {
    const sel = el('select', { class: 'oh-select' }, el('option', { value: '' }, '— בחר תבנית או כתוב חופשי —'));
    document.querySelectorAll('#sms_template option').forEach(o => {
      const t = o.getAttribute('data-template');
      if (t) sel.append(el('option', { value: t }, o.textContent.trim()));
    });
    sel.onchange = () => { if (sel.value) textarea.value = sel.value; onPick && onPick(); };
    return sel;
  }

  // ---------- לשונית וואטסאפ ----------
  (function buildWa() {
    let list = { selected: () => [] };
    const listHolder = el('div');
    const out = logBox();
    const runBtn = el('button', { class: 'oh-primary' }, 'שלח שוב וואטסאפ');
    const inclConfirmed = el('input', { type: 'checkbox' });
    inclConfirmed.checked = true;
    inclConfirmed.onchange = () => refresh();
    const range = rangeControls(refresh);
    const ELIGIBLE = () => (inclConfirmed.checked ? ['sent', 'confirmed'] : ['sent']);

    function refresh() {
      const [a, b] = range.get();
      const rows = parse(document).filter(r => ELIGIBLE().includes(r.status) && r.start >= a && r.start <= b);
      list = listView(rows, true);
      listHolder.replaceChildren(list.wrap);
      runBtn.textContent = `שלח שוב וואטסאפ (${rows.length})`;
    }

    runBtn.onclick = async () => {
      const ids = list.selected();
      if (!ids.length) return alert('לא נבחרו תורים');
      if (!confirm(`להחזיר ${ids.length} תורים למצב "יישלח"?\nהמערכת תשלח אליהם וואטסאפ תוך כדקה.`)) return;
      runBtn.disabled = true;
      try { await resendWhatsApp(ids, ELIGIBLE(), out); } finally { runBtn.disabled = false; }
    };

    bodyWa.append(
      el('div', { class: 'oh-hint' }, 'מוצגים תורים שהוואטסאפ כבר נשלח אליהם. תורים במצב "לא תישלח" (לבן) לא נכללים.'),
      range.box,
      el('label', { class: 'oh-row' }, inclConfirmed, ' כולל מי שכבר אישר (V)'),
      listHolder, runBtn, out);
    range.setRange(range.base(), range.base() + 60);
  })();

  // ---------- לשונית SMS ----------
  (function buildSms() {
    let list = { selected: () => [] };
    const listHolder = el('div');
    const out = logBox();
    const hideConfirmed = el('input', { type: 'checkbox' });
    const range = rangeControls(refresh);
    hideConfirmed.onchange = refresh;

    const tplSel = el('select', { class: 'oh-select' }, el('option', { value: '' }, '— בחר תבנית או כתוב חופשי —'));
    document.querySelectorAll('#sms_template option').forEach(o => {
      const t = o.getAttribute('data-template');
      if (t) tplSel.append(el('option', { value: t }, o.textContent.trim()));
    });
    const text = el('textarea', { class: 'oh-text', rows: '5', placeholder: 'תוכן ההודעה. אפשר להשתמש ב-{hour} {name} {date}' });
    tplSel.onchange = () => { if (tplSel.value) text.value = tplSel.value; preview(); };
    text.oninput = preview;
    const prev = el('div', { class: 'oh-preview' });
    const sendBtn = el('button', { class: 'oh-primary' }, 'שלח SMS');

    function refresh() {
      const [a, b] = range.get();
      const rows = parse(document).filter(r => r.start >= a && r.start <= b && (!hideConfirmed.checked || r.status !== 'confirmed'));
      list = listView(rows, false);
      listHolder.replaceChildren(list.wrap);
      list.wrap.addEventListener('change', preview);
      preview();
    }
    function preview() {
      const ids = list.selected();
      const r = parse(document).find(x => x.id === ids[0]);
      sendBtn.textContent = `שלח SMS (${ids.length})`;
      prev.textContent = r && text.value.trim() ? 'דוגמה: ' + render(text.value, r) : '';
    }

    sendBtn.onclick = async () => {
      const ids = list.selected();
      sendBtn.disabled = true;
      try { await sendSmsBatch(ids, text.value.trim(), out); } finally { sendBtn.disabled = false; }
    };

    bodySms.append(
      range.box,
      el('label', { class: 'oh-row' }, hideConfirmed, ' הסתר מי שכבר אישר'),
      listHolder,
      el('div', { class: 'oh-row' }, tplSel),
      text, prev, sendBtn, out);
    range.setRange(range.base(), range.base() + 60);
  })();

  // ---------- תיבות סימון ליד השם, בתוך היומן ----------
  const picked = new Set();
  const barCount = el('span', { class: 'oh-bar-count' });
  const btnWa = el('button', { class: 'oh-bar-btn oh-bar-wa' }, '🔁 וואטסאפ מחדש');
  const btnSms = el('button', { class: 'oh-bar-btn oh-bar-sms' }, '✉ SMS');
  const btnClear = el('button', { class: 'oh-bar-btn oh-bar-clear' }, 'נקה בחירה');
  const barOut = logBox();
  const smsText = el('textarea', { class: 'oh-text', rows: '4', placeholder: 'תוכן ההודעה. אפשר להשתמש ב-{hour} {name} {date}' });
  const smsPrev = el('div', { class: 'oh-preview' });
  const updPrev = () => {
    const r = parse(document).find(x => picked.has(x.id));
    smsPrev.textContent = r && smsText.value.trim() ? 'דוגמה: ' + render(smsText.value, r) : '';
  };
  smsText.oninput = updPrev;
  const smsSend = el('button', { class: 'oh-primary' }, 'שלח SMS');
  const smsBox = el('div', { class: 'oh-bar-smsbox oh-hidden' }, templateSelect(smsText, updPrev), smsText, smsPrev, smsSend);
  const bar = el('div', { class: 'oh-bar oh-hidden' },
    el('div', { class: 'oh-bar-top' }, barCount, btnWa, btnSms, btnClear), smsBox, barOut);
  document.body.append(bar);

  function updateBar() {
    barCount.textContent = `נבחרו ${picked.size}`;
    smsSend.textContent = `שלח SMS (${picked.size})`;
    bar.classList.toggle('oh-hidden', picked.size === 0);
    updPrev();
  }

  btnClear.onclick = () => {
    picked.clear();
    document.querySelectorAll('input.oh-rowcb').forEach(c => (c.checked = false));
    smsBox.classList.add('oh-hidden');
    barOut.replaceChildren();
    updateBar();
  };
  btnSms.onclick = () => { smsBox.classList.toggle('oh-hidden'); updPrev(); };
  btnWa.onclick = async () => {
    const ids = [...picked];
    const rows = parse(document).filter(r => picked.has(r.id));
    const white = rows.filter(r => r.status === 'none').length;
    if (!confirm(`לשלוח שוב וואטסאפ ל-${ids.length} תורים?` +
      (white ? `\n(${white} מהם במצב "לא תישלח" — התזכורת שלהם תופעל)` : '') +
      '\nהמערכת תשלח תוך כדקה.')) return;
    btnWa.disabled = true;
    try { await resendWhatsApp(ids, ['sent', 'confirmed', 'none'], barOut); } finally { btnWa.disabled = false; }
  };
  smsSend.onclick = async () => {
    smsSend.disabled = true;
    try { await sendSmsBatch([...picked], smsText.value.trim(), barOut); } finally { smsSend.disabled = false; }
  };

  function injectCheckboxes() {
    document.querySelectorAll('td.event_status[data-id]').forEach(td => {
      const tr = td.closest('tr');
      if (!tr || !tr.querySelector('td.event_confirm a[href*="evConfUpdate"]')) return;
      const nameTd = tr.querySelector('td.event_name');
      if (!nameTd || nameTd.querySelector('input.oh-rowcb')) return;
      const id = td.getAttribute('data-id');
      const cb = el('input', { type: 'checkbox', class: 'oh-rowcb', title: 'בחר לשליחה' });
      cb.checked = picked.has(id);
      // שלא ייפתח חלון עריכת התור בלחיצה על התיבה
      ['click', 'mousedown', 'mouseup', 'dblclick', 'contextmenu'].forEach(ev => cb.addEventListener(ev, e => e.stopPropagation()));
      cb.addEventListener('change', () => { cb.checked ? picked.add(id) : picked.delete(id); updateBar(); });
      nameTd.prepend(cb);
    });
  }
  injectCheckboxes();
  let injTimer;
  new MutationObserver(() => { clearTimeout(injTimer); injTimer = setTimeout(injectCheckboxes, 300); })
    .observe(document.body, { childList: true, subtree: true });
})();

