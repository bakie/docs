# Object-Oriented Programming (OOP) With JavaScript

## Table of contents
* [What is Object-Oriented Programming?](#what-is-object-oriented-programming)
* [OOP in JavaScript](#oop-in-javascript)

## What is Object-Oriented Programming?
* programming paradigm based on the concepts of objects
* we use object to model (describe) real-world or abstract features
* objects may contain data (properties) and code (methods). By using objects, we pack data and the corresponding behavior into one block
* objects are self-contained pieces/blocks of code
* object are building blocks of applications, and interact with one another
* interactions happen through a public interface: methods that the code outside of the object can access and use to communicate with the object
* class: a 'blueprint' from which we can create new objects
* instance: a new object created from a class

4 fundamental oop principles:
* Abstraction: Ignoring or hiding details that don't matter. Allowing us to get an overview perspective of the thing we are implementing, instead of messing with details that don't really matter to our implementation
* Encapsulation: Keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be exposed as a public interface
* Inheritance: Making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allows us to reuse common logic and to model real-world relationships
* Polymorphism: A child class can overwrite a method it inherited from a parent class

## OOP in JavaScript
* JavaScript uses prototypes
* Prototypes contain methods and objects can access methods
  * objects are linked to a prototype object
  * prototypal inheritance: The prototype contains methods (behavior) that are accessible to all objects linked to that prototype
* Behavior is delegated to the linked prototype object

3 ways of implementing prototypal inheritance in JavaScript:
* constructor functions
  * technique to create objects from a function
  * this is how built-in objects like Arrays, Maps or Sets are actually implemented
* ES6 classes
  * modern alternative to constructor function syntax
  * 'syntactic sugar': behing the scenes, ES6 classes work exactly like constructor functions
  * ES6 classes do not behave like classes in 'classical OOP'
* Object.create()
  * the easiest and most straightforward way of linking an object to a prototype object