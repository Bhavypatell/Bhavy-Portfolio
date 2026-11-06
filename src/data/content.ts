import { images } from './images'
export const profile = {
 name:'Bhavy Patel',
 desc:"I'm Bhavy Patel, a developer and AI/ML enthusiast passionate about building meaningful digital experiences. From intelligent systems to interactive web applications, I enjoy turning ideas into practical technology.",
 tagline:'Developer. Builder. Innovator. Always Exploring.',
 photo:images.profile,
}
export const contact = {phone:'+91 93135 02119',tel:'tel:+919313502119',email:'bhavyrpatel27@gmail.com',github:'https://github.com/Bhavypatell',linkedin:'https://www.linkedin.com/in/bhavypatell'}
export const nav:[string,string][] = [['home','Home'],['about','About'],['skills','Skills'],['projects','Projects'],['experience','Experience'],['achievements','Achievements'],['certifications','Certs'],['contact','Contact']]
export const aboutHighlights = ['Computer Engineering background','AI/ML and web development','Hands-on technical projects','Workshops and innovation events','Seminar anchoring and public speaking','Continuous learning']
export const skills = [
 {group:'Frontend',items:['HTML','CSS','JavaScript','React','TypeScript']},
 {group:'Programming',items:['Python','Java','SQL']},
 {group:'AI & Machine Learning',items:['Machine Learning','Generative AI','Prompt Engineering','Gemini API']},
 {group:'Cloud & Platforms',items:['AWS','Oracle Cloud Infrastructure']},
 {group:'Tools',items:['Git','GitHub','Android Studio','VS Code','Vite']},
 {group:'Data & Visualization',items:['Data Visualization','Chart.js','Data Analysis']},
]
export const projects = [
 {id:'kalnetra',title:'KalNetra',visual:'kal',category:'Digital Payment Fraud Investigation & Intelligence Platform',status:'Prototype / active development',
  blurb:'Digital payment fraud investigation, transaction traceability and intelligent fraud analysis.',
  story:'KalNetra addresses UPI fraud, account takeover, mule account networks, suspicious transaction patterns, layering of fraudulent funds, and delayed investigation and recovery. Its core idea is the Golden Hour: identifying suspicious transaction flows as early as possible rather than waiting for traditional investigation and recovery processes. It is a prototype in active development and is not deployed by any bank, agency or financial institution.',
  features:['Money Trail Investigation','Transaction Network Visualization','Fraud Analytics','Suspicious Account Identification','Case Investigation Workflow','Endpoint Tracking','Global Freeze Concept','Officer Access Interface'],
  photos:[] as string[],tech:['HTML','CSS','JavaScript','Python','Flask','Vis.js','Chart.js','JSON'],link:'https://github.com/Bhavypatell/Kal-Netra'},
 {id:'climatrix',title:'Climatrix',visual:'clim',category:'AI-Powered Interactive Climate Simulation',status:'Educational simulation',
  blurb:'An interactive 3D climate experience combining storytelling, AI, hand gestures and immersive visuals.',
  story:'Climatrix is an educational interactive simulation, not a system that predicts real-world climate outcomes. Players explore four realms (Amazonia, The Abyss, Aether and Metropolis) using hand gestures: Open Palm, Closed Fist, Thumbs Up and Point. The Google Gemini API generates climate scenarios from the chosen realm, earlier context and the player\'s decisions. It was showcased at Innovation Village 2026 at L.J. University, where I received a certificate of participation.',
  features:['Interactive 3D Earth experience','Hand gesture recognition','AI-generated climate scenarios','Four decision options','Environmental impact indicators','Dynamic narrative outcomes','Interactive audio experience'],
  photos:images.climatrix,tech:['React','TypeScript','Vite','Three.js','React Three Fiber','React Three Drei','Framer Motion','MediaPipe Hands','Google Gemini API','Web Audio API'],link:''},
]
export const activities = [
 {id:'seminar',title:'Seminar Anchor',org:'Career-guidance seminar: "What Next After 10th or 12th?"',tags:['Public speaking','Event hosting','Audience engagement','Communication','Coordination'],
  text:'I took part in coordinating and anchoring a career-guidance seminar titled "What Next After 10th or 12th?", hosting the session and keeping the audience engaged.',photos:images.seminar},
 {id:'workshop',title:'Workshop Volunteer',org:'Ahmedabad Institute of Technology (SFI 701), Ahmedabad',tags:['Workshop volunteering','Event coordination','Team collaboration','Community participation'],
  text:'I volunteered at a workshop at Ahmedabad Institute of Technology (SFI 701), helping with coordination and working with the team and participants.',photos:images.workshop},
 {id:'showcase',title:'Climatrix Showcase',org:'Innovation Village 2026, L.J. University',tags:['Project presentation','Innovation','Interactive technology','Teamwork','Certificate of participation'],
  text:'I presented Climatrix at Innovation Village 2026 at L.J. University and received a certificate of participation.',photos:images.innovationVillage},
]
export const achievements = [
 {title:'Projects & Innovation',go:'projects',items:['Built KalNetra, a fraud-investigation prototype','Built Climatrix, an AI-powered climate simulation','Showcased Climatrix at Innovation Village 2026, L.J. University']},
 {title:'Leadership & Communication',go:'experience',items:['Coordinated and anchored a career-guidance seminar','Ongoing practice in public speaking and audience engagement']},
 {title:'Community & Collaboration',go:'experience',items:['Volunteered at a workshop at Ahmedabad Institute of Technology (SFI 701)','Worked with teams on events and projects']},
 {title:'Learning & Certifications',go:'certifications',items:['21 certifications across AI, cloud, programming, cybersecurity, web and data','Providers include Oracle, IBM, Google, Microsoft, Meta and more']},
]
export const beyond = [
 {title:'Public Speaking',text:'Seminar anchoring has taught me to communicate clearly and keep an audience engaged.'},
 {title:'Community & Collaboration',text:'Workshops and volunteering are where I learn to coordinate with teams and help others learn.'},
 {title:'Innovation & Building',text:'I like turning ideas into practical technical solutions and experimenting with new technologies.'},
]
