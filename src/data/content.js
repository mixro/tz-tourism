import { photo } from './media.js'

export const experiences = [
  { title: 'Wildlife Safaris', text: 'Game drives timed to the light, led by guides who read the land.', to: '/safaris', image: photo['exp-wildlife'], tone: ['#B98A3E', '#2e2010'] },
  { title: 'Kilimanjaro Treks', text: 'Eight days to the summit, with a team that gets you there safely.', to: '/kilimanjaro', image: photo['exp-trek'], tone: ['#8FA3B8', '#16222f'] },
  { title: 'Zanzibar Escapes', text: 'Stone Town, spice farms and slow days on the sand.', to: '/zanzibar', image: photo['exp-zanzibar'], tone: ['#2f7f84', '#0b343a'] },
  { title: 'Cultural Experiences', text: 'Meet the people whose land and traditions shape Tanzania.', to: '/contact?type=Cultural+Experience', image: photo['exp-culture'], tone: ['#a8683a', '#33190c'] },
  { title: 'Honeymoon Journeys', text: 'Private lodges, quiet beaches and time just for two.', to: '/contact?type=Honeymoon', image: photo['exp-honeymoon'], tone: ['#6b5a3a', '#1f180d'] },
  { title: 'Family Adventures', text: 'Safaris paced for children, with guides who love the questions.', to: '/contact?type=Family+Adventure', image: photo['exp-family'], tone: ['#5f7d4a', '#10221a'] },
  { title: 'Photography Safaris', text: 'Small vehicles, golden-hour positioning and patient guides.', to: '/safaris', image: photo['exp-photo'], tone: ['#7a5a32', '#24190b'] },
  { title: 'Luxury Safari', text: 'Exceptional camps, private guides and seamless logistics.', to: '/safaris', image: photo['exp-luxury'], tone: ['#3b5a46', '#0b241b'] },
  { title: 'Beach and Safari', text: 'Savannah mornings, ocean evenings, one smooth itinerary.', to: '/contact?type=Safari+%2B+Zanzibar', image: photo['exp-combo'], tone: ['#3f8a8a', '#16403f'] },
]

export const safaris = [
  { title: 'Classic Safari', text: 'The northern circuit’s great parks in a well-paced loop.', image: photo['safari-classic'], tone: ['#B98A3E', '#2e2010'] },
  { title: 'Luxury Safari', text: 'Boutique camps, private vehicles and attentive service.', image: photo['safari-luxury'], tone: ['#3b5a46', '#0b241b'] },
  { title: 'Family Safari', text: 'Shorter drives, child-friendly camps and junior ranger activities.', image: photo['safari-family'], tone: ['#5f7d4a', '#10221a'] },
  { title: 'Photography Safari', text: 'Pop-top vehicles and guides who position for the light.', image: photo['safari-photo'], tone: ['#7a5a32', '#24190b'] },
  { title: 'Private Safari', text: 'Your own vehicle, guide and schedule from first light to last.', image: photo['safari-private'], tone: ['#a8683a', '#33190c'] },
  { title: 'Adventure Safari', text: 'Walking, boating and fly-camping in Tanzania’s wilder corners.', image: photo['safari-adventure'], tone: ['#4c7a52', '#0e2417'] },
]

export const journal = [
  { slug: 'when-to-visit-the-serengeti', category: 'Planning', date: 'March 12, 2026', title: 'When to Visit the Serengeti', image: photo['j-serengeti'], tone: ['#B98A3E', '#2e2010'], text: 'The Serengeti changes with every month. Dry-season months from June to October give the clearest game viewing, while the green season brings calving and fewer crowds.' },
  { slug: 'seven-things-before-kilimanjaro', category: 'Kilimanjaro', date: 'February 20, 2026', title: '7 Things to Know Before Climbing Kilimanjaro', image: photo['j-kili'], tone: ['#8FA3B8', '#16222f'], text: 'Choose a longer route, train with hills and stairs, and pack for four seasons. The mountain rewards patience far more than speed.' },
  { slug: 'zanzibar-beyond-the-beaches', category: 'Zanzibar', date: 'January 28, 2026', title: 'Zanzibar Beyond the Beaches', image: photo['j-zanzibar'], tone: ['#2f7f84', '#0b343a'], text: 'Step off the sand into Stone Town’s alleys, the island’s spice farms and the fishing villages of the east coast.' },
  { slug: 'what-makes-the-migration-extraordinary', category: 'Wildlife', date: 'January 9, 2026', title: 'What Makes the Great Migration Extraordinary?', image: photo['j-migration'], tone: ['#a8683a', '#33190c'], text: 'It is not one event but a year-round circuit. Understanding where the herds are each month helps you plan the right trip.' },
  { slug: 'tanzanias-most-beautiful-national-parks', category: 'Destinations', date: 'December 15, 2025', title: 'Tanzania’s Most Beautiful National Parks', image: photo['j-parks'], tone: ['#4c7a52', '#0e2417'], text: 'From baobab-studded Tarangire to the river wilderness of Nyerere, these are the parks worth building a journey around.' },
  { slug: 'a-first-time-safari-guide', category: 'Planning', date: 'November 30, 2025', title: 'A First-Time Safari Guide', image: photo['j-first'], tone: ['#5f7d4a', '#10221a'], text: 'What to pack, how long to stay and what a day on safari actually looks like, answered simply.' },
]

export const testimonials = [
  { quote: 'From the first conversation to the final day, everything felt thoughtfully planned. Tanzania exceeded every expectation.', name: 'Sample traveler', country: 'Netherlands', trip: 'Serengeti and Zanzibar' },
  { quote: 'Our guide read the plains like a book. We saw more in six days than we thought possible.', name: 'Sample traveler', country: 'Canada', trip: 'Private Safari' },
  { quote: 'Summit morning on Kilimanjaro was the hardest and best thing I have done. The team never left my side.', name: 'Sample traveler', country: 'Germany', trip: 'Lemosho Route' },
]

export const why = [
  ['Local Knowledge', 'Experience Tanzania through people who understand the land.'],
  ['Tailored Journeys', 'Every journey can be designed around the traveler.'],
  ['Authentic Experiences', 'Go beyond tourist attractions and discover genuine Tanzania.'],
  ['Professional Service', 'Clear communication, thoughtful planning and reliable support.'],
  ['Responsible Travel', 'Experiences that respect nature, communities and Tanzania’s heritage.'],
]

export const features = {
  kilimanjaro: {
    title: 'Stand above Africa', sub: 'Challenge yourself to reach the roof of Africa.', seo: 'Kilimanjaro Treks',
    image: photo['kilimanjaro'], tone: ['#8FA3B8', '#16222f'], cta: 'Explore Kilimanjaro', type: 'Kilimanjaro',
    intro: 'At 5,895 metres, Uhuru Peak is the highest point in Africa. We choose longer routes and a slow pace, because acclimatisation decides who reaches the top.',
    listTitle: 'Choose your route',
    items: [
      ['Machame Route', '6–7 days', 'Scenic and varied, with a steep climb and good acclimatisation.'],
      ['Marangu Route', '5–6 days', 'The only route with hut accommodation, on a steady gradient.'],
      ['Lemosho Route', '7–8 days', 'Quiet, remote and the best odds of reaching the summit.'],
      ['Rongai Route', '6–7 days', 'A northern approach through drier, quieter country.'],
    ],
  },
  zanzibar: {
    title: 'From savannah to sea', sub: 'Unwind where the Indian Ocean meets Swahili culture.', seo: 'Zanzibar Escapes',
    image: photo['zanzibar'], tone: ['#2f7f84', '#0b343a'], cta: 'Plan a Zanzibar escape', type: 'Zanzibar',
    intro: 'After the dust of safari, Zanzibar is the exhale. Wake to turquoise water, wander Stone Town’s lanes and end the day on a dhow at sunset.',
    listTitle: 'What waits on the island',
    items: [
      ['White sand beaches', 'North and east coast', 'Long, soft beaches with warm, clear water.'],
      ['Stone Town', 'UNESCO World Heritage', 'Carved doors, night markets and centuries of trade.'],
      ['Spice experiences', 'Half day', 'Walk a working farm and taste cloves, vanilla and cardamom.'],
      ['Diving and snorkelling', 'Year round', 'Coral reefs and turtle-filled shallows.'],
      ['Romantic escapes', 'Private stays', 'Secluded villas, beach dinners and sunset sails.'],
    ],
  },
}
