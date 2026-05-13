import './Sectors.css';
import icon1 from '../../assets/Images/black-round.svg';
import icon2 from '../../assets/Images/white-round.svg';
import prev from '../../assets/Images/Arrow - Down - Iconly Pro.svg';
import next from '../../assets/Images/Arrow - Down - Iconly Pro (1).svg';
import { useEffect, useState } from 'react';

const Sectors = () => {
    const [cards,setCards]=useState([]);
    const [startIndex, setStartIndex]=useState(0);

        useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setCards(data))

    }, []);

    const uniqueCards = cards.filter(
        (card, index, self) =>
            index === self.findIndex(
                item => item.sector === card.sector
            )
    );

    const handleNext = () => {
        if (startIndex + 4 < uniqueCards.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };
    
    return (
        <div id='main-container'>
            <div className='title-container'>
                <div>
                    <h3 className='sub-title'>Our Sectors</h3>
                    <h1 className='sector-title'>Diverse Expertise,<br/> Unmatched Results</h1>
                </div>
                <div className='navigation-buttons'>
                    <div  className='prev-button'   onClick={handlePrev}>
                       <img className='circle-icon' src={icon2} alt="Next Button" />
                       <img className='arrow-icon' src={prev} alt="Next Arrow" />
                    </div>
                   
                   <div className='next-button' onClick={handleNext} >
                      <img className='circle-icon' src={icon1} alt="Previous Button" />
                       <img className='arrow-icon' src={next} alt="Previous Arrow" /> 
                   </div>
                   </div>
                </div>
                {/* cards */}
                <div className='cards-container'>
                    {
                        uniqueCards.slice(startIndex, startIndex + 4).map(card => (
                            <div key={card.id} className='card'>
                                <img className='sector-img' src={card.image}></img>
                                <h1 className='sector-text'>{card.sector}</h1>
                            </div>
                        ))
                    }                 
                </div>

            </div>
            
      
    );
};

export default Sectors;