# Explaining Value vs. Reference in Javascript

Summary by Ben Rogers, based on an [article of the same name](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0) by Arnav Aggarwal
>For Lambda School,
>Assigned in Training Kit:
>WEB21, UNIT3, SPRINT11, The Reducer Pattern
>
>
>---

---

  > Javascript has 5 data types that are passed by value: Boolean, null, undefined, String, and Number. We’ll call these primitive types.
Javascript has 3 data types that are passed by reference: Array, Function, and Object. These are all technically Objects, so we’ll refer to them collectively as Objects.
  > 
  > -- Arnav Aggarwal

---

## Primatives

  > If a primitive type is assigned to a variable, we can think of that variable as containing the primitive value.
  > 
  > When we assign (a) variable(s) (containing a primitive) to (an)other variable(s) using =, we copy the value to the new variable. They are copied by value.
  > 
  > Changing one (primitive variable) does not change the other. Think of these variables as having no relationship to each other
  > 
  > --Arnav Aggarwal
  > 
----



## Objects
  > Variables that are assigned a non-primitive value are given a reference to that value. That reference points to the object’s location in memory. The variables don’t actually contain the value.
  > 
  > --Arnav Aggarwal
  > 
  > When a reference type value, an object, is copied to another variable using =, the address of that value is what’s actually copied over as if it were a primitive. __Objects are copied by reference instead of by value.__


### Assigning By Reference


  > When a reference type value, an object, is copied to another variable using =, the address of that value is what’s actually copied over as if it were a primitive. __Objects are copied by reference instead of by value.__



### Reassigning a Reference

  > When there are no references to an object remaining, the Javascript engine can perform garbage collection. This just means that the programmer has lost all references to the object and can’t use the object any more, so the engine can go ahead and safely delete it from memory. 

## == and ===

  > When the equality operators, == and ===, are used on reference-type variables, they check the reference. If the variables contain a reference to the same item, the comparison will result in true.
  > 
  > If they’re distinct objects, even if they contain identical properties, the comparison will result in false.
  > 
  > If we have two distinct objects and want to see if their properties are the same, the easiest way to do so is to turn them both into strings and then compare the strings. When the equality operators are comparing primitives, they simply check if the values are the same.

## Passing Parameters Through Functions

  > When we pass primitive values into a function, the function copies the values into its parameters. It’s effectively the same as using =.

### Pure Functions

  > As long as a function only takes primitive values as parameters and doesn’t use any variables in its surrounding scope, it is automatically pure, as it can’t affect anything in the outside scope. All variables created inside are garbage-collected as soon as the function returns.
  > 
  > A function that takes in an Object, however, can mutate the state of its surrounding scope. If a function takes in an array reference and alters the array that it points to, perhaps by pushing to it, variables in the surrounding scope that reference that array see that change. After the function returns, the changes it makes persist in the outer scope. This can cause undesired side effects that can be difficult to track down.
  > 
  > Many native array functions, including Array.map and Array.filter, are therefore written as pure functions. They take in an array reference and internally, they copy the array and work with the copy instead of the original. This makes it so the original is untouched, the outer scope is unaffected, and we’re returned a reference to a brand new array.

