# JS Debugging

Developers, whether they are beginners or experienced they definitely will make mistakes in their code,one of the main important skills for developers is problem solving, they have always to find these errors and give solutions. Debugging is a process that help us to find errors in our code.

First of all to find the error we should be familiar with the execution context.
Each time a script enters a new execution context, there are two phases
of activity:

1: PREPARE
In this step the new scope is created, and the variables, functions, and arguments are created.

2: EXECUTE
Now values will be assigned to variables, and the code will be executed.

We can use the developer tools in the browsers to find errors. Console is one of the powerful tools to debug and find the error type and line, however the error line is not always as it appears on the console, the console will show the line that the code stop running on it, the error might be in any previous lines.

There are 7 different types of errors in JS. Each error creates an object, which tell us its line number and gives a description of the error, as we said before.

Syntax Error, Type Error, Range Error are examples for the error types, however NaN is not an error, Nan tell us that we are trying to do math on strings, boolean or any other data type but not a number, and this is undoable.

