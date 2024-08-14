import Contact from "@/components/Contact";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const ContactPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div>
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
