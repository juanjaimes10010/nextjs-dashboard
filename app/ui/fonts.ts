import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  weight: "400",
  subsets: ['latin'], // Specify the subset here
  preload: true, // Keep preloading enabled if you want
})


