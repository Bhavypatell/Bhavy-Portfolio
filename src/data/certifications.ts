// All certification records. To add one: drop the PDF/image into public/certificates/ and append an object below.
// The archive (cards, search, filters, Show more) is generated from this array, so no UI change is needed.
// Only add fields that appear on the certificate itself. Optional fields are simply omitted from the UI when absent.
export type Cert = {
  title: string
  provider: string
  category: string
  file?: string          // filename inside public/certificates/ (opens via "View Certificate")
  issued?: string        // ISO date (YYYY-MM-DD), as printed on the certificate
  validUntil?: string    // ISO date, only if the certificate states one
  platform?: string      // delivery platform, e.g. Coursera, if the certificate states it
  verifyUrl?: string     // verification link printed on the certificate
  originalFile?: string  // name of the file as originally uploaded, for traceability
}

// Preferred filter order. Any new category found in the data is appended automatically.
const preferred = ['AI & Machine Learning', 'Cloud', 'Programming', 'Cybersecurity', 'Web Development', 'Data & SQL', 'Professional Skills']

export const certifications: Cert[] = [
 {"title": "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional", "provider": "Oracle", "category": "AI & Machine Learning", "file": "oracle-oci-2024-generative-ai-professional.pdf", "issued": "2024-07-26", "originalFile": "Oci Ai.pdf"},
 {"title": "Oracle Cloud Infrastructure Operations Professional", "provider": "Oracle", "category": "Cloud", "file": "oracle-oci-operations-professional.pdf", "issued": "2024-03-14", "platform": "Coursera", "verifyUrl": "https://coursera.org/verify/KR3YPA765TG3", "originalFile": "b4.pdf"},
 {"title": "Oracle Cloud Data Management 2023 Certified Foundations Associate", "provider": "Oracle", "category": "Data & SQL", "file": "oracle-cloud-data-management-2023-foundations-associate.pdf", "issued": "2024-08-11", "validUntil": "2026-08-11", "originalFile": "Ocfa.pdf"},
 {"title": "Introduction to Information Technology and AWS Cloud", "provider": "Amazon Web Services", "category": "Cloud", "file": "aws-introduction-to-it-and-aws-cloud.pdf", "issued": "2024-11-08", "platform": "Coursera", "verifyUrl": "https://coursera.org/verify/62J2VVRZJT72", "originalFile": "b11.pdf"},
 {"title": "Python for Data Science, AI & Development", "provider": "IBM", "category": "AI & Machine Learning", "file": "ibm-python-for-data-science-ai-development.pdf", "issued": "2026-02-17", "platform": "Coursera", "verifyUrl": "https://coursera.org/verify/WWBKQA4CFJ3X", "originalFile": "b18.pdf"},
 {"title": "Generative AI: Prompt Engineering Basics", "provider": "IBM", "category": "AI & Machine Learning", "file": "ibm-generative-ai-prompt-engineering-basics.pdf", "issued": "2026-02-14", "platform": "Coursera", "verifyUrl": "https://coursera.org/verify/VE4HR3423TX7", "originalFile": "b17.pdf"},
 {"title": "Generative AI: Introduction and Applications", "provider": "IBM", "category": "AI & Machine Learning", "file": "ibm-generative-ai-introduction-and-applications.pdf", "issued": "2024-03-31", "platform": "Coursera", "verifyUrl": "https://coursera.org/verify/QU9S2YMN95HY", "originalFile": "b8.pdf"},
 {"title": "Foundations of Cybersecurity", "provider": "Google", "category": "Cybersecurity", "file": "google-foundations-of-cybersecurity.pdf", "issued": "2024-03-31", "platform": "Coursera", "verifyUrl": "https://coursera.org/verify/L67RGDDEF7NF", "originalFile": "b7.pdf"},
 {"title": "Getting Started with Git and GitHub", "provider": "IBM", "category": "Programming", "file": "ibm-getting-started-with-git-and-github.pdf", "issued": "2025-03-16", "platform": "Coursera", "verifyUrl": "https://coursera.org/verify/UJOEIW8NHUNQ", "originalFile": "b15.pdf"},
 {"title": "Agile Project Management", "provider": "Google", "category": "Professional Skills", "file": "google-agile-project-management.pdf", "issued": "2025-03-16", "platform": "Coursera", "verifyUrl": "https://coursera.org/verify/V5DAGJCEWEUQ", "originalFile": "b14.pdf"},
 {"title": "The Structured Query Language (SQL)", "provider": "University of Colorado Boulder", "category": "Data & SQL", "file": "cu-boulder-structured-query-language-sql.pdf", "issued": "2024-11-07", "platform": "Coursera", "verifyUrl": "https://coursera.org/verify/0PO93VOS108Z", "originalFile": "b12.pdf"},
 {"title": "Technical Support Fundamentals", "provider": "Google", "category": "Professional Skills", "file": "google-technical-support-fundamentals.pdf", "issued": "2024-11-09", "platform": "Coursera", "verifyUrl": "https://coursera.org/verify/21ABYVRG09UN", "originalFile": "b13.pdf"},
 {"title": "JavaScript DOM: Interactive and Dynamic Web Pages", "provider": "Packt", "category": "Web Development", "file": "packt-javascript-dom-interactive-dynamic-web-pages.pdf", "issued": "2025-08-07", "platform": "Coursera", "verifyUrl": "https://coursera.org/verify/P12YXOC6SWMN", "originalFile": "b16.pdf"},
 {"title": "Basics of Data Structures and Algorithms", "provider": "Simplilearn SkillUP", "category": "Programming", "file": "simplilearn-basics-of-data-structures-and-algorithms.pdf", "issued": "2026-08-26", "originalFile": "SkillUp_DSA.pdf"},
 {"title": "Crash Course on Python", "provider": "Google", "category": "Programming", "file": "google-crash-course-on-python.pdf", "issued": "2024-03-30", "platform": "Coursera", "verifyUrl": "https://coursera.org/verify/N58L97B477PV", "originalFile": "b5.pdf"},
 {"title": "Introduction to Computers and Operating Systems and Security", "provider": "Microsoft", "category": "Cybersecurity", "file": "microsoft-computers-operating-systems-and-security.pdf", "issued": "2024-03-14", "platform": "Coursera", "verifyUrl": "https://coursera.org/verify/XACN5JQ9ACW5", "originalFile": "b3.pdf"},
 {"title": "Developing Interpersonal Skills", "provider": "IBM", "category": "Professional Skills", "file": "ibm-developing-interpersonal-skills.pdf", "issued": "2024-03-12", "platform": "Coursera", "verifyUrl": "https://coursera.org/verify/MBB23BEBCRE5", "originalFile": "b2.pdf"},
 {"title": "Introduction to Social Media Marketing", "provider": "Meta", "category": "Professional Skills", "file": "meta-introduction-to-social-media-marketing.pdf", "issued": "2024-04-03", "platform": "Coursera", "verifyUrl": "https://coursera.org/verify/2UYJWL8L5PBJ", "originalFile": "b9.pdf"},
 {"title": "Basic Mathematics", "provider": "BITS Pilani", "category": "Programming", "file": "bits-pilani-basic-mathematics.pdf", "issued": "2024-06-03", "platform": "Coursera", "verifyUrl": "https://coursera.org/verify/DFXAJ6E6F8KM", "originalFile": "b10.pdf"},
 {"title": "Programming with Scratch", "provider": "Hong Kong University of Science and Technology", "category": "Programming", "file": "hkust-programming-with-scratch.pdf", "issued": "2024-02-29", "platform": "Coursera", "verifyUrl": "https://coursera.org/verify/KSA3HPJ4YFQR", "originalFile": "b1.pdf"},
 {"title": "Databases for Developers: Foundations", "provider": "Oracle", "category": "Data & SQL", "file": "oracle-databases-for-developers-foundations.pdf", "platform": "Oracle Dev Gym", "originalFile": "Odg.pdf"},
 {"title": "Oracle Fusion Cloud Applications HCM Process Essentials Certified - Rel 1", "provider": "Oracle", "category": "Cloud", "file": "oracle-fusion-cloud-applications-hcm-process-essentials.pdf", "issued": "2025-06-03", "originalFile": "OFCA.pdf"},
 {"title": "Introduction to Generative AI", "provider": "Google Cloud", "category": "AI & Machine Learning", "file": "google-cloud-introduction-to-generative-ai.pdf", "issued": "2024-03-31", "platform": "Coursera", "verifyUrl": "https://coursera.org/verify/EJAMFA448BW2", "originalFile": "b6.pdf"},
 {"title": "Claude Code in Action", "provider": "Anthropic", "category": "AI & Machine Learning", "file": "anthropic-claude-code-in-action.pdf", "issued": "2026-03-21", "verifyUrl": "https://verify.skilljar.com/c/4g6zcmnrajsv", "originalFile": "b19.pdf"},
 {"title": "Claude 101", "provider": "Anthropic", "category": "AI & Machine Learning", "file": "anthropic-claude-101.pdf", "originalFile": "b20.pdf"},
]

export const certCategories = ['All', ...preferred, ...Array.from(new Set(certifications.map(c => c.category))).filter(c => !preferred.includes(c))]

export const certUrl = (c: Cert) => (c.file ? `${import.meta.env.BASE_URL}certificates/${c.file}` : '')
