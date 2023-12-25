import  logo from '../../assets/img/Todo.svg'


const Header = () => {
    return (
        <>
            <header className='header mb-5 py-2 px-3'>
                <div className='row'>
                    <div className='col'>
                        <a href="/" className='logo'>
                            <img src={logo} alt="todo logo" />
                            <span>Todo</span>
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;