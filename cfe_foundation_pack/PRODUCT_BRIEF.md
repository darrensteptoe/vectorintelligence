# Campaign Finance Engine (CFE) — Product Brief

## Product name
**Campaign Finance Engine (CFE)**

## Product type
Standalone campaign budget, funding path, and finance execution system.

## Relationship to Field Path Engine (FPE)
CFE is the finance sibling to FPE.

- **FPE** models what the campaign plans to do on the ground and what that program requires operationally.
- **CFE** models what the campaign must spend across all major functions, when those costs hit, what must be raised to cover them, and whether the current finance program is sufficient to support the plan.

They remain architecturally separate but communicate through a narrow, explicit snapshot bridge.

## Core purpose
CFE turns:
- campaign budget planning
- historical campaign finance evidence
- current fundraising activity
- donor intelligence
- and FPE demand signals where applicable

into:
- a realistic total budget
- a timed funding requirement
- a fundraising path
- a finance execution plan
- practical warnings and reports
- and clear guidance on what is and is not safely fundable

## Central question
**What is this campaign trying to fund, when do those costs hit, how much money must be raised by each checkpoint, what does history say is realistic for this kind of race, and is the campaign on track to cover the plan?**

## Primary users
- Finance Director
- Candidate
- Campaign Manager
- Senior Consultant
- Treasurer / compliance-adjacent operator

## Secondary users later
- Finance Committee members
- Deputy finance staff
- Political / executive leadership
- Cross-app war room users

## What CFE is not
CFE is not:
- a generic bookkeeping tool
- a compliance filing replacement
- a generic donor CRM
- a generic scheduler
- a clone of NGP

It can touch those areas where useful, but only in support of its central mission: **budget-path planning and finance execution control**.

## Product pillars
1. **Campaign Budget Planning**
   - Model full campaign costs across all major domains.
2. **Spend Timing and Reserve Planning**
   - Show when cash is required and where pressure points appear.
3. **Historical Finance Intelligence**
   - Use disclosure history to benchmark realism, not to replace planning.
4. **Funding Path Generation**
   - Convert planned costs into raise targets, pacing, and checkpoint requirements.
5. **Finance Operations**
   - Track the work that produces the money: call time, meetings, events, pledges, follow-up.
6. **Donor and Expenditure Intelligence**
   - Explain who funds the campaign, from where, and where money is going.
7. **Reporting and Risk Control**
   - Turn engine outputs into consultant-grade briefings and warnings.

## Full budget scope
CFE should model all major campaign budget domains:
- Field Program
- Staff Payroll
- Consultants / Strategy
- Polling / Research
- Digital Program
- Paid Media
- Direct Mail
- Compliance / Legal / Accounting
- Office / Software / Operations
- Creative / Photo / Video
- Fundraising Event Costs
- Travel / Meals
- Printing / Signs / Literature
- Data / Voter File / Tools
- Contingency / Reserve

## Full output scope
CFE should produce:
- total projected campaign budget
- month-by-month spend schedule
- peak spend windows
- reserve requirements
- total raise target
- monthly and weekly raise targets
- checkpoint raise requirements
- channel targets
- planned vs actual finance activity summaries
- donor geography and occupation summaries
- expenditure mix diagnostics
- risk flags
- internal and candidate-facing reports
- bridge outputs back to FPE

## Core value proposition
A serious campaign should be able to use CFE to answer:
- What can we afford?
- What do we need to raise, and by when?
- What part of the plan is currently safe?
- What is not safe yet?
- Which finance activities are producing money?
- Where is support coming from?
- Are we tracking toward a credible budget for this race?
- What can leadership act on immediately?

## Strategic differentiator
The differentiator is not novelty theater. The differentiator is integrated planning quality:
- full campaign budget pathing
- timed funding logic
- evidence-based realism from disclosures
- finance execution tracking
- donor intelligence
- field-to-finance bridge
- consultant-grade reporting
- disciplined engine architecture

## V1 scope
CFE V1 should include:
- race and campaign setup
- full campaign budget builder
- spend timeline engine
- historical benchmark layer
- comparable race engine
- funding path engine
- finance activity/calendar layer
- call time and event tracking basics
- pledge pipeline
- donor ZIP analysis
- occupation classification
- expenditure categorization basics
- risk console
- core reporting pack
- FPE ↔ CFE bridge snapshot support

## Long-term vision
CFE becomes part of a larger ecosystem:
- FPE = field operations demand engine
- CFE = campaign budget and funding path engine
- legislative/public affairs engine = policy and influence intelligence engine
- future executive layer = cross-system strategic command surface
