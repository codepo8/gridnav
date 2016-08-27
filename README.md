# gridnav.js - allow for more convenient keyboard navigation of lists

```Gridnav``` is a JavaScript that allows users to navigate around a list of items easier and in a more accessible manner. Given that your list consists of keyboard accessible elements, the normal way to navigate them is by tabbing to each element in order. You can also shift-tab to go back. This works, but can be cumbersome:

![Navigating a grid with up, down, left and right](images/tabbing.gif)

Wouldn't it be easier to be able to navigate the list with the arrow keys or WASD navigation? It makes it much easier to reach items deeper in the list:

![Navigating a grid with up, down, left and right](images/grid.gif)

```Gridnav``` does that for you. It is a plain vanilla, 50 lines JavaScript solution without any dependencies. All you need to do, is to add it to the document you want to enhance with this type of navigation and instantiate it with a reference to a sensible HTML navigation construct in your document. Notice that this is a progressive enhancement - if anything goes wrong with your JavaScript execution, you can still tab through the list.

```xml
<script src="gridnav.js"></script>
```

```Gridnav``` automatically applies itself to any list with a class of ```gridnav```, or you can explicitly create your own instances in JavaScript.

You can see ```Gridnav``` in action [on this demo page](https://codepo8.github.io/gridnav/#list).

In [the first demo](https://codepo8.github.io/gridnav/#list) we define the amount of elements per row and which element is the one that should get keyboard navigation. In this case, eight items and buttons as elements. You define these as ```data attributes``` in your HTML:

```xml
<ul id="list" data-amount="8" data-element="button">
  <li><button>0</button></li>
  <li><button>1</button></li>
  <li><button>2</button></li>
  …
  <li><button >31</button></li>
</ul>
```
You then add keyboard grid navigation by giving gridnav the selector of the element as a parameter:

```javascript
var buttonlist = new Gridnav('#list');
```

You don't need an ID on the element, any selector that points to the right element will do, for example:

```javascript
var buttonlist = new Gridnav('.demo ul');
```

[The second demo](https://codepo8.github.io/gridnav/#links) uses links and five elements per row.

```xml
<ul id="links" class="gridnav" data-amount="5" data-element="a">
  <li><a href="#">1</a></li>
  <li><a href="#">2</a></li>
…
  <li><a href="#">25</a></li>
</ul>
```

This one didn't need any instantiating in JavaScript, the ```gridnav``` class took care of that.

Defining the amount of elements per row and the element that is keyboard accessible makes it faster and easier to add the functionality. You can however also omit those as you can see in the [third demo](https://codepo8.github.io/gridnav/#smaller). In this case, ```gridnav``` detects the interactive element as the first child node of the first child of the list and calculates the amount of elements automatically.

```xml
<ul id="smaller">
  <li><a href="#">1</a></li>
  <li><a href="#">2</a></li>
…
  <li><a href="#">25</a></li>
</ul>
```
```javascript
var smalllist = new Gridnav('#smaller');
```
> :warning: :exclamation: Whilst this is a lot easier, it is also more expensive and may result in errors. ```gridnav``` calculates the amount of elements by reading the width of the list element and one of its child elements and dividing them. This means you need to ensure that your list items are all the same width and the script needs to recalculate on every window resize.

# Support

This was tested on the current Firefox, Chrome, Opera, Safari, Edge and IE11.
