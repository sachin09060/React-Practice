import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import ControlledComponent from "../forms/ControlledComponent";
import UncontrolledComponent from "./../forms/UncontrolledComponent";
import ParentComponent from "./../props/ParentComponent";
import Form from "../forms/Form";
import MyComponent from "./../state/MyComponent";
import Counter from "./../state/Counter";
import Greeting from "../conditionalRendering/Greeting";
import MainRunner from "../context/MainRunner";
import ProductProps from "../props/ProductProps";
import { PropsComParent } from "../props/PropsComParent";
import { ReactList } from "../list/NavBar";
import { UseStateEx1 } from "../state/UseStateEx1";
import { UseStateEx2 } from "../state/UseStateEx2";
import { UseEffectEx1 } from "../useEffect/UseEffectEx1";
import { UseEffectArray } from "../useEffect/UseEffectArray";
import { UseReducer } from "../useReducer/UseReducer";
import { UseReducerCounter } from "../useReducer/UseReducerCounter";
import { Component1 } from "../useContext/Component1";
import { UseRef } from "../useRef/UseRef";
import { UseMemo } from "../useMemo/UseMemo";
import UseCallbackParent from "../useCallback/UseCallbackParent";
import { UseLayoutEffect } from "../useLayoutEffect/UseLayoutComponent";
import { UseImperativeHandle } from "../useImperativeHandle/UseImperativeHandle";
import { SearchComponent } from "../useDeferredValue/SearchComponent";
import { UseTransition } from "../useTransition/UseTransition";
import { UseIdForm } from "../useId/UseIdForm";
import { UseInsertionEffect } from "../useInsertionEffect/UseInsertionEffect";
import UseMemo1 from "../useMemo/useMemo1";
import FocusInput from "../useRef/FocusInput";
import HookTimer from "../useRef/HookTimer";

function RoutersPage() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/controlledComponent"
            element={<ControlledComponent />}
          />
          <Route
            path="/uncontrolledComponent"
            element={<UncontrolledComponent />}
          />
          <Route path="/parentComponent" element={<ParentComponent />} />
          <Route path="/form" element={<Form />} />
          <Route path="/myComponent" element={<MyComponent />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/product" element={<ProductProps />} />
          <Route path="/condtional_rendering" element={<Greeting />} />
          <Route path="/context" element={<MainRunner />} />
          <Route path="/propsComp" element={<PropsComParent />} />
          <Route path="/list" element={<ReactList />} />
          <Route path="/useStateEx1" element={<UseStateEx1 />} />
          <Route path="/useStateEx2" element={<UseStateEx2 />} />
          <Route path="/useEffectEx1" element={<UseEffectEx1 />} />
          <Route path="/useEffectArray" element={<UseEffectArray />} />
          <Route path="/useReducer" element={<UseReducer />} />
          <Route path="/useReducerCounter" element={<UseReducerCounter />} />
          <Route path="/useContextParent" element={<Component1 />} />
          <Route path="/useRef" element={<UseRef />} />
          <Route path="/useRef1" element={<FocusInput />} />
          <Route path="/useRef2" element={<HookTimer />} />
          <Route path="/useMemo" element={<UseMemo />} />
          <Route path="/UseMemo1" element={<UseMemo1 />} />
          <Route path="/useCallback" element={<UseCallbackParent />} />
          <Route path="/useLayoutEffect" element={<UseLayoutEffect />} />
          <Route
            path="/useImperativeHandle"
            element={<UseImperativeHandle />}
          />
          <Route path="/usedeferredvalue" element={<SearchComponent />} />
          <Route path="/useTransition" element={<UseTransition />} />
          <Route path="/useIdForm" element={<UseIdForm />} />
          <Route path="/useInsertionEffect" element={<UseInsertionEffect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutersPage;
