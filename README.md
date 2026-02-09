# Portfolio_website

A hacker zine style personal portfolio website for personal projects.

## Quick Start

```
npm install
npm start
```

## Content

### Projects to List
- Thesis
- Remote control
- Card trading website
- SLAM car
- Arduino PCB game
- Party Alarm
- AI Phone installed (Do call 2 prayer upgrade)
- Payment management system
- Trading twitter bot
- MATLAB SLAM
- MATLAB Control Systems
- This website


### Project Input Potential Tags
- Tags
- Cover image
- Links
- Demo (Live)
- Achievements
- Technologies Used
- Complexity
- Duration

### Other Portfolios
https://fwachter.github.io/
- Has resume, project experience, work experience very short project summaries, no skills
- About me section is really concise and is SELLING his capabilities

https://brittanychiang.com/
- Pinpoint lighting in the background
- Resume w/ tags and view full resume
- Folding headers, no nav bar

## Development

### Bugs
- [x] Change the hover icons to just be brightness fade rather than expand
- [ ] Delay before project section disappears
- [ ] Google pixel stretched ascii ART (space shrinking)
- [ ] Messenger preview stretched ascii ART
- [ ] Images massive on zoom out
- [ ] Image captions
- [ ] Fix install app suggestion
- [ ] Loading animation screen (1 animation cycle minimum and then wait for the head to load)
- [X] Scroll shows full header section

### MVP TODO
- [x] Get the static document link working for the report PDF
- [x] Fill in the projects (aim for 10)
- [x] Add Schneider and Company
- [ ] somehow and let the thing expand the full way to the right
- [x] Change to a softer colour theme
- [x] Decide whether to do work projects?
- [ ] Have a project text interpreter
- [x] Make engaging catch phrases
- [ ] Add some sort of third section (showcase, resume, qualifications)
- [X] favicon_icon
- [X] Fix introductory text to be shorter, not mention my name twice and be engaging.
- [X] Fix timeline VLine toggle fade


### Feature Ideas
- [x] Sticky header with home button
- [ ] More readable main font
- [x] Scale whitespace to make a coverpage of for the entry point
- [ ] Highlight project button and ranking on scroll focus
- [ ] Sticky header with navigation and toggle theme button: fade after scrolling past the last section of contents (?)
- [ ] Window terminal emulator style, previous commands, help with other features
- [ ] Search
- [ ] Ranking system: timeline, complexity (stars), time invested
- [ ] Tags for filtering: software, hardware
- [ ] Interactive bouncing ball simulator
- [ ] Rotating ASCII art scan of my smiling head
- [x] Make the Divider into a section component with child input
- [x] Buttons with icons
- [x] Typing the initial lettering
- [x] Retyping the catchy messages of the
- [x] Animation transitions for the text expand
- [x] RHS timeline, thumbnails, month & year

## Aesthetics
### Fonts

- [ASCII Text Art Generator](https://patorjk.com/software/taag/#p=display&f=ANSI%20Shadow&t=LB)
- [ASCII Image Art Generator](https://www.asciiart.eu/image-to-ascii)
- [ASCII to SVG](https://ivanceras.github.io/svgbob-editor/)
- [ASCII Animations](https://ascii.co.uk/animated)

### Inspiration

- [HTP: Hack The Planet](https://www.exploit-db.com/papers/25306)
- [Phrack](http://www.phrack.org/)
- [Pinterest: How to Make a Zine](https://www.pinterest.com.au/pin/37576978132730528/)

## Github Pages Deployment

This is hard to work with for some reason.
`> npm run deploy`
This just automatically pushes it to the repo but there is a bug:
- Reset the custom domain in the page settings to `www.lyallbeveridge.com`
- Re-enforce HTTPS

