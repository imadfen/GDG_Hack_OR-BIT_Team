import Link from "next/link";
import Login from "../pages/login";
import Menu from "../components/Menu";
import Judges from "../pages/judges";

export default function Home() {
  return (
    <>
      <Menu></Menu>
      <Judges></Judges>
    </>
  );
}
