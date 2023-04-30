"use client";
import Featured from "@/components/Featured";
import PizzaList from "@/components/PizzaList";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <>
      <Featured />
      <PizzaList />
    </>
  );
}
