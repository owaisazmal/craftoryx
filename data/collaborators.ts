export interface Collaborator {
  id: number;
  name: string;
  initials: string;
  color: string;
  imageUrl?: string; // Optional: use imageUrl if provided, otherwise use gradient with initials
  link?: string; // Optional: link to profile or null for placeholders
}

export const collaborators: Collaborator[] = [
  {
    id: 1,
    name: 'Owais Khan',
    initials: 'OK',
    color: 'from-blue-500 to-purple-600',
    imageUrl: '/owais-profile.jpg',
    link: 'https://www.linkedin.com/in/owais-khan-266492222/',
  },
  {
    id: 2,
    name: 'Collaborator 1',
    initials: 'C1',
    color: 'from-green-500 to-teal-600',
    // imageUrl: 'URL_HERE', // Add image URL when available
    // link: 'PROFILE_LINK_HERE', // Add link when collaborator joins
  },
  {
    id: 3,
    name: 'Collaborator 2',
    initials: 'C2',
    color: 'from-pink-500 to-rose-600',
    // imageUrl: 'URL_HERE',
    // link: 'PROFILE_LINK_HERE',
  },
  {
    id: 4,
    name: 'Collaborator 3',
    initials: 'C3',
    color: 'from-orange-500 to-red-600',
    // imageUrl: 'URL_HERE',
    // link: 'PROFILE_LINK_HERE',
  },
  {
    id: 5,
    name: 'Collaborator 4',
    initials: 'C4',
    color: 'from-indigo-500 to-blue-600',
    // imageUrl: 'URL_HERE',
    // link: 'PROFILE_LINK_HERE',
  },
];
