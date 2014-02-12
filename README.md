TODO List
====================

General
---------------------
None

Tests
---------------------
### Controllers
* Investigate logProvider **02/07/2014** [X]
* Mock log for initialization of "contactApp" module [X]
* Mock contacts for use with apiProvider instead of resolving as true [X]
* Inject angular promises for use with apiProvider without breaking contactApp [X]
* Remove afterEach (just reassign ctrl in each individual test) [X]

#### List
* Test for value of scope before and after contactStorage call [X]
* Test for delete function

#### Edit
* Test save/update
* Test for different scope states based on $routeParams

### Services
#### Remote 
* Test for all methods [get, save, update, delete] calling properly **02/10/2014**
* Test for update behavior vs save (create)
* Test filters for queries
* Test for equality between contacts array and "server" data after method calls
* Test for both removal of deleted object from array and "server" data
* Test for undefined fields for save/delete
* Test that factory is properly mapping methods to names and functions are available* 
* Test filter and options passed to apiProvider* callFunction are properly formatted or empty* 

Application
---------------------
### Templates
* Look into hash prefix (optional)

#### "List"
* Remove all ng-clicks and use ng-href instead with context of contact. 
* Search by field from dropdown (optional)

#### "Edit"
* Fix page name
* Use context for viewing contact only

### Controllers
#### "List"
* Remove all functions that only change $location. path()
* Prompt for contact deletion (optional)
* Remove contactStorage. contacts assignment
* Change delete to only send id

#### "Edit"
* Move into separate file
* Change controller to accept contact. id for returning contact data instead of contact. name
* Remove filter (It is stupid). 
* Remove return true after path change in save()

### Services
#### "Services"
* Merge with services.remote
* Investigate determining next increment for contact via Mongo/Api
* Change name of contact identity. Confusing.
* Remove getById (just use filter on contact array)
* Investigate deletion via other fields (not _id)
* Refresh contacts object if no alternative
* Add update function

#### "Services.remote"
* Merge with services **02/11/2014**
* Create records.js-esque (from project-evo) factory for generating apiProvider calls

Server
---------------------
### Collection
* Add query logging post-execution
* Better format resolutions returned for promises.

### Provider
* Remove emitters for now
* Add more logging

*The ending of each date's tasks is the beginning of the next date*
*Also tasks have each been allotted 15~ minutes to determine dates. Dates/time spent on each task will more than likely not be accurate*

Project-Evolution Seed
======================

Retrieve this repo to start a new application using Project Evolution

# Getting started

Create a new git repo and commit the HEAD of the master branch of this repo to the new repo.

DO NOT WORK DIRECTLY AGAINST THIS REPO!

## Install Dependencies
From a git shell, change to the repo working folder and execute the command:

`npm install`

## Main Entry Point
To facilitate production deployment, the main entry point file must be given a "unique" name.

Be sure to rename the file content/app.js to something representative of the project that is under construction.

For instance, for the evolution admin "product", the file has been renamed mobileconnect.js.


## Package definition
Customize the package definition to reflect the product/project being developed.

Select a project/product name and enter it into the package.json file as shown below.
Additionally, set the main entry point file name in the scripts/start setting, as shown below.

```
{
  "name": "PROVIDE A PROJECT/PRODUCT NAME",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node content/MAINENTRYPOINT",
    "test": "mocha test/unit/server --globals NODE_CONFIG,exportscoffeeScript"
  },

```

## Configuration
A default configuration file is provided, but several settings MUST be supplied. In general, the defaults are sufficient for any setting that is not addressed here.

### Ports
To support the production environment, each running instance must be configured with a unique port numbers for the web, socket, and REST server. All servers are optional and will be created based on the providers that are implemented. 
In general, the ports will be grouped together into a contiguous range. Please consult with the Evo team when choosing a starting port number to use.
Enter the port number into the configuration as presented below.

#### Web Server Port
```
module.exports = {
	port : <SUPPLY A PORT FOR THE APPLICATION WEB SERVER>,
	...
};
```

#### Socket Server Port
```
module.exports = {
	...
	data : {
		...
		socket : {
			server : {
				...
				port :  <SUPPLY A PORT FOR THE APPLICATION SOCKET SERVER>,
				...
			}
		},	
	...
};
```

#### REST Server Port
```
module.exports = {
	...
	data : {
		...
		REST : {
			server : {
				port :  <SUPPLY A PORT FOR THE APPLICATION REST SERVER>
			}
		}
	}
};
```

### Log File Name
```
module.exports = {
	...
	log : {
		...
		server : {
			...			
			transports : {
				...
				file : {
					...
					filename : '<USE THE SAME NAME AS THE MAIN ENTRY POINT FILE>.app.log',
					...
				},
				...
			}
		},
	},
	...
};
```

## Testing
A set of default configuration files are provided, but several settings MUST be supplied. In general, the defaults are sufficient for any setting that is not addressed here.

All configuration files are in the test/config/ folder.

A set of scripts are provided to execute tests. All scripts are in the scripts/ folder.

### All Tests
To execute all tests and generate output to files, execute the following command: 

##### Windows
`scripts\test.bat`

##### *nix
`./scripts/test.sh`

### Unit Testing
Unit testing is divided into Server and Client. Mocha is used in conjunction with Chai, Sinon, and other helpful libraries for both Server and Client testsing.

#### Server
To execute server tests (only), execute the following command: (obviously, write the tests first!)

`npm test`

Or, to capture the output to a file:

##### Windows
`scripts\server-test.bat`

##### *nix
`./scripts/server-test.sh`

#### Client
Client testing makes use of Karma in addition to the other tools. 

##### Configuration
There are 2 configuration files for Karma, 1 to run all tests and capture the output to a file and another for development purposes that can be used to isolate testing and interactively test.

test/config/karma.conf.js is the configuration that will run ALL tests and capture the output to a file. This configuration should not be used (or modified) during development.

test/config/karma-dev.conf.js is the configuration that can be used during development to perform isolated and interactive testing. This configuration should be used (and modified) during development.

To execute client tests (only), execute the following command: (obviously, write the tests first!)

##### Windows
`scripts\client-test.bat`

##### *nix
`./scripts/client-test.sh`


### End to End (e2e) Testing
Protractor is used in conjunction with Selenium. Protractor uses a flavor of Jasmine and the syntax of tests is slightly different from the Server/Client tests.

##### Selenium
To start the selenium server, execute the following command:

###### Windows
`scripts\start-selenium.bat`

###### *nix
`./scripts/start-selenium.sh`


##### Configuration
There are 2 configuration files for Protractor, 1 to run all tests and capture the output to a file and another for development purposes that can be used to isolate testing.

test/config/protractor.conf.js is the configuration that will run ALL tests and capture the output to a file. This configuration should not be used (or modified) during development.

test/config/protractor-dev.conf.js is the configuration that can be used during development to perform isolated and interactive testing. This configuration should be used (and modified) during development.

To execute e2e tests (only), execute the following command: (obviously, write the tests first!)

##### Windows
`scripts\e2e-test.bat`

##### *nix
`./scripts/e2e-test.sh`


## Start the project
From a command shell, execute the following command:

`npm start`
