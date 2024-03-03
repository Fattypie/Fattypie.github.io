import React, { useEffect, useState } from 'react';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';
import './experience.css';

const Experience = () => {
  const [activeCards, setActiveCards] = useState([]);

  const cards = [
    { title: 'Web Design', skills: ['Adobe Program', 'Figma'] },
    { title: 'Frontend Development', skills: ['HTML & CSS', 'JavaScript', 'React & Redux', 'Shopify', 'WordPress'] },
  ];

  const rotateCards = () => {
    let angle = 0;
    document.querySelectorAll('.card').forEach((card, index) => {
      if (activeCards[index]) {
        card.style.transform = 'translate(-100vw, -120vh) rotate(-48deg)';
      } else {
        //card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
        card.style.transform = '';
      }
    });
  };

  useEffect(() => {
    rotateCards();
  }, [activeCards]);

  const handleScroll = () => {
    const stackAreaTop = document.querySelector('.stack_area').getBoundingClientRect().top;
    const proportion = stackAreaTop / window.innerHeight;

    if (proportion <= 0.3) {
      const n = cards.length;
      const index = Math.ceil(Math.abs(proportion) * n - 0.5);

      

      setActiveCards(Array.from({ length: n }, (_, i) => i <= index));
    }else {
      // Falls das Element nicht mehr sichtbar ist, alle Karten als inaktiv markieren
      setActiveCards(Array.from({ length: cards.length }, () => false));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    <section id="experience">
      <div className='text-field'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      </div>

      <div className="stack_area">
        <div className="container experience_container">
          {cards.map((card, i) => (
            <div key={i} className={`experience_card card`}>
              <h3>{card.title}</h3>
              <div className="card_content">
                {card.skills.map((skill, j) => (
                  <div key={j} className="experience_skill">
                    <BsFillBookmarkCheckFill className="experience_detail-icon" />
                    <div>
                      <h4>{skill}</h4>
                      <small className="text-light">Experienced</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
