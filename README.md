# MongoDB Case-Insensitive Regex Query Bug
This repository demonstrates a bug encountered when performing case-insensitive regular expression queries in MongoDB using the `$regex` operator with the `$options: 'i'` flag.

## Bug Description
The provided JavaScript code attempts to query a MongoDB collection for documents where the 'name' field matches 'john doe', regardless of case.  However, if the documents store the name as 'John Doe', the query fails to return any results, despite the use of the `$options: 'i'` flag for case-insensitivity. 

## Reproduction
1. Clone this repository.
2.  Install MongoDB and Node.js.
3. Ensure that you have a MongoDB instance running and have your connection string (uri) set up correctly in the `bug.js` file.
4. Run the `bug.js` script using Node.js: `node bug.js`
5. Observe that the query returns no results, even though a matching document ('John Doe') exists.

## Solution
The provided `bugSolution.js` file presents a corrected version, highlighting the correct usage of regular expressions in MongoDB.