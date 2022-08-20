
const NavBar =()=>{
    return(
        <nav style={{ backgroundColor: '#282c34' ,padding: '10px' }}>
            <ul>
                <li style={{display:"inline",margin:0,"margin-top":'0',"border":'1px solid #61dafb',padding:4}}> 
                    <a href="https://www.sportsmosquera.com" style={{"text-decoration":'none',margin:0,padding:4,color:'white'}}>SportsMosquera</a>
                </li>
                <li style={{display:"inline",margin:0,"margin-top":'0',"border":'1px solid #61dafb',padding:4}}>
                    <a href="https://www.sportsmosquera.com" style={{"text-decoration":'none',margin:0,padding:4,color:'white'}}>Carrito de compras</a>
                </li>
                <li style={{display:"inline",margin:0,"margin-top":'0',"border":'1px solid #61dafb',padding:4 }}>
                    <a href="https://www.sportsmosquera.com" style={{"text-decoration":'none',margin:0,padding:4,color:'white'}}>Acerca de</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
