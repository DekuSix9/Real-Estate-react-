import './Banner.css'
import bannerImg from '../../assets/Images/banner.svg'
import user1 from '../../assets/Images/user (1).svg'
import user2 from '../../assets/Images/user (2).svg'
import user3 from '../../assets/Images/user (3).svg'
import { useState } from 'react';

const Banner = () => {
       
    const[formData,setFormData]=useState({
        address:'',
        email:'',
        phone:''
    })
       
    const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    const handleSubmit = () => {
        if (!formData.address || !formData.email || !formData.phone) {
            alert('Please fill in all fields');
            return;
        }
        console.log(formData);
        alert('Form submitted successfully.');
        
    };


    return (
        <div className='banner'>
            <div className='banner-content'>
                {/* column 1 */}
                <div className='banner-left'>
                    <h1 className='banner-title'>Find Your Dream<br/> Home Today</h1>
                    <p className='banner-description'>Explore stunning properties and unlock 
                        exclusive <br/> listings tailored just for you.</p>
                        <div className='banner-actions'>
                            <button  className='banner-btn'>Find Now</button>
                            <div className='banner-users'>
                                <div className='user-images'>
                                    <img className='user-img' src={user1} alt="User 1" />
                                    <img className='user-img' src={user2} alt="User 2" />
                                    <img className='user-img' src={user3} alt="User 3" />
                                </div>
                                <h3 className='user-text'>Over 15K+ People <br/> find their Home</h3>
                            </div>
                        </div>
                              {/* form */}
                            <div className='search-box'>
                                <div className="field">
                                  <label  className="input-label">Address</label>
                                    <input name='address' type="text"  value={formData.address}
                                     onChange={handleChange} placeholder="Florida, United State"/>
                            </div>
                            <div className="field">
                                  <label  className="input-label">Email</label>
                                    <input name='email' type="email" value={formData.email} 
                                    onChange={handleChange} placeholder="example@gmail.com"/>
                            </div>
                            <div className="field">
                                  <label  className="input-label">Phone</label>
                                    <input name='phone' type="text" value={formData.phone}
                                     onChange={handleChange} placeholder="+912384683"/>
                            </div>

                            <button className="submit-btn" onClick={handleSubmit}>Submit Details</button>


                        </div>
                      
                        
                </div>
                     {/* column 2 */}
                 <div>
                    <img className='banner-img' src={bannerImg} alt="Banner" />
                </div>


            </div>
        </div>
    );
};

export default Banner;