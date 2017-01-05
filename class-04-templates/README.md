# Code 301, Class 4: ***Templates***

*Templates have some advantages over direct DOM manipulation. Leverage those strengths in the blog, and in your portfolio application, by adding in a templating library!

As we get more sophisticated, this is a good time to ensure our CSS styles are well organized. We'll follow the SMACSS system for keeping everything in its proper place.*

## Today's Plan

- Standups!
- Code Review (Remster & Alejandro)

`break`

- Typography: HUGE topic; a few resources at bottom of this doc
- [ECMAScript 2015](http://www.ecma-international.org/ecma-262/6.0/)? What the heck is [ECMA](http://www.ecma-international.org/)?
- [ES6 template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) docs, and [an article on them by Addy Osmani](https://developers.google.com/web/updates/2015/01/ES6-Template-Strings).
	- Why? Take a look at these two things...
	- Remember that annoying concatenated assignment of the `var option` from  from yesterday...
		- `'<option value="' + authorName + '">' + authorName + '</option>';`
	- That can be replaced with this!
		- `<option value="${val}">${val}</option>`;
	- WAY less confusing!!!
- Regular Expressions (RegEx)
  - [*"Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec and test methods of RegExp, and with the match, replace, search, and split methods of String. This chapter describes JavaScript regular expressions."*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
  - [**Eloquent Javascript**'s take on RegEx](http://eloquentjavascript.net/09_regexp.html)
- Templating with [Handlebars.js](http://handlebarsjs.com/)
  - How did we do it on Day 2? Pulled it from the DOM
  - Now with putting the template in the \<head> means there's no concern with it displaying and no need to manage that any longer.
  - Handlebars lets us get rid of a lot of the "[brittle](http://lmgtfy.com/?q=brittle+code)" jQuery.
  - Look at the [tryhandlebarsjs.com](http://tryhandlebarsjs.com/) demos!
  - Live demo!

`break`

- Portfolio: Where should we be by now? Here's links to the daily READMEs. *(Keep in mind that as you build it out, you are responsible for turning in the steps for each day's progressive enhancement; you can't just catch up the first few days in a single day and then only turn in one assignment. There needs to be an assignment submission matching to each intermediate set of daily goals as outlined here.)*:
  - [Class 1 portfolio assignment](https://github.com/codefellows/seattle-301d16/tree/master/class-01-responsive-mobile-first/portfolio-assignment)
  - [Class 2 portfolio assignment](https://github.com/codefellows/seattle-301d16/tree/master/class-02-jquery-and-the-dom/portfolio-assignment)
  - [Class 3 portfolio assignment](https://github.com/codefellows/seattle-301d16/tree/master/class-03-jquery-events/portfolio-assignment)
  - [Today's portfolio assignment](https://github.com/codefellows/seattle-301d16/tree/master/class-04-templates/portfolio-assignment)
- Lab
	- Let's review the starter code and TODOs!
  	- LOC? Hey, what's going on here?
  	- The skinny: you're getting rid of the old templating and replacing it with Handlebars!
  	- 'Staches FTW!
  	- **{{WIN}}**

  ## Useful Resources
   - [Google Fonts](www.google.com/fonts)
   - [Treehouse: Web Typography Course](teamtreehouse.com/library/web-typography)
   - [Practical Typography Site](practicaltypography.com/)
   - [A More Modern Scale for Web Typography via typecast.com](typecast.com/blog/a-more-modern-scale-for-web-typography)
   - [Type Scale Tool via type-scale.com](type-scale.com)
