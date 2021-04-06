# LiteSPA
An ultra lightweight solution from SPA routing.

## What is a Single Page Application?
Watch this to learn about how SPA's work: https://www.youtube.com/watch?v=qvHecQOiu8g

## How to use?
Use the `ìndex.html` as a starting point or follow the steps below:
1. First, import the `litespa.js` file at the bottom of your index.html page:
````javascript
<script type="text/javascript" src="litespa.js"></script>
````
2. Next, add anchor tags for each of the pages you want to include in your app. Use `lightspa-link` instead of the standard `href` attributes:
```javascript
<nav>
<ul>
	<li><a litespa-link="/Home" litespa-default>Home</a></li>
	<li><a litespa-link="/About">About</a></li>
	<li><a litespa-link="/Contact">Contact</a></li>
</ul>
</nav>
```
3. Use `litespa-default` to set your default page (your home page).
4. Finally, add `litespa-content`to an empty `div`where you would like the content to be displayed:
```javascript
<div litespa-content></div>
```
5. Each of the pages will be pulled from the HTML file in the `pages`directory that has the same name as the route (case is all lowered).

## Issues
Please log any issues in this repository or contact me.
