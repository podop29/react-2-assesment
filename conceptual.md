### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  React Router is a JS Library for client side routeing, Allows changing browser url and rendering components accordingly

- What is a single page application?
The browser loads all the html/js the first time you visit the site. Then it only rerenders without ever refreshing the whole site.

- What are some differences between client side and server side routing?
  Serverside routing you download the entire webpage when a link is clicked
  Clientside the content is simply rerendered and displayed.

- What are two ways of handling redirects with React Router? When would you use each?
You can use a normal redirect component which will do the job but wont save it to the history so you can use the back and forward buttons
Or you can useNavigate (before it was useHistory but was depreciated) which will redirect you and save the history

- What are two different ways to handle page-not-found user experiences using React Router? 
  You can put a 404 page component at the bottom of your switch so if no route is matched it will render

- How do you grab URL parameters from within a component using React Router?
  Very similar to the way you you do it in express by doing the path="/users/:id" 
  and then you can use the useParams() hook to get the param in the component

- What is context in React? When would you use it?
  It is used to solve the problem of prop drilling
  Can pass down and use data in any component

- Describe some differences between class-based components and function
  components in React.
  A class component requires you to extend from React and create a render function that returns a react element
  Functional components have no render component and are just plain javascript functions.

- What are some of the problems that hooks were designed to solve?
-Hooks allow you to always use functions instead of having to switch between functions and classes
They make development simpler by reducing the amount of concepts you need to use.