import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import FormQuiz from "./pages/FormQuiz";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/quiz-form",
        element: (
          // <AuthLayout authentication>
          <FormQuiz />
          // </AuthLayout>
        ),
      },
      // {
      //   path: "/login",
      //   element: (
      //     <AuthLayout authentication={true}>
      //       <Login />
      //     </AuthLayout>
      //   ),
      // },
      // {
      //   path: "/signup",
      //   element: (
      //     <AuthLayout authentication={false}>
      //       <Signup />
      //     </AuthLayout>
      //   ),
      // },
      // {
      //   path: "/all-posts",
      //   element: (
      //     <AuthLayout authentication>
      //       <AllPosts />
      //     </AuthLayout>
      //   ),
      // },
      // {
      //   path: "/edit-post/:slug",
      //   element: (
      //     <AuthLayout authentication>
      //       {" "}
      //       <EditPost />
      //     </AuthLayout>
      //   ),
      // },
      // {
      //   path: "/post/:slug",
      //   element: <Post />,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Provider> */}
    <RouterProvider router={router} />
    {/* </Provider> */}
    {/* <App /> */}
  </StrictMode>
);
