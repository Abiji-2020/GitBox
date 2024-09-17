"use client";

import { useState, useEffect } from "react";
import styles from "./style.module.css";
import { getCookies, removeCookies } from "./cookies/storeCookies";
import { useRouter } from "next/navigation";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import MainContainer from "./InitialPage/MainContainer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkCookies = async () => {
      const cookies = await getCookies();
      console.log("Cookies:", cookies);
      if (cookies?.email) {
        //Modified to develping the main page
        router.push("/login");
      } else {
        setIsLoading(false); // Cookies are valid, hide loading screen
      }
    };

    checkCookies();
  }, [router]);

  const logout = async () => {
    await removeCookies();
    const cookies = await getCookies();
    console.log("After logout, cookies:", cookies);
    router.push("/login"); // Redirect to login after logging out
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <NavBar />
      <MainContainer />
    </>
  );
}
