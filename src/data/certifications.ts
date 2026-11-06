export type Cert = { title: string; provider: string; category: string }
export const certCategories = ['All','AI & Machine Learning','Cloud','Programming','Cybersecurity','Web Development','Data & SQL','Professional Skills']
// Provider left blank where none was specified. Add id/date/url fields here when you have verified details.
export const certifications: Cert[] = [
 {title:'Oracle Cloud Infrastructure 2024 Generative AI Certified Professional',provider:'Oracle',category:'AI & Machine Learning'},
 {title:'Oracle Cloud Infrastructure Operations Professional',provider:'Oracle',category:'Cloud'},
 {title:'Oracle Cloud Data Management 2023 Certified Foundations Associate',provider:'Oracle',category:'Data & SQL'},
 {title:'Introduction to Information Technology and AWS Cloud',provider:'',category:'Cloud'},
 {title:'Python for Data Science, AI & Development',provider:'IBM',category:'AI & Machine Learning'},
 {title:'Generative AI: Prompt Engineering Basics',provider:'IBM',category:'AI & Machine Learning'},
 {title:'Generative AI: Introduction and Applications',provider:'IBM',category:'AI & Machine Learning'},
 {title:'Foundations of Cybersecurity',provider:'Google',category:'Cybersecurity'},
 {title:'Getting Started with Git and GitHub',provider:'IBM',category:'Programming'},
 {title:'Agile Project Management',provider:'Google',category:'Professional Skills'},
 {title:'The Structured Query Language (SQL)',provider:'University of Colorado Boulder',category:'Data & SQL'},
 {title:'Technical Support Fundamentals',provider:'Google',category:'Professional Skills'},
 {title:'JavaScript DOM: Interactive and Dynamic Web Pages',provider:'Packt',category:'Web Development'},
 {title:'Basics of Data Structures and Algorithms',provider:'',category:'Programming'},
 {title:'Crash Course on Python',provider:'Google',category:'Programming'},
 {title:'Introduction to Computers and Operating Systems and Security',provider:'Microsoft',category:'Cybersecurity'},
 {title:'Developing Interpersonal Skills',provider:'IBM',category:'Professional Skills'},
 {title:'Introduction to Social Media Marketing',provider:'Meta',category:'Professional Skills'},
 {title:'Basic Mathematics',provider:'BITS Pilani',category:'Programming'},
 {title:'Programming with Scratch',provider:'Hong Kong University of Science and Technology',category:'Programming'},
 {title:'Databases for Developers: Foundations',provider:'Oracle',category:'Data & SQL'},
]
