import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: {default: 'Mohamed Askalany | Kitchener Ward 9', template: '%s | Mohamed Askalany'}, description: 'Meet Mohamed Askalany, candidate for Kitchener City Council, Ward 9. Explore the campaign, get involved, and find official voting information.' };
export default function RootLayout({children}: {children: React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
