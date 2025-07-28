import ServiceDetailMain from "@/components/serviceDetails/ServiceDetailMain";
import Wrapper from "@/layout/DefaultWrapper";
import { servicesData } from "@/data/services-data";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

const ServiceDetailsPage = ({ params }: PageProps) => {
  const service = servicesData.find(s => s.slug === params.slug);
  
  if (!service) {
    notFound();
  }

  return (
    <>
      <Wrapper>
        <main>
          <ServiceDetailMain service={service} />
        </main>
      </Wrapper>
    </>
  );
};

export default ServiceDetailsPage;

// Generate static paths for all services
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
} 