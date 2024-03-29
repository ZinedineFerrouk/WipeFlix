import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from "./App";
import Home from './pages/Home';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={ <App/> }>
            <Route index element={ <Home/> }/>
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<RouterProvider router={ router }/>
);
