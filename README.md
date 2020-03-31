## URL Shrinker
This is a simple Url Shrinker made with **Node.JS** and **ReactJS**. It is a simple application created for a job test.

### Server
The first thing you must do is configuring the **.env** file with all configurations. inside Server's root, create a file called **.env**, this file must be like this:
```
PORT=<PORT>
DB_URI=<Database_URI>
DB_NAME=<Database_Name>
```

Do not forget to change the values inside **<>**. After that, run the command `npm install` or `yarn install`. Doing that, you are able to run `npm start` or `yarn start`.

The server is running, you just need to configure the web-app, which is the next step.

### Web application
Web app is also easy to configure, first, you must create a **.env** file inside web-app's root. This file looks like that:
```
REACT_APP_API_HOST=http://localhost:8080/
REACT_APP_WEB_APP_HOST=http://localhost:3000/
```

Change the values only if you are using another **URL** or **Port**. Then, you have to install all the dependencies, you can do that running `npm install` or `yarn install`. That's done, just run the client using `npm start` or `yarn start`.

Do not forget to run either **Web-App** and **Server**. Feel free to contact me if you have any trouble!
