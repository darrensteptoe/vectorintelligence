# Campaign Finance Engine (CFE) — Classification Rules

## Classification philosophy
Classification is a product feature, not cleanup work. It should preserve uncertainty, support manual review, and improve over time.

## Resolution order
**manual override > exact rule > fuzzy rule > unknown**

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

## Vendor category suggestions
- Media Buyer
- Consultant / Strategist
- Payroll / HR
- Digital Vendor
- Pollster / Research
- Printer / Mail House
- Compliance / Legal / Accounting
- Creative / Production
- Office / Software / Operations
- Event Vendor
- Travel / Hospitality
- Field Vendor
- Data Vendor
- Unknown

## Channel suggestions
- Call Time
- Major Donor Meetings
- Events
- Online
- Finance Committee
- Host Network
- Self-Funding
- PAC / Committee Support
- Other
- Unknown

## Manual review queue guidance
Prioritize review for:
- highest-dollar unknown occupations
- highest-dollar unknown vendors
- most frequent unknown categories
- large recent expenditures with ambiguous purpose
- top donor ZIPs with missing clean tags
