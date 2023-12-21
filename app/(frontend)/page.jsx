import HeroSection from "@/components/HeroSection";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {
  // GETTING SESSION DATA IN SERVER SIDE
  const session = await getServerSession(authOptions);
  if(session){
    console.log(session?.user)
  }
  return (
    <main>
      <HeroSection />
    </main>
  );
}
