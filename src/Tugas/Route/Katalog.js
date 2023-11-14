import { useNavigate } from "react-router-dom";
import Form from "../Form";

const Katalog=() =>{
    const navigate = useNavigate()
    const handleClick=() =>{
        navigate('../home')
    }
    return (
        
        <div>
            <Form />
        <center>
            <button onClick={handleClick} >Kembali Ke Home</button>
            <br />
            <br />
            <br />
            <br />
            <br />

        </center>
        </div>
        )
};
export default Katalog;