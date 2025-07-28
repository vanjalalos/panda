import ServiceMain from "@/components/service/ServiceMain";
import Wrapper from "@/layout/DefaultWrapper";
import ServicesContent from '@/components/service/ServicesContent';

const  Service = () => {
  return (
    <>
      <Wrapper>
        <main>
          <ServiceMain />
          <ServicesContent />
        </main>
      </Wrapper>
    </>
  );
}

export default Service