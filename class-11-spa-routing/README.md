# Class 11 - Routing and Single Page Apps

*At the heart of every web app is the Web Request-Response Cycle. Pay close attention to how your app is creating and responding to requests. With client-side routing and the History API, we can add a layer of abstraction on top of the traditional routing.*

- Discussion of Weekly Feedback
  - Brook's role in the classroom, last week and this week.
  - This upcoming week's curriculum is the same one we have used since this course was designed more than a year ago. (Reminder: we're 301d**16**).
  - To make the most of our class time from here on, we'll cut the two breaks back to 10 minutes each.
  - To make the most of our class time from here on, we will no longer do the morning standups before lectures. Team standups will remain as a part of Project Week.
  - Setup issues with Postgres... we definitely could have done better with that, and we apologize. We will do that as a prework item in the future.
  - There were multiple comments in this spirit: "I have found the atmosphere of this particular class to be distracting and not conducive to a productive learning environment. This is not a remark on Code fellows curriculum, nor Hamm’s teaching skills nor the assistance of his TA’s, but is more a reflection of comments and questions in the class that persistently derail topics and lead down tangents not pertinent to our discussion."
  - Managing the side-tracking questions during lecture: `"Ask me in lab"` will be be the standard response to questions that would put us off the lecture schedule. Or, put the question in Slack!
  - Scheduling observation: We can't change the past, but in the future, if there is a noon event, we'll plan to start class early those days to avoid a time crunch at the end of class.
  - Pair programming policy going forward will be different.
  - ***Forwards and onwards! Still a lot left to learn!!!***

- Code Review

`BREAK (10 minutes)`

[**Slides: Routing & Controllers**](11-SPA-client-side-routing.pdf)

**Single-Page Apps**

- Why single page?
	1. Performance trade-offs
	2. User experience

- jQuery’s role so far
	1. Event handling for our tabs
	2. Will still be hiding and showing content

- Benefits of adding a ‘route’ to our page
	1. Lets user (and browser) believe they are navigating
	2. Updates History API to allow for ‘forward’ and ‘back’ actions

  **Look at PageJS repo; fork/clone it**

`BREAK (10 minutes)`

**Demo of PageJS**

- Showcase the History API in the console
	1. `history` is just an object
	2. It has a length property

- Head to another page & check the history length again

- Now use some methods like ‘go’ ‘forward’ and ‘back’
	1. Length will update based on pushState
	2. It cannot be directly modified!

- Client-side routing
	1. How to use page.js
  2. Look at how `history` is used in PageJS
	3. Docs!

- Hands-on PageJS example

- Review of the code for lab

--

**Class 11 Learning Objectives**

* Identify useful URLs for an app, and be able to implement those routes given the new library presented.

* Recognize other server technologies such as Node, new dependencies

--

**Class 11 Readings (to be completed before class)**

* JS&jQ: 424-427 (History API) (Essential)

* [A Classic MVC blog post](http://blog.codinghorror.com/understanding-model-view-controller/)

* [Page.js Readme](https://github.com/visionmedia/page.js) (Reference. Read up until "Plugins" section)
