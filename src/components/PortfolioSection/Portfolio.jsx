import './Portfolio.css';
import statImg from '../../assets/Images/portfolio.svg';

const Portfolio = () => {

    const stats = [
    { number: '1200+', label: 'Total Projects' },
    { number: '15k+',  label: 'Happy Clients'  },
    { number: '160+',  label: 'Mega Projects'  },
    { number: '200+',  label: 'Partners'        }];

    return (
        <div className='main-container'>
            <div className='content-container'>
                <div className='text-container'>
                      <h1 className='title-text'>Shaping the Future of<br/> Real Estate Excellence</h1>
                      <p className='description-text'>Celebrating years of success, trust, and client satisfaction. From award-winning 
                        service to hundreds of happy homeowners, our journey is marked by growth, innovation,
                         and exceptional results.</p>
                </div>
              
              <div className='stats-card'>
                  <img className='stat-img' src={statImg} />
                  <div className='stats-grid'>
                    {
                        stats.map((stat,index)=>
                        <div className='stat-item' key={index}>
                            <h2 className='stat-number'>{stat.number}</h2>
                            <p className='stat-label'>{stat.label}</p>
                        </div>)
                    }
                  </div>
                   
              </div>

            </div>     
        </div>
    );
};

export default Portfolio;