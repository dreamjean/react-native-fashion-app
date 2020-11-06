import { images } from '../config/assets';
import colors from '../config/colors';

export default [
  {
    header: {
      name: 'Relaxed',
      bgColor: colors.lightCyan,
      image: images[1],
    },
    footer: {
      title: 'Find Your Outfits',
      description: "Confused about your outfit? Don't worry! Find the best outfit here!",
      btLabel: 'next',
    },
  },
  {
    header: {
      name: 'Playful',
      bgColor: colors.lightGreen,
      image: images[2],
    },
    footer: {
      title: 'Hear it First, Wear it First',
      description: 'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
      btLabel: 'next',
    },
  },
  {
    header: {
      name: 'Excentric',
      bgColor: colors.lightOriange,
      image: images[3],
    },
    footer: {
      title: 'Your Style, Your Way',
      description: 'Create your individual & unique style and look anmazing everyday',
      btLabel: 'next',
    },
  },
  {
    header: {
      name: 'Funky',
      bgColor: colors.lightPink,
      image: images[4],
    },
    footer: {
      title: 'Look Good, Feel Good',
      description: 'Discover the latest trends in fashion and explore our personality',
      btLabel: "Let's Get Started",
    },
  },
];
