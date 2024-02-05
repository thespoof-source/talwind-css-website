import Head from "next/head";
import styles from "../styles/Home.module.css";
import Home from "../components/Home";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
export default function Main() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
