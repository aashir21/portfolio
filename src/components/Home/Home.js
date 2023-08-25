import React, {useState, useRef,useEffect} from 'react'
import gsap from "gsap"
import "../../dist/css/Home.css"
import SkillCard from '../SkillCard/SkillCard';
import { data, projects,jobs} from "./data"
import {animate} from "./functions"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Resume from "../../AASHIR_SIDDIQUI_Resume.docx.pdf"
import RetroButton from '../RetroButton/RetroButton';
import ExperienceCard from '../ExperienceCard/ExperienceCard';

function Home() {

    const[count,setCount] = useState(0);
    const aboutSection = useRef(null)
    const skillSection = useRef(null)
    const experienceSection = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {

        const el = aboutSection.current;
        const skill = skillSection.current;
        const experience = experienceSection.current;

        animate()
        gsap.fromTo(".about-me", {opacity: 0}, {opacity: 1, duration: 1, ease: "power3.inOut" ,scrollTrigger: {
            trigger: el
        }})

        gsap.fromTo(".skills-section", {opacity: 0, x: -200}, {opacity: 1, duration: 1, ease: "expo.out", x: 0 ,scrollTrigger: {
            trigger: skill,
        }})

        gsap.fromTo(".experience-section", {opacity: 0, y:  200}, {opacity: 1, duration: 2, ease: "expo.out", y: 0 ,scrollTrigger: {
            trigger: experience,
        }})

    },[])

    const handleNext = () => {
        if(count === projects.length - 1){
            let num = 0;
            setCount(num)
        }
        else{

            let num = count + 1;
            setCount(num)
        }
        gsap.fromTo(".project-title", {opacity: 0,duration: 700}, {opacity: 1})
        gsap.fromTo(".point", {opacity: 0, duration: 100}, {opacity: 1, delay: 0.5,stagger:0.5})

        
    }

    const handlePrev = () => {
        if(count === 0){
            let num = 0;
            setCount(num)
        }
        else{

            let num = count - 1;
            setCount(num)
        }
        gsap.fromTo(".project-title", {opacity: 0,duration: 1}, {opacity: 1})
        gsap.fromTo(".point", {opacity: 0, duration: 0.5}, {opacity: 1, delay: 1,stagger:0.5})

        
    }

    return (
        <React.Fragment>
            <section className='hero-section'>
                <div className='hero-container'>
                    <h1 className='title'>Hi, I am Aashir</h1>
                    <h3 className='sub-title'>Full Stack Developer</h3>
                    <div className='avatar-con'>
                        <img className='avatar' src='https://cdn2.iconfinder.com/data/icons/male-avatars/512/avatars_accounts___man_male_people_person_wavy_hair_jacket_turtleneck.png'></img>
                    </div>
                    <div className='contact-svg'>
                        <a href='https://github.com/aashir21' target='_blank'><svg className='hero-svg' viewBox="0 0 24 24" fill="#FFFF" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.1727 20.8173 18.8977 19.5415 20.1198 17.8395C21.3419 16.1376 21.9995 14.0953 22 12C22 6.475 17.525 2 12 2Z" fill="#FFFFF"></path> </g></svg></a>
                        <a href='https://www.linkedin.com/in/aashir21/' target='_blank'><svg className='hero-svg' fill="#FFFF" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path> </g></svg></a>
                    </div>
                </div>
            </section>

            <section className='about-me'>
                <div className='about-me-con'>
                    <div className='about-txt-holder'>
                        <h1 ref={aboutSection}>About Me</h1>
                        <p>
                            Greetings! I'm Aashir Siddiqui, a 21-year-old from Pakistan, currently pursuing a Computer Science degree in the UK. I'm a passionate Full Stack Developer, adept in React and SpringBoot, with a track record of project successes and meaningful internships.
                        </p>
                        <p>
                            Holding a First Class Honours and a solid grasp of Data Structures and Algorithms, I'm committed to continuous learning and skill enhancement. I thrive on challenges, embrace teamwork, and consistently strive to broaden my horizons.
                        </p>
                        <p>
                            Eager to contribute, my collaborative spirit shines in team environments where I seamlessly integrate diverse perspectives to achieve remarkable results. My passion for growth and innovation drives me to consistently seek out new challenges and opportunities.
                        </p>
                        <h1 className='me-tag'>This is me in 30 seconds!</h1>
                    </div>
                </div>
            </section>

            <section className='skills-section' ref={skillSection} id="skills">
                <h1 className='section-title'>My Tool Box</h1>
                <div className='skills-con'>
                    <div className='frontend-skills'>
                        <h3>FRONT END</h3>
                        <div className='svg-holder'>
                            {
                                data.slice(0, 9).map((card) => {
                                    return (
                                        <SkillCard name={card.name} src={card.src}></SkillCard>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='frontend-skills'>
                        <h3>BACK END</h3>
                        <div className='svg-holder'>
                            {
                                data.slice(9, 16).map((card) => {
                                    return (
                                        <SkillCard name={card.name} src={card.src}></SkillCard>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='frontend-skills'>
                        <h3>TOOLS</h3>
                        <div className='svg-holder'>
                            {
                                data.slice(16).map((card) => {
                                    return (
                                        <SkillCard name={card.name} src={card.src}></SkillCard>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section className='project-section' id='projects'>
                <h1 className='section-title'>My Projects</h1>
                <div className='project-con'>
                    <div className='project-img'>
                        <img src={projects[count].src}></img>
                        <div className='next-btn-holder'>
                            <RetroButton name="PREV" function = {handlePrev}></RetroButton>
                            <RetroButton name="NEXT" function = {handleNext}></RetroButton>
                        </div>
                    </div>

                    <div className='project-description'>
                        <h1 className='project-title'>{projects[count].name}</h1>
                        <ul className='desc'>
                            <li className='point'>{projects[count].p1}</li>
                            <li className='point'>{projects[count].p2}</li>
                            <li className='point'>{projects[count].p3}</li>
                            <li className='point'>{projects[count].p4}</li>
                        </ul>
                        
                        <h3 className='status' style={projects[count].status === "Completed" ? {color: "#2ed542"} : {color : "#ffd900"}}>{projects[count].status}</h3>

                        <div className='btn-holder'>
                            <a href={projects[count].link} target='_blank'><RetroButton name="View Live Site"></RetroButton></a>
                            <a href={projects[count].git} target='_blank'><RetroButton name="View On GitHub"></RetroButton></a>
                        </div>

                    </div>
                </div>
            </section>

            <section className='experience-section' id='experience' ref={experienceSection}>
                <h1 className='section-title'>People Who Liked Me</h1>
                <div className='experience-con'>
                    {
                        jobs.map((job) => {
                            return(
                                <ExperienceCard name={job.name} src={job.src} list={job.list}></ExperienceCard>
                            )
                        })
                    }
                </div>
            </section>

            <section className='contact-section' id='contact-me'>
                <h1 className='section-title'>Liked What You Saw?</h1>
                <div className='contact-con'>
                    <h1>Hire Me</h1>
                    <div style={{margin: "1rem 0"}} className='contact-svg'>
                        <a href='https://github.com/aashir21' target='_blank'><svg className='hero-svg' viewBox="0 0 24 24" fill="#FFFF" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.1727 20.8173 18.8977 19.5415 20.1198 17.8395C21.3419 16.1376 21.9995 14.0953 22 12C22 6.475 17.525 2 12 2Z" fill="#FFFFF"></path> </g></svg></a>
                        <a href='https://www.linkedin.com/in/aashir21/' target='_blank'><svg className='hero-svg' fill="#FFFF" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path> </g></svg></a>
                    </div>
                    <a href={Resume} download="AASHIR_SIDDIQUI_Resume.docx.pdf"><RetroButton name="Download My Resume"></RetroButton></a>
                    <img src='https://cdn3d.iconscout.com/3d/premium/thumb/pointing-up-finger-hand-gesture-8542782-6725379.png?f=webp'></img>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Home