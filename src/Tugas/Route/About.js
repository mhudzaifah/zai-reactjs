import { useNavigate } from "react-router-dom";
import Styling from "../Styling";


const About =() =>{
    const navigate = useNavigate()
    const handleClick=() =>{
        navigate('../home')
    }
    return (
        <center>
            <div>
                <Styling />
            </div>
            <button onClick={handleClick} >Kembali Ke Home</button>
            <br />
            <br />
            <br />
            <br />
        </center>
        )
};
export default About;