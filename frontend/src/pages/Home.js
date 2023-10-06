import { HomeContent } from "../components/kSComponents/HomeContent";
import NavBar from "../components/kSComponents/NavBar";
import HomeFooter from "../components/kSComponents/HomeFooter";

export default function Home() {
  return (
    <>
      {/* //Top NavBar */}
      <NavBar />
      {/* //Main Home Body Content*/}
      <HomeContent />
      {/* //Bottom Home Footer*/}
      <HomeFooter />
    </>
  );
}
