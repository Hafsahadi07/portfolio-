
import Header from "./components/header";
import Main from "./components/Main";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Footer from "./components/footer";



export default function Home() {
  return (
    <div>
      <Header />
      
        <Main />
        <Projects />
        <Experience />
       <Contact />
   
      <Footer />
    </div>
  );
}
