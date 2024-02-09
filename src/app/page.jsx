import Link from "next/link";
import Login from "../pages/login";
import Menu from "../components/Menu";
import HomePage from "../pages/home";

export default function Home() {
  return (
    <>
      <Menu></Menu>
      <HomePage></HomePage>
    </>
  );
}
