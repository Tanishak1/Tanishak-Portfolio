"use client";
import {motion,useScroll} from "framer-motion";
const projects=[
 {n:"01",title:"AGRIHUB",tag:"SMART FARMING • IoT • AI",desc:"A low-connectivity smart farming platform combining ESP32 sensor telemetry, crop intelligence, alerts and farmer-focused decision support.",link:"https://github.com/Tanishak1/AgriHub"},
 {n:"02",title:"CAMPUS PLATFORM",tag:"COLLEGE • COMMUNITY • WEB",desc:"A college-focused digital platform built around students, faculty, projects, research, achievements and collaborative knowledge sharing.",link:"#"},
 {n:"03",title:"THREADBARE ROADS",tag:"CIVIC TECH • SIH",desc:"A technology project focused on making road-condition reporting and infrastructure intelligence more actionable.",link:"https://github.com/Tanishak1/THREADBARE-ROADS"}
];
const journey=[["01","STARTED BUILDING","Turned curiosity into code and began shipping real projects."],["02","FULL STACK","Built across Java, React, Next.js, Node.js and databases."],["03","COMMUNITY","Led developer communities, events and student initiatives."],["04","CODEZY PRESIDENT","Leading the Codezy Coding Society and creating opportunities for builders."],["05","BUILDING NOW","AgriHub, campus technology and practical AI-powered products."]];
export default function Home(){const {scrollYProgress}=useScroll();return <main>
<motion.div className="progress" style={{scaleX:scrollYProgress}}/>
<nav><a className="mark" href="#">TT.</a><div><a href="#work">WORK</a><a href="#story">STORY</a><a href="#contact">CONTACT</a></div></nav>
<section className="hero"><div className="eyebrow">PORTFOLIO / 2026 <span>AVAILABLE FOR OPPORTUNITIES</span></div><motion.h1 initial={{y:90,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.8}}>TANISHAK<br/><i>TYAGI</i></motion.h1><div className="heroBottom"><p>FULL STACK DEVELOPER<br/>JAVA DEVELOPER<br/>AI ENTHUSIAST</p><div className="orb"><b>BUILD<br/>WHAT<br/>MATTERS</b></div><p className="right">INDIA<br/>03RD YEAR CSE<br/>RKGITM</p></div></section>
<div className="ticker"><div>CODE • CREATE • LEAD • EXPERIMENT • SHIP • CODE • CREATE • LEAD • EXPERIMENT • SHIP •</div></div>
<section className="intro" id="story"><p className="label">[ ABOUT ]</p><h2>I DON'T JUST LEARN<br/>TECHNOLOGY. <em>I BUILD</em><br/>WITH IT.</h2><p className="bio">Computer Science student focused on turning ideas into useful digital products—from smart agriculture and campus platforms to developer communities.</p></section>
<section className="work" id="work"><div className="sectionHead"><p>[ SELECTED WORK ]</p><p>2026 / PROJECTS</p></div>{projects.map(p=><motion.a href={p.link} target={p.link==="#"?undefined:"_blank"} className="project" key={p.title} initial={{opacity:0,y:60}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><span>{p.n}</span><div><small>{p.tag}</small><h3>{p.title}</h3><p>{p.desc}</p></div><b>↗</b></motion.a>)}</section>
<section className="journey"><p className="label">[ UNFILTERED JOURNEY ]</p><h2>NOT A STRAIGHT<br/>LINE. <i>A REAL ONE.</i></h2><div className="timeline">{journey.map(x=><div className="moment" key={x[0]}><span>{x[0]}</span><h4>{x[1]}</h4><p>{x[2]}</p></div>)}</div></section>
<section className="stack"><p>[ TOOLBOX ]</p><div>JAVA ✦ JAVASCRIPT ✦ NEXT.JS ✦ REACT ✦ NODE.JS ✦ SQL ✦ ESP32 ✦ AI ✦</div></section>
<footer id="contact"><p>GOT AN IDEA?</p><h2>LET'S MAKE<br/><i>IT REAL.</i></h2><div className="foot"><a href="https://github.com/Tanishak1" target="_blank">GITHUB ↗</a><span>TANISHAK TYAGI © 2026</span><a href="mailto:">EMAIL ↗</a></div></footer>
</main>}