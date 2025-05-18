# The Upvote Challenge: Dynamic Voting Widget

**Picture this**: a series of cards, each representing an idea, neatly laid out on the screen. Users can express their opinions
by *upvoting* or *downvoting* the ideas, and when a change is needed, they can easily *edit* the card content through a sleek, responsive *modal*.

## Features
### Core
- Dynamically generate cards based on API data.
- Allow users to upvote and downvote, with the count updating in real-time.
- Make the content editable via a modal, with changes persisting after a page reload (used local storage).
- Responsive (designed for mobile-first).

### Bonus
- Added a sorting feature to sort cards based on number of votes.
- Included a `Reset` button for each card to restore the original API data.

## Tools Used
- HTML / Twig.
- CSS.
- Vanilla JavaScript.
- Local storage for data persistence.

## Assumptions
- Client-side rendering only, hence I didn't utilise Twig as much.

## Installation
1. Fork / clone this repo.
2. Run `composer install`.
3. Run `symfony server:start` command to access via local web server.

## Final Product

![dynamic-voting-widget](public/assets/images/dynamic-voting-widget-home.webp)

## Disclaimer
Project is from BeastScan's Frontend Developer Technical Test[^1].

[^1]: [BeastScan FrontEnd Developer Techanical Test](https://www.beastscan.com/beastscan-frontend-developer-technical-test/).