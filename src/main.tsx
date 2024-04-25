import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import Home from './routes/Home.tsx'
import { PostsList, loader as PostsListLoader } from './routes/PostsList.tsx'
import { PostPage, loader as PostLoader } from './routes/PostPage.tsx'
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
        loader: PostsListLoader,
        element: <PostsList />
      },
      {
        path: "/posts/:_id",
        loader: PostLoader,
        element: <PostPage />
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