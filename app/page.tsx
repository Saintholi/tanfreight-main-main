import CustomerReviews from '@/components/CustomerReviews';
import HeroSection from '@/components/HeroSection';
import HomeSection from '@/components/HomeSection';
import Partners from '@/components/Partners';
import Process from '@/components/Process';
import Products from '@/components/Products';
import SocialResp from '@/components/SocialResp';
import Special from '@/components/Special';
import Subcribe from '@/components/Subcribe';
import Wrapper from '@/components/Wrapper';

export default function Home() {
  return (
    <>
      <Wrapper>
        <HeroSection />
        <Partners />
        <Products />
        <Special />
        <HomeSection />
        <Process />
        <CustomerReviews />
        <SocialResp />
        <Subcribe />
      </Wrapper>
    </>
  );
}
