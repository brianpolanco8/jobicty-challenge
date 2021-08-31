# Jobsity TV Maze Challenge

TV Shows Challenge

This a react-native simple application in order to test my skills for job city interview proccess.

# Installation and Setup Instructions

After cloning this repository, you'll need `node` and `yarn` installed globally on your machine.

## Installation:

To install dependencies run `yarn` in the project root.

`yarn`

To start development server you will need to create a `.env` file in the root directory and create a `API_URL` variable and set its value to `https://api.tvmaze.com`

Then depending on the OS you'll want the app to run, execute either:

`yarn run ios` or `yarn run android`

# Mandatory Tasks

- List all of the series contained in the API used by the paging scheme provided by the API. ✅
- Allow users to search series by name. ✅
- The listing and search views must show at least the name and poster image of the series. ✅
- After clicking on a series, the application should show the details of the series ✅
- After clicking on an episode, the application should show the episode’s information, including:
  - Name ✅
  - Number ✅
  - Season ✅
  - Summary ✅
  - Image, if there is one ✅

# Optional Tasks

- Allow the user to set a PIN number to secure the application and prevent unauthorized
  users. ✅
- For supported phones, the user must be able to choose if they want to enable fingerprint
  authentication to avoid typing the PIN number while opening the app. ✅
- Allow the user to save a series as a favorite. ✅
- Allow the user to delete a series from the favorites list. ✅
- Allow the user to browse their favorite series in alphabetical order, and click on one to
  see its details. ✅
- Create a people search by listing the name and image of the person. ✅
- After clicking on a person, the application should show the details of that person, such
  as:
  - Name ✅
  - Image ✅
  - Series they have participated in, with a link to the series details ✅

# List of libraries used

- **expo**: to build the project.
- **react-native-navigation**: to move between screens.
- **axios**: as a http client for fetching APIs.
- **redux using the reduxjs/toolkit**: as a state container.
- **redux-persist**: asynchronous storage to persist the store data in the device.
- **react-native-vector-icons**: as a state container.
- **react-native-dotenv**: for environment variables.
- **ramda**: utility library for modularity, performance & extras.
- **react-native-awesome-alerts**: for alerts.
