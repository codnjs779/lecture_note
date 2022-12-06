import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Videos from "./pages/Videos";
import DetailVideos from "./pages/DetailVideos";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound from "./pages/NotFound";
const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {index: true, element: <Videos/>},
            {path: 'videos', element: <Videos/>},
            {path: 'videos/:keyword', element: <Videos/>},
            {path: 'videos/watch/:videoId', element: <DetailVideos/>},
        ],
    },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
