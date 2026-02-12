import './resume.css';
import { useEffect, useState, useRef } from 'react';


function Resume() {

    const programmingSkillsArray = [
        '.NET', 
        'PHP', 
        'Python', 
        'SQL', 
        'Java', 
        'html/css', 
        'Javascript', 
        'React', 
        'C#', 
        'PostgreSQL', 
        'MariaDB', 
        'Docker'
        ];

    const lifeSkillsArray = [
        'Running',
        'Programming',
        'Being a funny guy',
        'Being a good boyfriend',
        'Lifting'
        ];
    
        const lifeLanguagesArray =[
            'Norwegian  (10/10)',
            'English    (10/10)',
            'Portuguese (8/10)',
            'Spanish    (6/10)'
        ]





    const animatedRef = useRef(null);
    const animatedRef2 = useRef(null);
    const animatedRef3 = useRef(null);

    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {setIsVisible(entry.isIntersecting);},{threshold: 0.5,});

        const observer2 = new IntersectionObserver(([entry]) => {setIsVisible2(entry.isIntersecting);},{threshold: 0.5,});

        const observer3 = new IntersectionObserver(([entry]) => {setIsVisible3(entry.isIntersecting);},{threshold: 0.5,});

        if(animatedRef.current) {
            observer.observe(animatedRef.current);
        }
        if(animatedRef2.current) {
            observer2.observe(animatedRef2.current);
        }
        if(animatedRef3.current) {
            observer3.observe(animatedRef3.current);
        }
    }, []);



    return (
        <div id='skills'>
            <div 
                ref={animatedRef}
                className={`resume-card1 ${isVisible ? "in" : "out"}`}
            >
                <div 
                    id='programmingSkills'
                >
                    <h1>My skills as a programmer</h1>
                    <div id='programmingSkillsGrid'>
                    {programmingSkillsArray.map((skill) => <div className='gridItem hover:animate-grid-item-move' key={skill}>{skill}</div>)}
                    </div>
                </div>
            </div>
            <div 
                ref={animatedRef2}
                className={`resume-card2 ${isVisible2 ? "in" : "out"}`}
            >
                <div id='lifeSkills'>
                    <h1> My life skills</h1>
                    <div id='lifeSkillsGrid'>
                    {lifeSkillsArray.map((skill) => <div className='gridItem hover:animate-grid-item-move' key={skill}>{skill}</div>)}
                    </div>
                </div>
            
            </div>
            <div 
                ref={animatedRef3}
                className={`resume-card3 ${isVisible3 ? "in" : "out"}`}
            >
               <div id='lifeLanguages'>
                    <h1> Languages i know</h1>
                    <div id='lifeLanguagesGrid'>
                    {lifeLanguagesArray.map((skill) => <div className='gridItem hover:animate-grid-item-move' key={skill}>{skill}</div>)}
                    </div>
                </div> 
            </div>
            

        </div>
    );
}

export default Resume;