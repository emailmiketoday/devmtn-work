// It is not good practice to specify directives as a class.

// You should use an element whenever possible as it indicates a new object on the page.
// Or add it as an attribute to a div, such as <div test-attribute></div> in this case the directive would be listed as testAttribute in js file.


// Isolated, inherited, and shared - 3 types of scopes.

//////////////////////////////////////
//                                  //
//            FIREBASE              //
//                                  //
//////////////////////////////////////

// Firebase hosts files (HTML, CSS, TXT, for free!!

// Firebase is realtime, scales extremely well, direct browser to data.

// Originally built as a backend for online games, on different platforms.

https://www.firebase.com/docs/web/quickstart.html



//////////////////////////////////////

// $firebaseObject / $firebaseArray //

//////////////////////////////////////

1. These are two separate SERVICES.
2. Do not use 0 index arrays.

firebaseObject - Saving any old data.
firebaseArray   - Pretends your data is an array. fireBaseArray is firebase version of push!

// The Alpha Numeric Strings that firebase creates can be sorted by the millisecond.

In firebase, if you are handling multiples of something, plural, you want to use arrays.
Singlular item, like a username, you want to use firebaseObject.

Anytime you make a new Firebase, you are creating a ref/reference.