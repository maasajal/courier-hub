import Banner from "@/pages/home/Banner";
import Services from "@/pages/home/Services";

export default function Home() {
  return (
    <div>
      <main className="text-center">
        <Banner />
        <h1 className="uppercase py-5">Courier Hub - Kiitos Dost</h1>
        <Services />
      </main>
    </div>
  );
}
