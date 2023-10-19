import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ExitBtn (props) {
    const logout = () => {
        props.logout();
    }
    const navigate = useNavigate();
    useEffect(()=>{
        if(!props.isAuth) {
            navigate('/login');
        }
    }, [props.isAuth, navigate])
    return (
        <button className="exitBtn" onClick={logout}>Exit</button>
    )
}

export default ExitBtn;