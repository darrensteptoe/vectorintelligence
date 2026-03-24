# Campaign Finance Engine (CFE) — Component Copy Pack

## Purpose
This document supplies implementation-ready copy for page sections, cards, panels, drawers, modals, banners, helper text, empty states, and interpretation blocks. Codex should treat this as product language, not placeholder copy.

## Product-wide voice
- Calm, literate, campaign-native.
- Never breathless or startup-fluffy.
- Useful to a finance director at 11:30 p.m. and readable to a candidate at 7:00 a.m.
- Warnings should be clear without melodrama.
- Interpretations should name the practical implication, not merely restate the metric.
- Where uncertainty exists, say so plainly.

## Global chrome

### App title
**Campaign Finance Engine**

### App subtitle
**Budget, timing, fundraising, and finance execution control for the full campaign.**

### Main navigation labels
- Overview
- Budget Plan
- Spend Timeline
- Funding Path
- Activity
- Donor Intelligence
- Expenditure Intelligence
- Reports
- Manual
- Settings

### Universal search placeholder
**Search budget lines, donors, events, vendors, or report sections**

### Global info banner
**Use this system to answer what the campaign needs to fund, when those costs hit, and whether the current finance program is strong enough to support the plan.**

## Overview page

### Header block
Eyebrow: **Campaign Finance Engine**
Title: **Campaign finance control for the whole campaign**
Body: Use this page to see whether the active budget plan is realistic, whether cash is expected to arrive in time, and whether the campaign is on track to support its next major spending window.

### Hero cards

#### Card: Total Campaign Budget
Title: **Total Campaign Budget**
Helper text: The full projected campaign budget across all major domains, including field, staff, consultants, communications, compliance, operations, and reserve.

Interpretation:
- Healthy view: **The current budget is within a plausible range for this race and is being phased in a workable way.**
- Caution view: **The current budget may still be viable, but one or more domains are front-loaded or thinly supported.**
- Stress view: **The current budget exceeds what the active finance path can comfortably support. The issue is not only total size, but timing.**

#### Card: Total Raise Required
Title: **Total Raise Required**
Helper text: The amount the campaign must raise to support the active budget plan, current commitments, and reserve discipline.

Interpretation:
- **This is not a vanity target. It is the amount needed to safely carry the selected plan.**

#### Card: Current Funding Status
Title: **Current Funding Status**
Helper text: A practical assessment of how much of the active campaign plan is supportable under current cash, projected receipts, and reserve conditions.

#### Card: Reserve Status
Title: **Reserve Status**
Helper text: Whether the campaign is preserving enough operating room to absorb normal slippage without destabilizing the plan.

#### Card: Field Funding Signal
Title: **Field Funding Signal**
Helper text: A bridge read showing whether the selected field posture is safely supported by the active finance path.

### Overview interpretation panel
Title: **How to read this page**
Body: Start with three questions. First, is the campaign trying to fund a credible plan? Second, is the current raise pace strong enough to support that plan? Third, are there upcoming cost windows where timing will matter more than totals? When one of those answers weakens, the remedy is usually a budget adjustment, a finance execution adjustment, or both.

### Overview empty state
Title: **No active campaign budget yet**
Body: Build the budget first. The rest of the system gets sharper once the campaign's actual cost structure is defined across field, staff, consultants, communications, compliance, and reserve.
Primary action: **Build Budget Plan**

## Budget Plan page

### Header block
Title: **Budget Plan**
Body: Build the campaign budget in the same way a serious operator thinks about it: by domain, by timing, by priority, and by whether each cost is essential or optional.

### Top helper banner
**A campaign budget is only useful if it is phased over time. Enter each line with timing in mind, not just totals.**

### Budget line drawer
Fields and helper copy:
- **Budget domain** — Choose the broad area of campaign spending this line belongs to.
- **Budget line title** — Use a name a campaign team would recognize immediately.
- **Planned amount** — Enter the amount this line is expected to require under the active plan.
- **Start date** — When this cost begins to matter.
- **End date** — When this cost is expected to conclude or stop pressuring cash.
- **Phase** — Use phases to keep timing readable at a glance.
- **Priority** — Distinguish between mission-critical and more flexible lines.
- **Required / Optional** — Required lines support the minimum viable campaign. Optional lines strengthen the campaign but may need to wait.
- **Notes** — Capture the operational logic behind the line, not just reminders.

### Budget line status chips
- Required
- Optional
- Fixed
- Variable
- Field Bridge
- Needs Review
- Historical Outlier
- Unfunded Window

### Budget plan interpretation box
Title: **What makes a good budget plan**
Body: A strong budget plan is not merely detailed. It is timed, prioritized, and honest about what is essential. If the budget is doing too much too early, the campaign will feel stable on paper and stressed in practice.

### Budget plan empty state
Title: **No budget lines yet**
Body: Add the campaign's major cost domains first. Start with field, payroll, consultants, compliance, communications, and reserve before filling in secondary lines.

## Spend Timeline page

### Header block
Title: **Spend Timeline**
Body: See when campaign costs begin, ramp, peak, and taper. This page is about timing pressure, not just total budget size.

### Timeline cards
- **Next 30 Days Pressure**
- **Next 60 Days Pressure**
- **Peak Spend Window**
- **Reserve Floor Ahead**

Helper text:
- Next 30 Days Pressure: **The amount of campaign cost expected to press on cash in the next month.**
- Peak Spend Window: **The period where the campaign's cost curve is at its highest and timing errors become more expensive.**

### Interpretation panel
Title: **Why timing matters**
Body: Campaigns often fail financially not because they lacked a theoretical path, but because costs accelerated before receipts were safely in hand. This page helps you see those pressure points before they become last-minute problems.

### Timeline warning callout
Title options:
- **The budget is becoming more front-loaded**
- **Upcoming commitments are stacking too closely**
- **Peak spend window is approaching without enough cushion**

Body template: The campaign can still support the active plan if execution improves, but the margin for delay is narrowing. Review reserve protection, near-term raise targets, and any optional lines that can be deferred cleanly.

## Funding Path page

### Header block
Title: **Funding Path**
Body: This is the campaign's working raise path: how much must be raised overall, how much must arrive by each checkpoint, and whether the active pace is strong enough to support the plan.

### Core cards
- **Raise Required**
- **Raised to Date**
- **Gap to Safe Funding**
- **Gap to Competitive Funding**
- **Monthly Raise Target**
- **Weekly Raise Target**

Helper text:
- Gap to Safe Funding: **How far the campaign is from safely supporting the active budget plan at the next major cost window.**
- Gap to Competitive Funding: **How far the campaign is from a more fully supported version of the plan that leaves less room for avoidable stress.**

### Channel target panel
Title: **Channel Targets**
Intro: The total target is not enough by itself. The campaign also needs a realistic channel mix so the work is distributed across call time, meetings, events, online activity, and committee support.

Subsection labels:
- Call Time Target
- Major Donor Target
- Event Target
- Online Target
- Committee Target
- Other Support Target

### Funding path interpretation block
Title: **How to use the path**
Body: The path is the campaign's operating finance plan, not a motivational slogan. If the current pace is weak, the right response is to change activity volume, change the budget, or change both. Do not carry a path that the campaign is not operationally prepared to execute.

### Funding path empty state
Title: **No active path yet**
Body: Generate a funding path after the budget, timeline, and current campaign condition have been entered.

## Activity page

### Header block
Title: **Finance Activity**
Body: Track the work that actually produces the money. This page should feel like an operating desk, not a generic calendar.

### Section: This Week
Title: **This Week's Finance Work**
Intro: Focus on the activity most likely to move receipts, resolve commitments, and keep the path from slipping.

Cards:
- Upcoming Call Time
- Donor Meetings
- Fundraisers
- Follow-Up Queue
- Filing Pushes

### Call time session card
Fields:
- Planned hours
- Completed hours
- Ask count
- Pledge total
- Received total
- Follow-up needed

Helper text: **A good call time record is specific enough to improve the next session, not merely to prove the session happened.**

### Event card
Fields:
- RSVP target
- RSVP actual
- Ask target
- Pledge total
- Received total
- Event cost
- Net yield
- Follow-up required

Interpretation note: **Event gross can flatter weak programs. Net yield, follow-up quality, and conversion speed matter more.**

### Activity empty state
Title: **No finance activity scheduled**
Body: Build the next week of finance work before the path slips. Start with call time, top donor meetings, and any event or filing push that will shape near-term receipts.
Primary action: **Schedule Activity**

## Donor Intelligence page

### Header block
Title: **Donor Intelligence**
Body: Understand where support is coming from, how broad it is, and whether the campaign is drawing from a stable and politically useful donor base.

### Geography panel
Title: **Donor Geography**
Intro: Geography helps show where the campaign's money is concentrated and whether that concentration is strategically healthy.

Cards:
- Top ZIP by Dollars
- Top ZIP by Donor Count
- In-District Share
- Outside-Network Share

Interpretation note: **ZIP-level patterns are useful for concentration and direction, but they are not the same as exact turf or precinct-level support.**

### Occupation panel
Title: **Occupation and Industry**
Intro: Use this section to understand the donor base by work and sector. Treat occupation strings carefully and keep uncertainty visible where classification is weak.

Cards:
- Top Occupation by Dollars
- Top Occupation by Count
- Largest Industry Family
- Unclassified Share

### Donor concentration panel
Title: **Concentration and Breadth**
Body: A campaign can raise impressive totals from a narrow base and still have a fragile finance structure. Breadth matters. Repeat support matters. In-district support matters. This section helps you see whether the base is deep, broad, narrow, or overdependent on a small cluster.

### Donor intelligence empty state
Title: **Not enough donor data yet**
Body: Donor intelligence sharpens as contribution records are imported and classified. Start by ingesting contribution history or connecting the current campaign's records.

## Expenditure Intelligence page

### Header block
Title: **Expenditure Intelligence**
Body: See where the money is going, whether actual spending matches the plan, and how the campaign's mix compares with what this kind of race usually requires.

### Spend mix cards
- Field Share
- Paid Communications Share
- Payroll Share
- Consultant Share
- Compliance / Ops Share
- Reserve Drawdown

Interpretation block:
Title: **How to read spending mix**
Body: A spending mix is not good or bad in the abstract. It becomes useful when compared to the campaign's strategy, its timing, and the historical profile of similar races. This page should help leadership see whether spending is disciplined, top-heavy, or misaligned with the stated plan.

### Vendor panel
Title: **Vendor Concentration**
Body: Vendor concentration can be acceptable when it reflects a deliberate plan, but it becomes a risk when too much of the campaign's flexibility depends on a narrow stack of providers or high-overhead relationships.

### Expenditure empty state
Title: **No expenditure data available yet**
Body: Import historical expenditure records or current-cycle spending to begin evaluating mix, vendor concentration, and category pressure.

## Reports page

### Header block
Title: **Reports**
Body: Generate clean reports for candidates, managers, finance committees, and internal leadership without rewriting the same analysis every week.

### Report picker descriptions
- **Weekly Finance Memo** — A concise operating summary of pace, activity, receipts, and next steps.
- **Candidate Brief** — The candidate's immediate finance priorities and asks.
- **Finance Committee Memo** — Accountability and opportunity view for committee members.
- **Budget Health Report** — Full budget, reserve, and timing status.
- **Donor Intelligence Memo** — Geography, occupations, concentration, and support structure.
- **Leadership Risk Brief** — What is most likely to destabilize the finance plan next.

### Report generation empty state
Title: **No report selected**
Body: Choose a report type to preview the sections, tone, and expected outputs before generating the final version.

## Manual page

### Header block
Title: **Manual**
Body: This manual is designed to help campaigns use the system intelligently, not merely navigate the interface. It explains what the measures mean, what strong and weak conditions look like, and what to do next.

### Manual section intros
- **Budget Basics** — Learn how to build a budget that reflects campaign reality rather than wishlist thinking.
- **Funding Path** — Understand how raise targets, checkpoints, and reserve logic work together.
- **Finance Activity** — Learn how the path translates into call time, events, meetings, and follow-up.
- **Donor Intelligence** — See what donor geography and occupation signals can and cannot tell you.
- **Risk and Warnings** — Learn how to respond when the system moves from healthy to watch to stress conditions.

## Shared components

### Status chip helper copy
When hovered:
- On Path: **The campaign is broadly aligned with the active finance path.**
- Watch: **The campaign is still recoverable, but flexibility is narrowing.**
- Off Path: **The campaign is behind the active path in a way that will affect upcoming commitments if left unchanged.**
- Healthy: **Operating cushion is currently workable.**
- Tight: **The campaign still has room to operate, but less than preferred.**
- At Risk: **The campaign is below a safe buffer for the next spending window.**

### Confidence tooltip
**Confidence reflects how much of this view is directly reported, how much has been standardized, and how much is modeled. Lower confidence does not mean the view is useless. It means it should be read with more care.**

### Unknown classification tooltip
**Unknown means the system does not currently have enough signal to classify this record responsibly. Unknown is better than false precision.**

### Historical benchmark tooltip
**Historical benchmarks are guides to realism, not commands. They help the campaign understand what similar races looked like and where the active plan sits relative to them.**

## Modals and confirmations

### Rebuild funding path modal
Title: **Rebuild funding path?**
Body: Rebuilding the path will update targets, reserve logic, and checkpoint requirements using the current budget, current condition, and active assumptions. Existing activity records will remain, but their relationship to the prior path will be historical.
Confirm: **Rebuild Path**
Cancel: **Keep Current Path**

### Import field snapshot modal
Title: **Import field budget demand from FPE**
Body: This will add the selected field demand snapshot into the campaign's budget and timing view as bridge-derived input. It does not modify FPE and does not overwrite existing finance assumptions outside the imported field posture.
Confirm: **Import Snapshot**
Cancel: **Cancel**

### Override classification modal
Title: **Apply manual classification**
Body: Manual overrides take precedence over auto-classification. The raw imported value will still be preserved for traceability.
Confirm: **Apply Override**
Cancel: **Cancel**

## Error and validation language

### Generic load error
Title: **This view could not be loaded**
Body: The system could not assemble the required records for this view. Check source availability, campaign context, and any recent imports, then try again.

### Missing path prerequisite
Title: **Funding path cannot be generated yet**
Body: The path requires an active budget plan, current campaign condition, and a valid timeline. Fill in the missing pieces and try again.

### Missing bridge snapshot
Title: **No field snapshot selected**
Body: The bridge view is empty until a valid FPE field-demand snapshot has been imported.

### Report generation issue
Title: **Report preview is incomplete**
Body: One or more sections could not be assembled because required snapshot data is missing. Review the report notes, then refresh the underlying path or intelligence views.

## Footer language
**Campaign Finance Engine helps campaigns connect budget, timing, fundraising, and operational reality. It should be used to clarify judgment, not replace it.**
