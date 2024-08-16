import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

export default function App({ Component, pageProps }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      <Navbar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Component {...pageProps} />
      </Suspense>
      {pathname.includes("register") ? null : <Footer />}
    </div>
  );
}
