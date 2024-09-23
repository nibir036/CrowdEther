import Image from "next/image";
import LandingPage from "@/components/landingPage";
import SignUp from "./signup/page";
import LogIn from "./login/page";
import Hpage from "./home/page";
import CreateProjectPage from "./projects/create-project";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
     <LandingPage/>
     {/* <CreateProjectPage/> */}
     {/* <LogIn/> */}
     {/* <SignUp/> */}
     {/* <Hpage/> */}
     {/* <AdminLogIn/> */}
     {/* <Dashboard/> */}
    </main>
  );
}
