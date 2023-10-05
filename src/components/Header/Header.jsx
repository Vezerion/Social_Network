import logo from '../../icons/logo.png'
function Header(props) {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header_wrapper'>
                    <div className='logo_wrapper'>
                        <img className='logo' src={logo} alt="logo" />
                    </div>
                    <div className='header_text'>Tritter</div>
                    {props.isAuth ? `Вы вошли под пользователем: ${props.login}` : `Вы не выполнили вход`}
                </div>
            </div>
        </header>
    );
}

export default Header;