import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1 style={{textAlign: "center", fontFamily: "Fantasy-Copperplate"}}>Welcome to Homepage!</h1>
      <ol style={{display:"flex", justifyContent: "space-around"}}>
        <div>
          <li>
            <Link to="/counter"> Counter </Link>
          </li>
          <li>
            <Link to="/form"> Form </Link>
          </li>
          <li>
            <Link to="/controlledComponent"> Controlled Component </Link>
          </li>
          <li>
            <Link to="/uncontrolledComponent"> Uncontrolled Component </Link>
          </li>
          <li>
            <Link to="/parentComponent"> Parent Component </Link>
          </li>
          <li>
            <Link to="/myComponent"> MyComponent </Link>
          </li>
          <li>
            <Link to="/hocComponent"> HOC Component </Link>
          </li>
          <li>
            <Link to="/product"> Product </Link>
          </li>
          <li>
            <Link to="/condtional_rendering"> Conditinal Rendering </Link>
          </li>
          <li>
            <Link to="/context"> Context </Link>
          </li>
          <li>
            <Link to="/propsComp"> Props Component </Link>
          </li>
          <li>
            <Link to="/list"> List </Link>
          </li>
          <li>
            <Link to="/useStateEx1"> useStateEx1 </Link>
          </li>
          <li>
            <Link to="/useStateEx2"> useStateEx2 </Link>
          </li>
          <li>
            <Link to="/useEffectEx1"> useEffectEx1 </Link>
          </li>
          <li>
            <Link to="/useEffectArray"> useEffectArray </Link>
          </li>
          <li>
            <Link to="/useReducer"> useReducer </Link>
          </li>
          <li>
            <Link to="/useReducerCounter"> useReducerCounter </Link>
          </li>
          <li>
            <Link to="/table"> Table </Link>
          </li>
        </div>
        
        <div>
          <li>
            <Link to="/useContextParent"> useContextParent </Link>
          </li>
          <li>
            <Link to="/useRef"> useRef </Link>
          </li>
          <li>
            <Link to="/useRef1"> useRef1 </Link>
          </li>
          <li>
            <Link to="/useRef2"> useRef2 </Link>
          </li>
          <li>
            <Link to="/useMemo"> useMemo </Link>
          </li>
          <li>
            <Link to="/UseMemo1"> UseMemo1 </Link>
          </li>
          <li>
            <Link to="/useCallback"> useCallback </Link>
          </li>
          <li>
            <Link to="/useLayoutEffect"> useLayoutEffect </Link>
          </li>
          <li>
            <Link to="/useImperativeHandle"> useImperativeHandle </Link>
          </li>
          <li>
            <Link to="/usedeferredvalue"> usedeferredvalue </Link>
          </li>
          <li>
            <Link to="/useTransition"> useTransition </Link>
          </li>
          <li>
            <Link to="/useIdForm"> useIdForm </Link>
          </li>
          <li>
            <Link to="/useInsertionEffect"> useInsertionEffect </Link>
          </li>
          <li>
            <Link to="/customHooks"> customHooks </Link>
          </li>
          <li>
            <Link to="/customHooks2"> customHooks2 </Link>
          </li>
          <li>
            <Link to="/customHooks3"> customHooks3 </Link>
          </li>
          <li>
            <Link to="/customHooks4"> customHooks4 </Link>
          </li>
          <li>
            <Link to="/customHooks5"> customHooks5 </Link>
          </li>
          <li>
            <Link to="/newpage"> Newpage </Link>
          </li>
        </div>
      </ol>
    </>
  );
}

export default Home;
