import { images } from './images'

// Experience records live separately from the page layout so new entries can
// be added here without changing the Journal grid.
export const activities = [
  {
    id: 'seminar',
    title: 'Seminar Anchor',
    org: 'Career-guidance seminar: “What Next After 10th or 12th?”',
    role: 'Anchor · Session coordination',
    text: 'I took part in coordinating and anchoring a career-guidance seminar titled “What Next After 10th or 12th?”, hosting the session and keeping the audience engaged.',
    tags: ['Public speaking', 'Event hosting', 'Audience engagement', 'Communication', 'Coordination'],
    dimensions: ['Leadership & Initiative', 'Public Speaking & Communication', 'Event Coordination'],
    photos: images.seminar,
    featured: true,
  },
  {
    id: 'workshop',
    title: 'Workshop Volunteer',
    org: 'Ahmedabad Institute of Technology (SFI 701), Ahmedabad',
    role: 'Volunteer · Team support',
    text: 'I volunteered at a workshop at Ahmedabad Institute of Technology (SFI 701), helping with coordination and working with the team and participants.',
    tags: ['Workshop volunteering', 'Event coordination', 'Team collaboration', 'Community participation'],
    dimensions: ['Technical Collaboration', 'Community Engagement', 'Workshop Participation'],
    photos: images.workshop,
    featured: false,
  },
]
