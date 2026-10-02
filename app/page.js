"use client";
import {motion,useScroll,useTransform} from "framer-motion";
import {useState} from "react";
const projects=[
["01","AGRIHUB","SMART FARMING / IoT / AI","Low-connectivity smart farming with ESP32 sensor intelligence, alerts and farmer-focused decision support.","https://github.com/Tanishak1/AgriHub"],
["02","CAMPUS PLATFORM","COLLEGE / COMMUNITY / WEB","A college-approved digital space connecting students, faculty, projects, research, achievements and collaborative learning.","#"],
["03","THREADBARE ROADS","CIVIC TECH / SIH","Road-condition reporting and infrastructure intelligence designed to turn ground-level problems into actionable information.","https://github.com/Tanishak1/THREADBARE-ROADS"]];
const journey=[["2024","START","Curiosity turned into code."],["2025","BUILD","Java + full-stack projects and real-world learning."],["2026","LEAD","President, Codezy Coding Society."],["NOW","SHIP","AgriHub, campus tech and practical AI products."]];
export default function Home(){const [metroOpen,setMetroOpen]=useState(false);const [introDone,setIntroDone]=useState(false);const {scrollYProgress}=useScroll();const y=useTransform(scrollYProgress,[0,1],[0,-180]);return <main>
<motion.div className="progress" style={{scaleX:scrollYProgress}}/>
<nav><a className="logo" href="#">T/T</a><div><a href="#about">ABOUT</a><a href="#work">WORK</a><a href="#contact">CONTACT</a></div></nav>
<section className="hero"><motion.div className="scribble" animate={{rotate:[-8,8,-8]}} transition={{duration:5,repeat:Infinity}}>BUILD<br/>WHAT<br/>MATTERS ↗</motion.div><div className="heroMeta">PORTFOLIO — 2026 <b>INDIA / AVAILABLE</b></div><motion.h1 initial={{y:140}} animate={{y:0}} transition={{duration:1,ease:[.2,.8,.2,1]}}>TANISHAK<br/><i>TYAGI</i></motion.h1><div className="heroFoot"><p>FULL STACK DEVELOPER<br/>JAVA DEVELOPER<br/>AI ENTHUSIAST</p><p>SCROLL TO EXPLORE ↓</p></div></section>
<div className="tape"><div>DESIGN ✦ CODE ✦ CREATE ✦ LEAD ✦ EXPERIMENT ✦ SHIP ✦ DESIGN ✦ CODE ✦ CREATE ✦ LEAD ✦</div></div>
<section id="about" className="paper"><motion.div className="note" style={{y}}><span>HELLO!</span><br/>I TURN IDEAS<br/>INTO PRODUCTS.</motion.div><p className="kicker">[ WHO AM I? ]</p><h2>A STUDENT.<br/>A BUILDER.<br/><em>A LEADER.</em></h2><p className="copy">I'm Tanishak Tyagi, a Computer Science student at RKGITM. I build full-stack products, experiment with AI and IoT, and lead developer communities. I care about work that solves a real problem—not just another demo.</p></section>
<section id="work" className="work"><header><span>[ SELECTED WORK ]</span><span>DRAG YOUR EYES ↓</span></header><h2>THINGS I'VE<br/><i>BUILT.</i></h2>{projects.map((p,i)=><motion.a className={"card c"+i} href={p[4]} target={p[4]==="#"?undefined:"_blank"} key={p[1]} initial={{rotate:i%2?3:-3,y:90,opacity:0}} whileInView={{rotate:i%2?1:-1,y:0,opacity:1}} whileHover={{rotate:0,scale:1.015}} viewport={{once:true,amount:.2}}><span className="num">{p[0]}</span><small>{p[2]}</small><h3>{p[1]}</h3><p>{p[3]}</p><b>OPEN ↗</b></motion.a>)}</section>
<section className="storyBook"><div className="bookLead"><small>GO ON, SCROLL DOWN</small><h2>AN OPEN BOOK.<br/><i>THE BLUE LINE</i> KNOWS THE WAY.</h2><p>From being rejected for rooms I wanted to enter, to eventually helping run those rooms—this is the unfiltered route.</p></div><p>[ ORIGIN / FIELD NOTES ]</p><div className="book"><motion.div className="beam" initial={{x:"-30%"}} whileInView={{x:"210%"}} transition={{duration:3.5,ease:"easeInOut"}} viewport={{amount:.5}}/><div className="spine"></div><article><small>CHAPTER 01</small><h3>CURIOSITY<br/>BECAME CODE.</h3><p>Started with programming fundamentals, then moved from tutorials to things people could actually use.</p></article><article><small>CHAPTER 02</small><h3>BUILD.<br/>BREAK. LEARN.</h3><p>Java, full-stack development, internships and experiments shaped a practical engineering mindset.</p></article><article><small>CHAPTER 03</small><h3>LEARN TO<br/>LEAD.</h3><p>Community work evolved into leading Codezy and creating space for other student builders.</p></article><article><small>CHAPTER 04</small><h3>SHIP WHAT<br/>MATTERS.</h3><p>AgriHub, campus technology and civic-tech projects turned the journey toward real-world problems.</p></article><svg className="bluePath" viewBox="0 0 1000 620" preserveAspectRatio="none"><motion.path d="M40 80 C210 30 180 250 350 220 S510 420 650 350 S780 150 960 500" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" initial={{pathLength:0}} whileInView={{pathLength:1}} transition={{duration:3,ease:"easeInOut"}} viewport={{amount:.35}}/></svg></div></section><section className={"metro metroExperience cleanMetro "+(metroOpen?"metroOpen":"")}>
<div className="metroWelcome">
  <div className="door seamLeft"></div><div className="door seamRight"></div>
  {!metroOpen&&<motion.div className="welcomeCopy" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}>
    <span className="mwDot"></span>
    <h2>दिल्ली मेट्रो में<br/>आपका स्वागत है</h2>
    <p>Welcome to Delhi Metro</p>
    <button onClick={()=>setMetroOpen(true)}>ENTER METRO →</button>
  </motion.div>}
  {metroOpen&&<motion.div className="metroInterior" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.55,duration:.7}}>
    <div className="coachTop"><b>WELCOME ABOARD • TANISHAK'S JOURNEY</b><span>NEXT STATION: APPLICATIONS</span></div>
    <div className="routeBoard"><strong>JOURNEY LINE</strong><div className="routeStops"><span>APPLICATIONS</span><i></i><span>FIRST PASS</span><i></i><span>EVENTS</span><i></i><span>MANAGEMENT</span><i></i><span>HACKATHONS</span><i></i><span>CODEZY</span><i></i><span>NEXT</span></div></div>
    <div className="metroScene"><div className="trainBody"><div className="trainNose"><b>TT</b><small>JOURNEY LINE</small></div><div className="trainCar"><span></span><span></span><em>APPLY</em></div><div className="trainCar"><span></span><span></span><em>ATTEND</em></div><div className="trainCar"><span></span><span></span><em>LEAD</em></div></div><div className="platformEdge"></div></div>
    <div className="journeySwipe">
      <div className="journeyCard"><small>01 • BEGINNING</small><h3>APPLICATIONS</h3><p>Applied, waited, faced rejections—and kept going.</p></div>
      <div className="journeyCard"><small>02 • OPPORTUNITY</small><h3>FIRST PASS</h3><p>The first selections turned rejection into momentum.</p></div>
      <div className="journeyCard"><small>03 • COMMUNITY</small><h3>EVENTS</h3><p>Started entering bigger technology rooms and meeting builders.</p></div>
      <div className="journeyCard"><small>04 • RESPONSIBILITY</small><h3>MANAGEMENT</h3><p>Moved from attending events to helping run and coordinate them.</p></div>
      <div className="journeyCard"><small>05 • BUILD</small><h3>HACKATHONS</h3><p>Built real projects, including AgriHub with Team Revengers for SIH.</p></div>
      <div className="journeyCard"><small>06 • LEAD</small><h3>CODEZY</h3><p>From joining communities to leading the Codezy Coding Society.</p></div>
      <div className="journeyCard"><small>07 • NOW</small><h3>NEXT STATION</h3><p>Still building, learning and moving forward. The line continues.</p></div>
    </div>
    <div className="swipeHint">← SWIPE LEFT / RIGHT TO TRAVEL THROUGH THE JOURNEY →</div>
  </motion.div>}
</div>
</section><section className="skills"><p>[ TOOLBOX / PLAYGROUND ]</p><div>JAVA ✦ JAVASCRIPT ✦ NEXT.JS ✦ REACT ✦ NODE.JS ✦ SQL ✦ ESP32 ✦ AI ✦</div></section>
<footer id="contact"><span>ONE LAST THING...</span><h2>LET'S MAKE<br/><i>SOMETHING</i><br/>REAL.</h2><div><a href="https://github.com/Tanishak1" target="_blank">GITHUB ↗</a><b>TANISHAK TYAGI © 2026</b><a href="mailto:">EMAIL ↗</a></div></footer>
<div className="dock"><a href="#">HOME</a><a href="#work">WORK</a><a href="#about">ABOUT</a><a href="#contact">CONTACT</a></div>
</main>}