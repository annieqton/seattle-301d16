# Class 13 - Deployment with Heroku

####Overview

*The focus of this class is on students understanding the concept of production deployments in conjunction with development and production environments.  Through the use of Heroku, you will guide students through the deployment process, configuration of environment variables, and general issues that can arise during the deployment phase of a project. Students should also understand development, production, and feature branches and how they are used in collaborative development.*

- Announcements
	- Project Week is coming!
		- Today we'll start collecting project ideas *(we'll talk about this after finishing announcements, and look at the related Canvas assignment)* so that we can get a sense of how to scope them, and also develop a list of possible projects.
		- Friday we'll finalize project teams and get Project Week underway! Teams will be able to pick whatever project they want from the list, or propose a new one, as most of you experienced in 201 last month.
	- Reminder: the entrance exam for the 401 courses (which doubles as the final exam for this course) will be published on Friday afternoon and be available until 11:59pm Sunday.
	- 	If you'd like to schedule a one-on-one meeting with Sam, please select one of the slots available at [this link](https://sam-301d16.youcanbook.me/).
- Code Review

`BREAK (10 minutes)`

[**Slides: RESTful endpoints and External APIs**](../class-12-REST-and-APIs/12-REST-APIs.pdf)

- []"How I explained REST to my brother..."](https://gist.github.com/brookr/5977550)
- REST concepts
- RESTful routes
- App state and transition

**[Slides: Deployments](13-deployments.pdf)**

- Development vs. Production
- Linux Kernel & Git
- Managing Complexity
- Separation of Concerns
- Environment Variables
- Local & Remote Server Environments

**[Slides: Heroku](13-heroku.pdf)**

- Productivity
- Better Apps
- Trusted Platform
- Deployment Workflow: releases & easy rollbacks
- Logging
- Sharing
- Dynos
- Add-ons

`BREAK (10 minutes)`

**Key question: What to do with the GitHub token?**

- Do not want to push it to GitHub!
- How to make it accessible to a remote server yet still protected?
- `npm i --save express-server-proxy`

**DEPLOYMENT DEMO**

**Discuss the lab assignment for today**

- Look at the README
- Review the TODO items in the code

**Other topics on REST to explore...**

- [Wikipedia: Rest](https://en.wikipedia.org/wiki/Representational_state_transfer)
- [Who the heck is Roy Fielding?](https://en.wikipedia.org/wiki/Roy_Fielding)
- [Make that ***Dr.*** Roy Fielding, whose doctoral dissertation initially defined REST](https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm)
- [SOAP vs REST](http://blog.smartbear.com/apis/understanding-soap-and-rest-basics/)

--

## Class 13 Learning Objectives

* Be able to push a dev site to production, so the world can see it.

* Understand the difference between a static page and a dynamically generated app page.

## Class 13 Readings (to be completed before class)

* [Heroku: Getting Started with Node](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)

* [Deploying a Simple Blog to Heroku](https://howtonode.org/deploy-blog-to-heroku)
