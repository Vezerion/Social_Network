import logo from '../../icons/logo.png'
import ExitBtn from '../common/exitBtn/exitBtn';
function Header(props) {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header_wrapper'>
                    <div className="header_logo">
                        <div className='logo_wrapper'>
                            <img className='logo' src={logo} alt="logo" />
                        </div>
                        <div className='header_text'>Tritter</div>
                    </div>
                    {props.isAuth ? `Вы вошли под пользователем: ${props.login}` : `Вы не выполнили вход`}
                    {props.isAuth &&(
                        <ExitBtn logout={props.logoutUser} isAuth={props.isAuth}/>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;