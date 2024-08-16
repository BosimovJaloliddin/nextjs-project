import Login from "@/components/Login";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Register = () => {
  const router = useRouter();
  return (
    <div className="container">
      <Head>
        <title>Register</title>
      </Head>
      <div>
        <Login />
      </div>
    </div>
  );
};

export default Register;
