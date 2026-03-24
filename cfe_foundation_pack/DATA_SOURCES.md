# Campaign Finance Engine (CFE) — Data Sources

## Source philosophy
CFE should prioritize official, stable, publicly accessible sources first. Third-party sources can enrich but should not become fragile single points of failure.

## Source classes
- Official public campaign finance sources
- Public enrichment sources (census/labor)
- Internal campaign-entered data
- FPE bridge snapshots
- Manual review and override data

## Campaign finance evidence sources
### Federal Election Commission (FEC)
Use for:
- committee records
- itemized contributions
- expenditures/disbursements
- cash on hand
- debts
- filing periods
- employer/occupation where available
- contributor city/state/ZIP

Role in CFE:
- federal benchmarking
- donor and spend intelligence
- structure reference for ingest layer

### Illinois State Board of Elections
Use for:
- committee records
- contributions
- expenditures
- cash/debt context where available
- filing windows
- state/local benchmarking for Illinois-first build

Role in CFE:
- V1 core public source for Illinois races

## Public enrichment sources
### Census / ACS
Use for:
- ZIP/ZCTA socioeconomic context
- household income context
- education context
- workforce composition context

Role in CFE:
- donor geography enrichment
- donor class profile context

### Bureau of Labor Statistics (BLS)
Use for:
- occupation wage benchmarks
- industry and occupational family context

Role in CFE:
- occupation/industry interpretation layer
- donor base socioeconomic framing

## Internal campaign-entered sources
Use for:
- budget lines
- planned spending
- events
- call time
- asks
- pledges
- follow-up tasks
- notes
- campaign phase assumptions

## FPE bridge source
Use for:
- projected field budget demand
- month-by-month field spend curve
- field staffing ramp timing
- field scenario label and uncertainty

## Manual review / override source
Use for:
- occupation corrections
- vendor corrections
- spend category corrections
- unknown resolution
- local strategic labels

## Data-source trust labels
Each source-derived element should be labelable as:
- Official reported source
- Campaign-entered source
- Bridge-derived source
- Standardized from source
- Estimated/model-derived
- Manually overridden
