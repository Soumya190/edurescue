import Image from "next/image";
// import styles from "./page.module.css";
import login from '@/components/HomePage'
import { redirect } from "next/navigation";

export default function Home() {
  return (
    redirect('/login')
  );
}
