import { useEffect, useState } from "react";

const FADE_INTERVAL_MS = 1500;
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;
const INTERESTS = [
    `UX/ UI`,
    `Service Design`,
    `Front-end`,
    `Back-end`,
    `Cloud`,
];

type FadeProp = { fade: 'fade-in' | 'fade-out' };

export default function Profile() {
    const [fadeProp, setFadeProp] = useState<FadeProp>({ fade: 'fade-in' });
    const [wordOrder, setWordOrder] = useState(0);

    useEffect(() => {
        const fadeTimeout = setInterval(() => {
          setFadeProp((prevFadeProp) => ({
            fade: prevFadeProp.fade === 'fade-in' ? 'fade-out' : 'fade-in'
          }));
        }, FADE_INTERVAL_MS);
    
        return () => clearInterval(fadeTimeout);
      }, [fadeProp]);
    
      useEffect(() => {
        const wordTimeout = setInterval(() => {
          setWordOrder((prevWordOrder) => (prevWordOrder + 1) % INTERESTS.length);
        }, WORD_CHANGE_INTERVAL_MS);
    
        return () => clearInterval(wordTimeout);
      }, []);

    return (        
        <section className='py-24 sm:py-32 px-6 lg:px-10' style={{ backgroundColor: '#00dcda' }} >
            <div className='mx-auto container'>
                <div className="lg:flex lg:items-center lg:justify-between">
                    <h2 style={{ color: 'var(--ext-dark-blue-01)' }}>
                        Ready to dive in?
                    </h2>
                    <p className="font-semibold mt-6 text-2xl leading-8 text-white text-end">
                        Hi there ! I am Jere Sulovuo<br/>
                        An aspiring V-shaped programmer<br /> 
                        who has strong passion in<br /> 
                        <span className={fadeProp.fade} style={{ color: 'var(--ext-dark-blue-01)' }}>
                            {INTERESTS[wordOrder]}
                        </span>
                    </p>
                </div>
            </div>
        </section>
    )
  }
  