# Install the npm dependencies in node_modules
install:
	npm install

# Serves by default index.html on [PORT 8000]
# http://localhost:8000/#/ is the root of the application
start:
	python -m SimpleHTTPServer

# ANGULAR UNIT TESTING
# Run Karma/Jasmine tools from defined specs under test/karma.conf.js
test_karma:
	npm test

# ANGULAR FUNCTIONAL TESTING
# Before you can run ProTractor, you need to be sure that WebDriver agent is up-to-date
update_webdriveragent:
	sudo webdriver-manager update

# Run ProTractor using Scenarios defined under test/protractor.conf.js
test_protractor:
	protractor test/protractor.conf.js
