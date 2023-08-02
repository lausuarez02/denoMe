import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import Card from "../components/Card.tsx";
import { Button } from "../components/Button.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
    <Card/>
    </>
  );
}
