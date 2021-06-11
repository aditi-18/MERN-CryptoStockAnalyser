PRO MERN stack book

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




