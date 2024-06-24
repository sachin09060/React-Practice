import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const UseStateEx1 = () => {

    const [name, setName] = useState("Virat Kohli")

    const handleChange = () => {
        setName("Rohith Sharma")
    }

    const navigate = useNavigate()

    const handleBack = () => {
        navigate("/")
    }

    return (
        <>
        <h1>{name}</h1>
        <button onClick={handleChange}>Change Name</button>
        <button onClick={handleBack}>Back</button>
        </>
    )
}