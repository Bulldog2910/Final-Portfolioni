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

    const programmingSkillsOutput = programmingSkillsArray.map((programmingLanguage) =>
                        <li>{programmingLanguage}</li>
    );
    const lifeSkillsOutput = lifeSkillsArray.map((lifeSkill) =>
                        <li>{lifeSkill}</li>
    );
    const lifeLanguagesOutput = lifeLanguagesArray.map((lifeLanguages) =>
                        <li>{lifeLanguages}</li>
    );


    const animatedRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {setIsVisible(entry.isIntersecting);},{threshold: 0.5,});

        if(animatedRef.current) {
            observer.observe(animatedRef.current);
        }
    }, []);



    return (
        <div id='skills'>
            <div 
                ref={animatedRef}
                className={`resume-card ${isVisible ? "in" : "out"}`}
            >
                <div 
                    id='programmingSkills'
                >
                    <h1>My skills as a programmer</h1>
                    <ul>{programmingSkillsOutput}</ul>
                </div>
            </div>
            
            <div id='lifeSkills'>
                <h1> My life skills</h1>
                <ul>{lifeSkillsOutput}</ul>
            </div>
            <div id='lifeLanguages'>
                <h1> Languages i know</h1>
                <ul>{lifeLanguagesOutput }</ul>
            </div>

        </div>
    );
}

export default Resume;