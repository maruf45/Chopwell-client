import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Components/MainLayouts/MainLayouts";

export const router = createBrowserRouter([
    {path: '/', element: <MainLayouts/>, children: [
        {path: '/', element:''}
    ]} 
])