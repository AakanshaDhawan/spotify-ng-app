# :musical_note: Music Search :ear:

Music Search is a few days projects to showcase the capabilities of the **Free** Spotify API features.
It could easily be extended to something serious with a Premium Account API.

## Demo
Requires a Token
~~[Live Demo](https://dbrrt.github.io/music-search/)~~

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

## Screenshots

<img src="https://s22.postimg.org/qjygl1gr5/Capture_d_e_cran_2017_02_26_a_16_29_57.png)" width='400' /> <br>
<img src="https://s22.postimg.org/s0ekgx91t/Capture_d_e_cran_2017_02_26_a_16_37_08.png)" width='400' /> <br>




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
- [x] Integration Spotify Endpoints
- [x] Caching Spotify Responses
- [x] ***Coverflowed*** Playlist
- [x] Play/Pause button (does everything you can expect from a Play/Pause button)
- [x] Combined field for searching both Artists/Albums
- [x] Typeahead Album search (w/ cover preview)
- [x] Artists results are shown under cards
- [x] Extra artists information (e.g. genre, if available)
- [x] Albums list through cards (simple alert of result)
- [x] Functional testing (ProTractor/WebDriver Agent)
- [x] Unit testing (Karma/Jasmine)
- [x] Saving/Loading Playlist in/from LocalStorage
- [x] Host a demo of the project (e.g. Github Pages)

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

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
