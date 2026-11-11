// Central image configuration. Drop files into public/images/ using these names, or edit the paths here.
// A missing file shows a labelled placeholder instead of a broken image.
const slots = (dir: string, prefix: string, n = 3) => Array.from({ length: n }, (_, i) => `/images/${dir}/${prefix}-${i + 1}.jpg`)

export const images = {
  // position = which part of the photo stays in view when cropped (CSS object-position)
  profile: { src: '/images/profile/profile.jpg', position: 'center 18%' },
  seminar: slots('activities', 'seminar'),
  workshop: slots('activities', 'workshop'),
  climatrix: slots('projects', 'climatrix'),
}
