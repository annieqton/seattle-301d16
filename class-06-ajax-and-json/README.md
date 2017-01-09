
# Code 301, Class 6: ***AJAX & JSON***

*Here we go! Onwards, into Week 2 and a study of the Model layer. Asynchronous connections... and standardized data formats? This all sounds like a serious upgrade to our application logic! Let's see what you can do with the blog app (and your portfolios!) once we apply these concepts!*

*This week, you will construct a model layer in your application that accesses and transforms persisted client-side data, conforming to common WRRC, FP, and CRUD conventions.*

## Today's Plan

- Announcements
- Quick review of student survey comments
- Standups! (keep them fast today!)
- Code Review (Anna & Jeremiah)

`break`

- Slides: [AJAX & JSON Overview](301d16-lecture/class-06-ajax-and-json/06-http-json-ajax.pdf)
	- The HTTP Party
	- JSON
	- AJAX

`break`

- Key points of the readings that we'll need, and demo some of them:
	- Duckett JS book, pp.367-408
		- p.370: What is [AJAX](https://en.wikipedia.org/wiki/Ajax_(mythology))?
		- p.371: Why use AJAX?
		- p.372: **How AJAX works**
		- p.373: Handling AJAX requests and responses *("vanilla AJAX")*
		- p.374: Data formats *(All you need to know is that JSON rules)*
		- p.376: JSON
		- p.382: Loading JSON with AJAX
		- p.388: **jQuery & AJAX: requests**
		- p.389: **jQuery & AJAX: responses**
		- p.392: jQuery's AJAX shorthand methods
		- p.408: **Summary of the AJAX & JSON chapter**

	- [MDN docs for `let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
	- [MDN docs for `const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

- Key terms
	- [WRRC](http://celineotter.azurewebsites.net/world-wide-web-http-request-response-cycle/) (Web Request Response Cycle)
	- [URL](https://en.wikipedia.org/wiki/Uniform_Resource_Locator) vs. [URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) (Uniform Resource Locator vs. Uniform Resource Identifier)
	- [IP address](https://en.wikipedia.org/wiki/IP_address)
	- [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) (Domain Name System)
	- REQ/RES (Request/Response)

- Lab Prep
	- [AJAX demo!](301d16-lecture/class-06-ajax-and-json/AJAX-demo.md)
	- Let's review the starter code and TODOs!
	- Note that this code uses new ES6 styles of variable declarations including  `let` and `const`

## Useful Resources

- [Pokéapi!](https://pokeapi.co/)
