# :musical_note: Music Search :ear:

Music Search is a few days projects to showcase the capabilities of the **Free** Spotify API features.
It could easily be extended to something serious with a Premium Account API.

## Installation

###Linux, OS X

Requirements : node.js
Optional : Python to hosts the App locally (works without tho)

Npm Dependencies :

`make install`

## Usage

Hosted mode (required for current ProTractor specs) :

`make start`

Then you should see the App running at :

[localhost:8000](http://localhost:8000)


Old-school, HTML file opening:

As this's a Front-end only App, this could be opened through a Browser that natively support CORS.
Open index.html into your favorite browser

## Screenshot

[![Capture d’écran 2017-02-26 à 16.29.57.png](https://s31.postimg.org/yn27j8m6j/Capture_d_e_cran_2017_02_26_a_16_29_57.png)](https://postimg.org/image/yaatd23wn/)

## Unit testing

`make test_karma`

## Functional testing

You might need to update first :

`make update_webdriveragent`

then, you should be able to run ProTractor :

`make test_protractor`


## Features to be implemented

- [x] Angular SPA
- [x] Maintainable arborescence
- [x] Bootstrap Integration
- [x] ***Coverflowed*** Playlist
- [x] Play/Pause button (does everything you can expect from a Play/Pause button)
- [x] Integration Spotify Endpoints
- [x] Combined field for searching both Artists/Albums
- [x] Typeahead Album search (w/ cover preview)
- [x] Artists results are shown under cards
- [x] Extra artists information (e.g. genre, if available)
- [x] Albums list through cards (simple alert of result)
- [x] Functional testing (ProTractor/WebDriver Agent)
- [x] Unit testing (Karma/Jasmine)
- [x] Saving/Loading Playlist in/from LocalStorage
- [ ] Host a demo of the project (e.g. Github Pages)

## Improvments

- More tests
- Improving Coverflow UX (Bug when playlist loaded from localStorage, vertical display)
- From Artists results, album button should open a modal, and on this modal with albums, user should be able to select which album he/she wants to add to his/her playlist


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Credits

David Barrat - FEB2017

## License

MIT License - Edit the way you want, I don't care.
