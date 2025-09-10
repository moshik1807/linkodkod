Project Description:
We have an Express server with routing to two routes, one related to users and one to posts.
User Router:
It has two references, one for login and one for registration: both of them receive a name and password from the client, the connection point routes to a controller that refers to a service that uses the user's log in process. This process encrypts the password and writes the person to the users' gson file, and in addition, creates a token after successful registration and sends it to the server. The connection point does a similar process of routing between the folders, searches for this person in the users' gson, and if this user is found, creates a token and sends it to the server.
Post Router:
It has three points: one brings all posts to the server, the second brings a single post according to the ID received in the farms, and the third creates a post.
The routing for receiving all posts routes to a controller that uses a service that uses a dele, reads the entire file and returns it as an array to the client.
The routing for a specific post does a similar routing process but uses a different function that works with IDs.
And the creation routing also parses the data it receives and writes it into the posts' gson file.

Required installations:
1 npm i bcrypt
2 npm i cors
3 npm i express
4 npm i jsonwebtoken
5 npm i jwt-decode

Command to run the project:
node --env-file=.env app.js

Create an env file containing
key to token