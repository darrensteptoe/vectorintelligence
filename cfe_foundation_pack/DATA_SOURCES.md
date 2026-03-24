# Campaign Finance Engine (CFE) — Data Sources

## Source philosophy
Prioritize official, stable, publicly accessible sources first. Third-party sources can enrich the product but should not become fragile single points of failure.

## Source classes
- official public campaign finance sources
- public enrichment sources
- internal campaign-entered data
- FPE bridge snapshots
- manual review and override data

## Core public campaign finance sources
### Illinois State Board of Elections
Use for:
- committee records
- contributions
- expenditures
- filing periods
- cash / debt context where available

Role:
- primary V1 public source for Illinois races

### Federal Election Commission
Use for:
- committee records
- itemized contributions
- expenditures/disbursements
- cash on hand
- debts
- filing periods
- contributor occupation/employer where available
- contributor city/state/ZIP

Role:
- federal benchmark layer
- ingest reference structure
- future expansion source

## Public enrichment sources
### Census / ACS
Use for:
- ZIP/ZCTA socioeconomic context
- household income context
- education context
- workforce composition context

### Bureau of Labor Statistics
Use for:
- occupation wage benchmarks
- industry and occupational family context

## Internal campaign-entered sources
Use for:
- budget lines
- planned spending
- campaign phase assumptions
- finance activities
- asks
- pledges
- follow-up tasks
- operator notes

## FPE bridge source
Use for:
- projected field budget demand
- field monthly spend curve
- staffing ramp timing
- field scenario label and uncertainty

## Data labeling rule
Every visible output should distinguish:
- Reported
- Standardized
- Modeled
