

### Installing Node.js and Visual Studio Code

Both are free, open source, and available for all operating system.

Take a moment to install these before continuing on with the class.

• Node.js
• Visual Studio Code


### What is Node.js?

Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser


## Backend Development in Node JS 


## What is Web Server ? 

* Web server is a program that stores, processes, and distributes web pages to the end-user(client-side).

* When a browser(a website) needs a file that is hosted on a web server, the browser requests the file via HTTP(the protocol your browser uses to view webpages). When the request reaches the correct web server, the server accepts the request, finds the requested document, and sends it back to the browser, through HTTP.

* (If the file does not exist in the server, it returns a 404 response.) 

* The browser makes a GET request through HTTP and the server processes that GET request and send the response accordingly.

![image](https://user-images.githubusercontent.com/11299574/167445807-229c1a78-20d2-4495-9352-5aeace0bc5d3.png)


 ### Step 1️⃣: Install Node.js

 Link - https://nodejs.org/en/download/

 ### Step 2️⃣: Create a project folder

Create a project folder for this tutorial. I'm naming it "building server" and creating a server.js file in it.

### Step 3️⃣: Initialize NPM (Node Package Manager)
 
```
npm init
```

Then it will ask you several questions like the package name, version, description, keywords, and other things. 
You can leave them all default by pressing enter after every step. 
You can give a description and the author's name if you want.
In the end, it'll ask you "Is this OK?" press "y" and then enter.
This will create a package.json file in your project folder. 
This JSON file will keep track of all the packages that you'll install in this project.
