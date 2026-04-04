import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.flashpreviewsconsultinggroup.com';
  return [
    { url: base,                      lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/case-study`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/privacy`,         lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/terms`,           lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/accessibility`,   lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
  ];
}
