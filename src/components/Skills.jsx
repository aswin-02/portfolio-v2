import React, { useEffect, useState, useRef } from "react";
import Java from '../assets/skills/java.svg';
import Spring from '../assets/skills/spring-boot.svg';
import Js from '../assets/skills/javascript.svg';
import PHP from '../assets/skills/php.svg';
import Laravel from '../assets/skills/laravel.svg';
import JQuery from '../assets/skills/jquery.svg';
import MySQL from '../assets/skills/mysql.svg';
import Tailwind from '../assets/skills/tailwind.svg';
import Bootstrap from '../assets/skills/bootstrap.svg';
import '../styles/Skills.css';

export default function Skills() {
  const isMobile = useRef(window.innerWidth < 768);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const skillItems = [
    { name: "Java", image: Java },
    { name: "SpringBoot", image: Spring },
    { name: "JavaScript", image: Js  },
    { name: "PHP", image: PHP  },
    { name: "Laravel", image: Laravel },
    { name: "JQuery", image: JQuery  },
    { name: "MySQL", image: MySQL },
    { name: "Tailwind", image: Tailwind },
    { name: "Bootstrap", image: Bootstrap }
  ];

  useEffect(() => {
    const handleResize = () => {
      isMobile.current = window.innerWidth < 768;
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="skills" className="skills-container text-center relative">
      <div className="flex justify-center">
        <span className="bg-[#dcff2f] px-5 py-1 text-3xl font-medium skill-head">Skills</span>
      </div>
      <div className={windowWidth >= 768 ? 'skills-carousel' : 'skills-grid'}>
        {skillItems.map((skill, index) => (
          <div className="skill-item" key={index}>
            <img src={skill.image} alt={skill.name} className="skill-image" title={skill.name}/>
          </div>
        ))}
      </div>
    </section>
  );
}
