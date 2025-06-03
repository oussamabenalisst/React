import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Description from "@/components/Description";
import Link from "next/link";

export function Home() {
  var test=""
  return (
    <main style={{color:"red"}}>
        <Header/>
        <h1>hello world</h1>
        <Description var="1-This is a simple description of the page."/>
        { test && <Description var="2-This is a simple description of the page."/>}
        <Link href="/tp1" > tp1 </Link>
        <Footer/>
    </main>

  );
}
export default Home;
