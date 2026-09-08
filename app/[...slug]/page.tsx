import { CampaignPage } from '@/components/campaign';
const pageTitles: Record<string,string> = {about:'About Mohamed',priorities:'Our priorities','priorities/housing':'Homes people can afford','priorities/safer-streets':'Safer streets, connected neighbourhoods','priorities/public-spaces':'Parks and public spaces','ward-9':'Our Ward 9',volunteer:'Volunteer','request-a-sign':'Request a sign',donate:'Donate',endorse:'Endorse Mohamed',vote:'Make your voice count',updates:'Campaign updates',contact:'Let’s talk'};
import { notFound } from 'next/navigation';
export async function generateMetadata({params}: {params: Promise<{slug: string[]}>}) { const {slug} = await params; return {title: pageTitles[slug.join('/')] || 'Page not found'}; }
export default async function Page({params}: {params: Promise<{slug: string[]}>}) { const {slug} = await params; const path=slug.join('/'); if (!pageTitles[path]) notFound(); return <CampaignPage slug={path}/>; }
