# Campaign Finance Engine (CFE) — Classification Rules

## Classification philosophy
Classification is a product feature, not cleanup work. It should preserve uncertainty, support manual review, and improve over time.

## Resolution order
manual override > exact rule > fuzzy rule > unknown

## Status labels
- Confirmed
- Auto-classified
- Needs review
- Unknown
- Excluded

## Confidence labels
- High
- Medium
- Low

## Applies to
- donor occupation
- donor industry
- employer sector
- vendor category
- spend category
- donor type
- fundraising channel

## Occupation family suggestions
- Healthcare
- Education
- Legal
- Nonprofit / Advocacy
- Public Sector / Government
- Labor / Trades
- Transportation / Logistics
- Service Industry
- Business / Executive
- Consultant / Self-Employed
- Real Estate / Development
- Finance / Banking
- Technology
- Retired
- Student
- Unknown

## Industry family suggestions
- Healthcare
- Education
- Legal Services
- Nonprofit / Civic
- Government / Public Sector
- Labor / Trades / Construction
- Transportation / Logistics
- Hospitality / Service
- Business / Corporate
- Real Estate
- Finance
- Technology
- Unknown

## Spend category suggestions
- Field Program
- Payroll
- Consultants / Strategy
- Polling / Research
- Digital Program
- Paid Media
- Direct Mail
- Compliance / Legal / Accounting
- Creative / Photo / Video
- Event Costs
- Office / Operations / Software
- Travel / Meals
- Printing / Signs / Literature
- Data / Voter File / Tools
- Reserve / Contingency
- Unknown

## Review-queue rule
The product should surface the highest-impact ambiguous records first:
- top unknown occupations by dollars
- top unknown vendors by spend
- top unknown channels by amount
- top ambiguous ZIPs or geography records
