# Promises in JavaScript

*Asynchronous Programming • resolve • reject • then • catch • async/await*

## 1. What is a Promise?

A Promise is a JavaScript object that represents the future result of an asynchronous operation.
It is useful when the result is not available immediately.
Common examples: API requests, database operations, timers, file operations, and server
communication.
A Promise does NOT make JavaScript block the entire program.

Operation starts

Promise

Future result

Success / Failure

## 2. Promise States

PENDING

FULFILLED

REJECTED

Operation is still running

Operation completed successfully
```text
→ resolve()
```

Operation failed
```text
→ reject()
```

A Promise starts in the pending state.
It can settle only once: fulfilled OR rejected.

After it settles, the state cannot change again.

## 3. Why do we need Promises?

Asynchronous work may take an unknown amount of time.
JavaScript should continue executing other code instead of freezing while waiting.
Promises provide a structured way to receive the result later.
They also provide a standard way to handle success and failure.
```text
console.log("1");
```

```text
setTimeout(() => {
console.log("Data received");
}, 2000);
console.log("3");
```

Output: 1 → 3 → Data received

## 4. What can go wrong without proper handling?

The asynchronous operation starts.

```text
let data;
```

```text
setTimeout(() => {
data = "Student Data";
}, 2000);
console.log(data);
```

Output: undefined

JavaScript continues immediately.
```text
console.log(data) runs before the data is ready.
```

Two seconds later, data is assigned—but the earlier
```text
console.log already happened.
```

## 5. Creating a Promise

```text
function getStudentData() {
return new Promise((resolve, reject) => {
```

```text
});
```

```text
}
```

```text
new Promise((resolve, reject) => { ... })
```
creates a Promise.

```text
const success = true;
```

resolve(value) means success.

```text
if (success) {
resolve({
```
id: 101,
name: "Rahim",
department: "CSE",
cgpa: 3.92
```text
});
} else {
reject("Failed to get student data");
}
```

reject(error) means failure.
The Promise returned by the function can
be handled later.

## 6. Handling a Promise with .then() and .catch()

```text
getStudentData()
.then((student) => {
console.log("Student data received!");
console.log(student.name);
})
.catch((error) => {
console.log("Error:", error);
});
```

Promise fulfilled

```text
.then() executes
```

Promise rejected

```text
.catch() executes
```

## 7. Complete Example: Student Data

```text
function getStudentData() {
return new Promise((resolve, reject) => {
setTimeout(() => {
const success = true;
if (success) {
resolve({
```
id: 101,
name: "Rahim",
department: "CSE",
cgpa: 3.92
```text
});
} else {
reject("Failed");
}
}, 2000);
});
```

```text
}
getStudentData()
.then(student => console.log(student))
.catch(error => console.log(error));
```

The Promise starts as PENDING.

setTimeout simulates a server/API delay.
```text
After 2 seconds, resolve() fulfills the
```
Promise.
.then() receives the student object.

If reject() runs, .catch() handles the error.

## 8. Modern Approach: async / await

```text
async function displayStudent() {
try {
console.log("Getting student data...");
const student = await getStudentData();
```

```text
console.log("Student data received!");
console.log("ID:", student.id);
console.log("Name:", student.name);
console.log("CGPA:", student.cgpa);
} catch (error) {
console.log("Error:", error);
}
}
displayStudent();
```

```text
async makes a function asynchronous.
```

await waits for the Promise result inside that
```text
async function.
```
try/catch handles success and failure.
async/await is often easier to read than long
.then() chains.
await does NOT block the entire JavaScript
application.

## 9. The Complete Flow

Call function

Promise created
PENDING

Async operation
runs

```text
resolve() / reject()
```

```text
then() / catch()
```
executes

Example: API request → server processes request → response arrives → Promise resolves → UI uses the data.

This same concept appears in fetch(), databases, Node.js, Express, and many modern JavaScript libraries.

## 10. Promise vs Callback

Callbacks can handle asynchronous operations, but
deeply nested callbacks can become difficult to read
and maintain.
Promises provide a standard structure for success and
failure.
```text
Promise chaining with .then()/.catch() reduces
```
callback nesting.
async/await makes Promise-based code look more
like sequential code.

// Callback style
```text
getUser(user => {
getOrders(user, orders => {
getPayment(orders, payment => {
sendInvoice(payment, invoice => {
console.log(invoice);
});
});
});
});
```

// Promise style
```text
getUser()
.then(getOrders)
.then(getPayment)
.then(sendInvoice)
.catch(handleError);
```

## 11. Important Playground Lesson

If a playground shows only 'Getting student data...' and
'Promise started...' and never reaches the result, check the
execution environment.

```text
async function displayStudent() {
console.log("Getting student data...");
```

A real browser or Node.js runtime keeps the event loop alive
```text
while setTimeout/API work is pending.
```

```text
const student = await getStudentData();
```

```text
console.log("Student data received!");
```

```text
Make sure the function is actually called: displayStudent();
```

```text
}
```

The Promise itself is still correct: pending →
resolved/rejected → continuation runs.

```text
displayStudent();
```

Expected: result appears after the simulated 2-second delay

## 12. Quick Summary

Promise

Represents a future result

```text
resolve()
```

Success

```text
reject()
```

Failure

```text
.then()
```

Handles success

```text
.catch()
```

Handles errors

```text
.finally()
```

Runs after settlement

async

Marks a function as asynchronous

await

Gets the Promise result inside async code
