//function component
function Header(props){//receive data from another component
    console.log(props);
    
    return (
        <header>
            <h1>Todo list</h1>
        </header>
    )

}
export default Header;