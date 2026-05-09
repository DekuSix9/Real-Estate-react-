import './About.css';
import img1 from '../../assets/Images/service1.svg';
import img2 from '../../assets/Images/service2.svg';
import logo from '../../assets/Images/about logo.svg'
const About = () => {
    return (
        <div className='about-container'>
            <div className='about-content'>
                {/* 1st column */}
               <div className='left-container'>
                 <h1 className='title'>Crafting Connections,<br/> Building Dreams</h1>
                 <p className='text'>we are dedicated to making your real estate journey seamless and enjoyable.
                     Our team of experienced professionals offers personalized service, in-depth market knowledge,
                     and innovative solutions to help you find the right property.
                     </p>
                     <img src={img1} className='leftImg' alt="Service 1" />
               </div>
                {/* 2nd column */}
               <div>
                 <img src={img2} className='rightImg' alt="Service 2" />
                 <div className='logoText'>
                      <img className='logo' src={logo} alt="Logo" />
                      <h1 className='logoTitle'>Nexthome</h1>
                 </div>
               </div>

            </div>
        </div>
    );
};

export default About;