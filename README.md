PRO MERN stack book

Chapter 13

This chapter deals with adding functionality to the application. The UI code is refactored to reuse common code across many components that display the Toast messages. Most of the repetitive code is also removed. The report page which was a placeholder is updated. The aggregate function of mongodb is used for the same. The pagination feature is implemented in both UI and API side to get rid of the large lists populating on the screen. Earlier the issues used to get deleted permanently, now the undo delete option is added. This is used to recover the deleted issue. The search bar is also added in which the user can search for the issues with the keywords. The application is up and running and the screenshots for the report page and the search bar are attached.


![CH-13](https://github.ccs.neu.edu/NEU-CS5610-SU21/SahaiAyush-book/blob/master/Screenshots/ch-13.JPG)
![CH-13](https://github.ccs.neu.edu/NEU-CS5610-SU21/SahaiAyush-book/blob/master/Screenshots/search.JPG)

Chapter 12

This chapter deals with the ability of React to generate HTML on the server in addition to being able to render directly to the DOM. This enables creation of isomorphic applications, that is, applications that use the same codebase on the server as well as the client to do either task: render to the DOM or create HTML. Server rendering (also known as server-side rendering or SSR for short) is the opposite of what characterizes an SPA. So, to have pages from an application be properly indexed by search engines, the server needs to respond with the same HTML that will result after the Ajax call in componentDidMount() methods and subsequent re-rendering of the page.
Server side rendering works, the application is up and running and screenshots updated.

![CH-12](https://github.ccs.neu.edu/NEU-CS5610-SU21/SahaiAyush-book/blob/master/Screenshots/ch-12.JPG)

Chapter 11

This chapter deals with making the view better for the user and involves changes mainly in the UI part. React-Bootstrap is used for the pupose. Bootstrap installation is done, then the ui is updated one by one. Navigation bar is added, buttons are added, panels, tables, forms, inline forms, grid system, horizontal forms, toasts, modals are added. All of these make the ui appear better and more visualizable. Bootstrap, a pioneer in this area, enabled browser independence and a responsive behavior out of the box. React-Bootstrap replaced the separate JavaScript code that dealt with the Bootstrap elements and made self-contained components possible. The application is up and running and the screenshots are updated.

![CH-11](https://github.ccs.neu.edu/NEU-CS5610-SU21/SahaiAyush-book/blob/master/Screenshots/ch-11-1.JPG)

Chapter 10

This chapter is about adding more and more features to our application. This focuses on taking more and more of user input and processing it. The edit page is filled with a form and the delete and update issue fields are added. Close button is added to close an issue. Backend API's are modified to do the functions and new delete and update API's are created. The new API's added cater to the CRUD operations, we also we created specialized input components that could deal with different data types that one expects in most applications. The screenshots of edit page and the homepage are updated and the application is up and running.

![CH-10](https://github.ccs.neu.edu/NEU-CS5610-SU21/SahaiAyush-book/blob/master/Screenshots/ch-10.JPG)
![CH-10](https://github.ccs.neu.edu/NEU-CS5610-SU21/SahaiAyush-book/blob/master/Screenshots/ch-10.1.JPG)

Chapter 9

This chapter deals with adding more features in the application. We also implement client-side routing, that is, show different pages depending on links in a menu or a navigation bar. The React Router library helped with this. In this chapter we set up routing for a single page application using React's router component. Implementing routing correctly is key to giving the user a natural feel when clicking on hyperlinks and using the back/forward buttons in the browser. A new navigation bar is added and the issues are separated on the basis of new, assigned or fixed or closed. The application is up and running and the screenshots are updated in the Readme file.

![CH-9](https://github.ccs.neu.edu/NEU-CS5610-SU21/SahaiAyush-book/blob/master/Screenshots/ch-9.JPG)

Chapter 8

This chapter mainly deals about Modularization and Webpack and splitting the code into multiple files and adding tools to ease the process of development. Since JavaScript was not originally designed for modularity, we needed the tool Webpack to put together and
generate a few bundles from a handful of small JavaScript files and React components. Modularization was done for both the frontend and the backend part. Then the dependencies were removed from CDN for runtime libraries such as React and the polyfills. Again,
Webpack helped resolve dependencies and create bundles for these. Webpacks HMR was used to optimize the code and the get and post methods in the console were logged during the connection and the screenshots are updated.

![CH-8](https://github.ccs.neu.edu/NEU-CS5610-SU21/SahaiAyush-book/blob/master/Screenshots/ch-8.JPG)

Chapter 7

This chapter deals with big architectural change by separating the UI and the API servers. The chapter looked at the architecture and makes it more flexible so that it can cater to larger applications with lots of traffic. A package called dotenv to help us run the same code on different environments using different configurations for each environment, such as development and production.
Finally, checks are added to verify that the code we write follows standards and good practices and catches possible bugs earlier in the testing cycle. Then eslint standards are used and the errors are fixed and the screenshots are updated.

![CH-6](https://github.ccs.neu.edu/NEU-CS5610-SU21/SahaiAyush-book/blob/master/Screenshots/ch7-1.JPG)
![CH-6](https://github.ccs.neu.edu/NEU-CS5610-SU21/SahaiAyush-book/blob/master/Screenshots/ch7-2.JPG)

Chapter 6

This chapter deals with the basics of addting a backend database to the application. Mongo DB is the databse used here. The installation for mongo db is done and the account is created. Cluster creation is done and the database is created. Mainly everything is done through the mongo shell, but here there are other options avaliable as well such as the Atlas. The data is entered in the database and is edited, searched, read, deleted and displayed. The Node.js mongo driver is also installed and is used to access the database and perform CRUD operations. Schema initialization is also done and data is written and read from Mongodb for the issue traceker database. On the set of changes will show that new issues can be added, and even on a restart of the Node. js server, or the database server, the newly added issues are still there.

![CH-6](https://github.ccs.neu.edu/NEU-CS5610-SU21/SahaiAyush-book/blob/master/Screenshots/mongo-read.JPG)


Chapter 5

This chapter deals with the knowledge of graphql and Express. The advantages of graphql over express are mentioned and the concepts of routing, request matching, route parameters, route lookup, handler functions, etc are discussed. REST APIs are resource based, whereas GraphQL is graph based. This means that relationships between objects are naturally handled in GraphQL APIs. The about API is discussed and implemented and tested in GraphQL playground on port 3000. Then the list API is discussed, implemented and tested, it is then integrated in the code. A function that looks for a date-like pattern in the input and converts all such values to a date is created. A regular expression to detect this pattern, and a simple conversion using new Date().Create API is An API for creating a new issue in the server, which will be appended to the list of issues in the server’s memory. Then the changes for using query variables are done. Then the input validation is implemented to check for invalid inputs, the errors are also logged to the console.

![CH-5](https://github.ccs.neu.edu/NEU-CS5610-SU21/SahaiAyush-book/blob/master/Screenshots/ch5.JPG)
![CH-5](https://github.ccs.neu.edu/NEU-CS5610-SU21/SahaiAyush-book/blob/master/Screenshots/ch5-4.JPG)
![CH-5](https://github.ccs.neu.edu/NEU-CS5610-SU21/SahaiAyush-book/blob/master/Screenshots/ch5-5.JPG)


Chapter 4

This chapter mainly involves knowledge about React states and to make components that respond to user input and other events. The state of a component is captured in a variable called this.state in the component’s class, which should be an object consisting of one or more key-value pairs, where each key is a state variable name and the value .is the current value of that variable. In updating state a minor change is made to the state and a new issue is added and updated. Now As for IssueAdd, we  moved the timer into the constructor of this class and trigger the addition of a new issue from within this component. On refreshing the browser, we see an empty table to start with, which soon populates withtwo issues and after two seconds, another issue gets added. In a well-designed application, most components would be stateless functions of their properties. All states would be captured in a few components at the top of the hierarchy, from where the props of all the descendants are derived. This is covered in commit of stateless components, the final working screenshot is attached in the Readme and also uploaded in Screenshots folder.

![CH-4](https://github.ccs.neu.edu/NEU-CS5610-SU21/SahaiAyush-book/blob/master/Screenshots/ch4.JPG)


Chapter 3

This chapter involves the knowledge about react components and composing them, the objective is to convert the single-line JSX into a simple React component instantiated
from a React class. Then the approach for building Issue Tracker by composing components is discussed, also the methods for data passing are also covered. One such method is Passing data using properties. Depending on the inputs (an issue), the row can display different data. The easiest way to pass data to child components is using an attribute when instantiating a component. There is another way to pass data to other components, using the contents of the HTML-like node of the component. In the child component, this can be accessed using a special field of this.props called this.props.children. Also a simple in-memory JavaScript array to store a list of issues is used. This comes under the tag of dynamic decomposition, example issues are added and the results are displayed. the screenshots for all the output done in this CH-3 are included in readme and also uploaded in a folder Screenshots.

![CH-3](https://github.ccs.neu.edu/NEU-CS5610-SU21/SahaiAyush-book/blob/master/Screenshots/ch_3_react_comp.JPG)
![CH-3](https://github.ccs.neu.edu/NEU-CS5610-SU21/SahaiAyush-book/blob/master/Screenshots/ch_3_final.JPG)

Chapter 2 


This chapter involves mainly getting familiar with NODE,NPM and babel, thier installations and running basic hello world program. Fundamentals of HTML are needed for this, First the author starts with serverless hello world using React, the author wrongly mentions contents instead of content in the index.html file. Then the installations for Express server is done. The server is run and the index.html file is run on server on port 3000. Later on the script files are separated and the JSX transformation is done, also the support for older browsers is taken care of.
Two terminals should be used for automation, the screenshots for all the output done in this CH-2 are included in readme and also uploaded in a folder Screenshots.

![Serverless_hello_world](https://github.ccs.neu.edu/NEU-CS5610-SU21/SahaiAyush-book/blob/master/Screenshots/Serverless_hello_world.jpeg.JPG)
![automation](https://github.ccs.neu.edu/NEU-CS5610-SU21/SahaiAyush-book/blob/master/Screenshots/ch2_4(automation).jpeg.JPG)




