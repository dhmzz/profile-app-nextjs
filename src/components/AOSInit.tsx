"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: false, // Animasi akan berjalan setiap kali elemen terlihat
        offset: 50,
        delay: 0,
        mirror: false,
    });
  }, []);

  return null;
}
