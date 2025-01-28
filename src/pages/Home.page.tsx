import { FeaturedItems } from '@/components/FeaturedItems/FeaturedItems';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Header } from '../components/Header/Header';

export function HomePage() {
  return (
    <>
      <Header />
      <ColorSchemeToggle />
      {/* <FeaturedItems /> */}
    </>
  );
}
