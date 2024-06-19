import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import ControlledComponent from "../forms/ControlledComponent"
import UncontrolledComponent from "./../forms/UncontrolledComponent"
import ParentComponent from "./../props/ParentComponent"
import Form from "../forms/Form"
import MyComponent from "./../state/MyComponent"
import Counter from "./../state/Counter"
import Product from "./../props/Product"
import Greeting from "../conditionalRendering/Greeting"
import MainRunner from "../context/MainRunner";
import ProductProps from "../props/ProductProps";


function RoutersPage(){
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/controlledComponent" element={<ControlledComponent/>}/>
            <Route path="/uncontrolledComponent" element={<UncontrolledComponent/>}/>
            <Route path="/parentComponent" element={<ParentComponent/>}/>
            <Route path="/form" element={<Form/>}/>
            <Route path="/myComponent" element={<MyComponent/>}/>
            <Route path="/counter" element={<Counter/>}/>
            <Route path="/product" element={<ProductProps/>}/>
            <Route path="/condtional_rendering" element={<Greeting/>}/>
            <Route path="/context" element={<MainRunner/>}/>
        </Routes>
        </BrowserRouter>
        </>
    );
}   

export default RoutersPage;