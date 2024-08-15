import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Suspense } from "react";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Component {...pageProps} />
      </Suspense>
      <Footer />
    </div>
  );
}
