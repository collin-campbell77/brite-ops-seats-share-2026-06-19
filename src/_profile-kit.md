# Brite Nites — Operational Seat Profile Kit

You are drafting a **position profile** web page for one operational seat at Brite Nites (a Christmas-light installation company). Audience = a candidate, new hire, or the team. Neutral third person. NOT aimed at any individual; no "you", no draft/meta language.

## Your job
1. Read the canonical handbook content for your assigned role (paths below) under `/Users/collincampbell/handbook`. Pull real responsibilities, daily workflow, pay model, tools, and cadence from there.
2. Reconcile it with the **House Facts** below (the current org model — these win over any stale handbook line).
3. Produce ONE self-contained HTML file using the **exact `<style>` block and section structure** in this kit (so all profiles look identical). Only the content changes.
4. Write it to the output path given in your task prompt. Return a 3-4 line summary of what you built and any conflicts you found between the handbook and the House Facts.

## Output rules
- Start the file with `<title>…</title>` then the `<style>` block verbatim, then the body content. NO `<!doctype>`, `<html>`, `<head>`, or `<body>` tags.
- Keep prose tight and skimmable. Use the tables/cards/timeline patterns from the structure below.
- If the role is seasonal, say so in the facts strip. If a section doesn't apply to the role, drop it (don't pad).

## House Facts (current org model — authoritative)
- **Company:** Brite Nites — installs, services, and strikes (removes) Christmas-light displays. Residential + a growing commercial side.
- **Season:** the year runs Peak/Install season (≈Sept→late Dec) → in-season Service tail → **Strike** season (removals, Jan, hard deadline Jan 31) → Feb audit/warehouse → March close-out. Most field seats are **seasonal**.
- **Org ladder (reporting order):** Director of Operations (Mike Menendez) → Commercial Operations Manager (Collin) → RDC (Regional Dispatch Coordinator) → AM (Area Manager) → ST (Senior Tech) → JT (Junior Tech) → RT (Repair Tech) → QP (Quality Pro) → WA (Warehouse) → LR (Light Roller). Sales is a **separate team**.
- **AM = Area Manager** (NOT Account Manager). The **in-field boss**: owns the customer account, supervises field crews and handles on-site blockers, owns the territory's financial result, makes the damage/negligence judgment, does early-season quality checks, and owns process/workflow decisions. A **Territory Manager (TM)** is the same seat stretched over a larger/under-developed area — a temporary stopgap, not a higher tier.
- **RDC = Regional Dispatch Coordinator:** seasonal, remote. Runs the dispatch board across 3–5 areas (≤~$7M), the first-line customer/operational phone, the scheduling gate with Sales, and the end-of-season strike reconciliation. "RDC runs the board; the AM owns the territory." Peer to the AM; reports to the Director of Operations.
- **ST = Senior Tech:** crew lead + installer. Earns **production pay = a share of installed revenue**, contingent on completing the **full install + strike cycle** AND meeting install-accuracy standards (caught in QP checks / strike audit). Leads a crew of JT(s).
- **JT = Junior Tech:** installer working on an ST's crew; attached to the crew for the day (which is how labor cost per job is captured).
- **RT = Repair Tech:** repairs/services failed displays on a pre-planned route, with safety/customer-escalation overrides for same-day dispatch. Part of the warehouse crew during strike.
- **QP = Quality Pro:** inspector model. Owns **install accuracy** — verifies the design was completed correctly; target is a check within 48h of install once caught up; ranks/scores crews. Part of the warehouse crew during strike.
- **WA = Warehouse:** stages the next day's product against the schedule (job prep/pulling) and processes returns during strike. Procurement itself is Supply Chain (not WA).
- **LR = Light Roller:** seasonal strike-season role/contractor — rolls/removes light strands and helps the warehouse crew process returns; paid per the light-roller-management model.
- **Pay/policy:** describe pay *structure* at a high level only (e.g., "production-based," "seasonal"). Do NOT invent dollar figures beyond what's in the handbook or House Facts.

## Handbook content locations (read these for your role; search nearby if needed)
- AM (Area Manager): `training/operations/am-role-for-tms.md`, `training/operations/role-training.md`; AM learning-track content if present.
- ST (Senior Tech): `training/operations/st-role-orientation.md`, `training/operations/lighting-technician-introduction/`
- JT (Junior Tech): `training/operations/jt-role-orientation.md`, `training/operations/lighting-technician-introduction/`
- RT (Repair Tech): search `training/operations/` for repair-tech / repair content; reuse install context from lighting-technician-introduction.
- QP (Quality Pro): `training/operations/qp-technician-training/`
- WA (Warehouse): `training/operations/warehouse-associate-training/`
- LR (Light Roller): `training/operations/light-roller-management/`, `training/operations/utah-light-rolling/`

## EXACT <style> block to reuse verbatim
```html
<title>ROLE NAME — Position Profile</title>
<style>
  :root{
    --ink:#16202e; --ink-soft:#41506a; --ink-faint:#6b7a93;
    --line:#dfe4ec; --line-soft:#eceff4;
    --bg:#f6f8fb; --card:#ffffff;
    --cool:#0e7490; --cool-bg:#e6f5f8; --cool-line:#bfe4ec;
    --warm:#b45309; --warm-bg:#fdf2e3; --warm-line:#f3dcb4;
    --good:#15803d;
  }
  *{box-sizing:border-box}
  body{margin:0;background:var(--bg);color:var(--ink);
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    line-height:1.55;-webkit-font-smoothing:antialiased}
  .wrap{max-width:980px;margin:0 auto;padding:0 20px 80px}
  header.hero{background:linear-gradient(135deg,#0c2233,#123a4a 60%,#0e7490);color:#eaf6fa;
    padding:42px 20px 36px;border-bottom:3px solid #0a1a26}
  .hero-in{max-width:980px;margin:0 auto;padding:0}
  .eyebrow{font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#7fd3e4;font-weight:700;margin:0 0 8px}
  h1{font-size:clamp(28px,5vw,42px);line-height:1.08;margin:0 0 12px;font-weight:800;letter-spacing:-.02em}
  .lede{font-size:clamp(15px,2.4vw,18px);color:#cfe9f1;max-width:62ch;margin:0}
  .facts{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}
  .fact{background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.18);border-radius:10px;
    padding:9px 13px;font-size:13px;color:#eaf6fa}
  .fact b{display:block;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:#7fd3e4;font-weight:700;margin-bottom:1px}
  section{margin-top:38px}
  h2{font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:var(--cool);font-weight:800;
    margin:0 0 14px;padding-bottom:8px;border-bottom:2px solid var(--line)}
  h3{font-size:18px;margin:22px 0 8px;font-weight:700;letter-spacing:-.01em}
  p{margin:0 0 12px}
  .card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:20px 22px;
    box-shadow:0 1px 2px rgba(20,32,46,.04)}
  .pull{font-size:19px;font-weight:600;color:var(--ink);line-height:1.4;border-left:4px solid var(--cool);
    padding:4px 0 4px 16px;margin:6px 0 18px}
  .pull em{font-style:normal;color:var(--cool)}
  .grid2{display:grid;grid-template-columns:1fr 1fr;gap:16px}
  @media(max-width:680px){.grid2{grid-template-columns:1fr}}
  .scroll{overflow-x:auto;-webkit-overflow-scrolling:touch;border-radius:12px;border:1px solid var(--line)}
  table{border-collapse:collapse;width:100%;font-size:14px;background:var(--card);min-width:520px}
  th,td{text-align:left;padding:11px 14px;border-bottom:1px solid var(--line-soft);vertical-align:top}
  thead th{background:#eef2f7;color:var(--ink-soft);font-size:11px;letter-spacing:.06em;text-transform:uppercase;font-weight:700}
  tbody tr:last-child td{border-bottom:none}
  ul.clean{margin:8px 0 0;padding-left:20px}
  ul.clean li{margin-bottom:7px}
  .note{font-size:13px;color:var(--ink-faint)}
  ol.flow{margin:0;padding:0;list-style:none;counter-reset:step}
  ol.flow li{position:relative;padding:0 0 14px 40px;counter-increment:step}
  ol.flow li:before{content:counter(step);position:absolute;left:0;top:0;width:26px;height:26px;border-radius:50%;
    background:var(--cool);color:#fff;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center}
  ol.flow li:not(:last-child):after{content:"";position:absolute;left:12.5px;top:28px;bottom:0;width:1.5px;background:var(--line)}
  ol.flow b{display:block;font-size:15px}
  ol.flow span{font-size:13.5px;color:var(--ink-soft)}
  .roles dt{font-weight:700;margin-top:12px}
  .roles dd{margin:2px 0 0;color:var(--ink-soft);font-size:14px}
  footer{margin-top:48px;padding-top:18px;border-top:1px solid var(--line);font-size:13px;color:var(--ink-faint)}
</style>
```

## Section structure to follow (mirror the RDC profile)
1. `<header class="hero">` — eyebrow "Position Profile", `<h1>` full role name, a one-sentence `.lede` describing the seat, and a `.facts` strip (Type [seasonal/year-round], Reports to, Direct reports, Peer to / Works under, plus 1-2 role-specific facts).
2. `<section>` **Purpose of the role** — a `.card` with a `.pull` one-line essence and 2-3 short paragraphs.
3. `<section>` **Reporting & compensation** — a `.grid2` of two `.card`s (Where it sits / Compensation), using `ul.clean`.
4. `<section>` **Core responsibilities** (or "What the role does") — a `.card` with `ul.clean`, grounded in the handbook workflow.
5. `<section>` **A day / season in the role** — use `ol.flow` for a daily or seasonal rhythm if the handbook supports one; otherwise a `.scroll` table of the seasonal arc.
6. `<section>` **Who the role works with** — a `.card.roles` `<dl>` naming the adjacent seats it touches.
7. `<footer>` — "ROLE NAME — position profile."

Wrap any wide table in `<div class="scroll">…</div>`.
