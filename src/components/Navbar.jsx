import './Navbar.css';

const Navbar = () => {
    return (  
        <div className="nav-container">
            <div className="nav-header">
                DigiBharat
            </div>
            <div>
                <ul className="nav-links">
                    <li>Active Polls</li>
                    <li>Post Poll</li>
                    <li>My wallet</li>
                    <li>My Polls</li>
                </ul>
            </div>
        </div>
    );
}
 
export default Navbar;