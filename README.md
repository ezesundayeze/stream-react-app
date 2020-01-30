# ReactJS Chat Application built with Stream Chat 💬

## Overview

This chat application should you all set up with a react application you can start working with ASAP.

> Note: This API does not contain auth, therefore it is not escure _at this time_. I'll be adding an auth layer shortly but until then, you can easily add your own with a JWT token.

## Quick Instructions (localhost)

1. Create an free chat trial with [Stream](https://getstream.io/chat/)
2. Clone repo with `git clone https://github.com/ezesundayeze/stream-react-app.git`
3. Run yarn to install dependencies `cd stream-react-app && yarn`
4. Create a `.env` file and add your end point there `REACT_APP_ENDPOINT=http://localhost:8080/v1/auth/init/`
5. Start the `yarn start`
6. Ensure the NOdeJS API is set up and started, you can refer to the api documentation [Here](https://github.com/nparsons08/stream-chat-api)
7. Navigate to `localhost:3000/account` to register and start chatting 


## Technology Used

The following technologies were used to build this API:

-   [ReactJS](https://reactjs.org/)
-   [Stream Chat](https://getstream.io/chat/)
-   [Stream Chat JS Library](https://www.npmjs.com/package/stream-chat)

## Support

-   User authorization
-   Group chat


Please see below for installation requirements.

## Requirements

-   Node.js (latest)
-   Yarn (latest)
-   Create React APP

## Anatomy

```
.
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── Components
│   │   ├── Home
│   │   │   └── index.js
│   │   ├── Login
│   │   │   ├── index.css
│   │   │   ├── index.js
│   │   │   └── spinner.gif
│   │   └── Shared
│   │       ├── 404
│   │       │   └── 404.js
│   │       └── Auth
│   │           └── ProtectedRoute.js
│   ├── Shared
│   ├── Utils
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── serviceWorker.js
│   └── setupTests.js
└── yarn.lock
```
