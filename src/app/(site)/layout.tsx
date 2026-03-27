import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <div className="flex justify-center py-8">
        <a href="#top" className="text-white/30 hover:text-white/60 transition-colors text-2xl" style={{ display: "inline-block" }}>^</a>
      </div>
      <Footer />
    </>
  );
}
