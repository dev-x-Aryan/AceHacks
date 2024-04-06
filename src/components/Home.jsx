import './Home.css';
import Navbar from './Navbar';
import img from "../assets/img1Emblem-removebg-preview.jpeg";

const Home = () => {
    return (  
        <div className="home">
            <div className='nav'>
                <Navbar />
            </div>
            
            <div className='content'>
                    <p className='tagline'>Every Choice Matters!!</p>
                    <img src={img} alt="png" className='image'></img>
            </div>
        </div>
    );
}
 
export default Home;