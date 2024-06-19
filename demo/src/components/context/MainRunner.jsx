import { useNavigate } from "react-router-dom";
import { CounterProvider } from "./CounterProvider";
import GrandParent from "./GrandParent";

const MainRunner = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/");
    }

    return(
        <>
        <CounterProvider>
            <GrandParent/>
        </CounterProvider>
        <br />
        <button onClick={handleBack}>
            Back
        </button>
        </>
    );
}

export default MainRunner;