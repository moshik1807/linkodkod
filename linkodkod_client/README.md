# React + TypeScript + Vite

Project description: The program starts with a page that presents an option to register/login if one of them has not yet been performed.
After logging in or registering, you go to the home page where all existing posts are loaded with a fetch request. When you click on one of the posts, you enter a new page of a post that receives the id of this post and sends a request for a specific post.
Located on the pages at the top, a "Home" button and a "+" button. The home button sends you back to the main page and the + button sends you to the page for creating a new post that receives inputs there and sends them to the server.
The three requests, which are creation, receiving all posts, and receiving a single post, are sent with a token that is verified on the server and stored here in localstorege after logging in or connecting.
Against each page or component there is a css file in the styles folder


Installations required for the project:
1 npm react
2 npm jwt-decode
3 npm react-router
4 npm react-dom


Command to run the project:
npm run dev

Note: When creating a post with a link to an image, you must enter the name of the image from the public folder as it is written there, otherwise the post will not be uploaded.