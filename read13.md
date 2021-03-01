# Local Storage

With web storage or local storage we web applications can store data in the user's browser.

In the past the data was stored locally in cookies, but now web storage appear, it's safer than storing data in the cookies and it also has larger amount of data storage without effecting the website performance. 

we also need to know that all pages, from one origin, can store and access the same data.

HTML5 web storage provide us with two objects to store the data on the client browser:

* window.localStorage - stores data with no expiration date.

* window.sessionStorage - stores data for one session. (data is lost when the browser tab is closed)

## The localStorage Object

The localStorage object stores the data with no expiration date. this means that the data will not be deleted when the browser is closed, and will be available the next day, week, or year.

```
// Store
localStorage.setItem("firstName", "Omar");

// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("firstName");
```

and to delete the stored data we use
`localStorage.removeItem("firstName");`

## The sessionStorage Object

The sessionStorage object stores the data for only one session. The data is deleted when the user closes the specific browser tab.

One of the uses for the sessionStorage is to count the number of times a user has clicked a button, in the current session for example.









