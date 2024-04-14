import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import Home from './routes/Home.tsx'
import PostsList from './routes/PostsList.tsx'
import Post from './routes/Post.tsx'
import About from './routes/About.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/posts",
        element: <PostsList />
      },
      {
        path: "/posts/:postid",
        element: <Post />
      },
      {
        path: "/about",
        element: <About />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// Handle theme based on OS conf
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark');
}