import project1 from '@/assets/screenshots/project1.png';
import project2 from '@/assets/screenshots/project2.png';
import project3 from '@/assets/screenshots/project3.png';

export const PROJECTS = [
  {
    title: 'ThreeJS Solar System',
    description: 'An interactive 3D solar system built with Three.js that visualizes planets orbiting the sun in real time. The project focuses on realistic scaling, smooth animations, and camera controls, showcasing core concepts of WebGL and Three.js for immersive space visualization.',
    image: project1,
    tech: ['Three.js', 'JavaScript', 'WebGL', 'HTML', 'CSS'],
    github: 'https://github.com/Ronit-Pai/ThreeJs-Solar-System',
    demo: 'https://three-js-solar-system-eight.vercel.app/',
  },
  {
    title: 'QR Visualization',
    description: 'A QR code visualization project that generates and renders QR patterns in a visually engaging way. It explores how QR codes are constructed at a low level while adding custom visual layers, making it both an educational and creative take on standard QR generation.',
    image: project2,
    tech: ['JavaScript', 'QR Encoding', 'HTML', 'CSS'],
    github: 'https://github.com/Ronit-Pai/QR-Visualization',
    demo: 'https://ronit-pai.github.io/QR-Visualization/',
  },
  {
    title: 'Gesture Controlled Mouse',
    description: 'A computer-vision based system that lets you control your mouse using hand gestures captured from a webcam. Built with Python and OpenCV, it tracks hand landmarks to move the cursor and perform clicks, demonstrating practical applications of real-time gesture recognition.',
    image: project3,
    tech: ['Python', 'OpenCV', 'Computer Vision', 'MediaPipe'],
    github: 'https://github.com/Ronit-Pai/Gesture-Controlled-Mouse',
    demo: 'https://www.youtube.com/watch?v=6DuZOCQaoJs',
  },
];

export const NAV_ITEMS = ['Home', 'About', 'Work', 'Tools', 'Resume'];

export const FOOTER_MAIN = ['Home', 'About', 'Work'];

export const FOOTER_OTHER = ['Resume', 'Tools'];

export const SOCIAL_ICONS = ['Mail', 'Github', 'Instagram', 'Linkedin'];
