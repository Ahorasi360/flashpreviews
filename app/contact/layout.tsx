import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request Market Access | FlashPreviews Consulting Group',
  description: 'Submit your market intake request. FlashPreviews builds one lead generation system per market. Find out if yours is available.',
  alternates: { canonical: 'https://www.flashpreviewsconsultinggroup.com/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
