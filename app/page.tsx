import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20 min-h-screen">
        <section className="flex h-[80vh] items-center justify-center">
          <h1 className="text-5xl font-bold">
            Portfolio Coming Soon 🚀
          </h1>
        </section>
      </main>
    </>
  );
}