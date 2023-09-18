import logo from '../../icons/logo.png'
function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header_wrapper'>
                    <div className='logo_wrapper'>
                        <img className='logo' src={logo} alt="logo" />
                    </div>
                    <div className='header_text'>Tritter</div>
                </div>
            </div>
        </header>
    );
}

export default Header;