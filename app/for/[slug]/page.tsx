import LandingPage from "@/mycomponents/LandingPage";
import Image from "next/image";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <div>
      <div>
        <LandingPage clientData={slug} />
      </div>
    </div>
  );
};
export default page;
