import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import ControlledComponent from "../forms/ControlledComponent"
import UncontrolledComponent from "./../forms/UncontrolledComponent"
import ParentComponent from "./../props/ParentComponent"
import Form from "../forms/Form"
import MyComponent from "./../state/MyComponent"
import Counter from "./../state/Counter"
import Greeting from "../conditionalRendering/Greeting"
import MainRunner from "../context/MainRunner";
import ProductProps from "../props/ProductProps";
import { PropsComParent } from "../props/PropsComParent";
import { ReactList } from "../list/NavBar";
import { UseStateEx1 } from "../state/UseStateEx1";
import { UseStateEx2 } from "../state/UseStateEx2";
import { UseEffectEx1 } from "../useEffect/UseEffectEx1";
import { UseEffectArray } from "../useEffect/UseEffectArray";


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
            <Route path="/propsComp" element={<PropsComParent/>}/>
            <Route path="/list" element={<ReactList/>}/>
            <Route path="/useStateEx1" element={<UseStateEx1/>}/>
            <Route path="/useStateEx2" element={<UseStateEx2/>}/>
            <Route path="/useEffectEx1" element={<UseEffectEx1/>}/>
            <Route path="/useEffectArray" element={<UseEffectArray/>}/>
        </Routes>
        </BrowserRouter>
        </>
    );
}   

export default RoutersPage;