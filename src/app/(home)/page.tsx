"use client";
import Image from "next/image";
import Categories from "./components/categories";

export default function Home() {
  return (
    <div>
      <Image
        src="/banner (1).png"
        height={0}
        width={0}
        className="h-auto w-full"
        sizes="100vw"
        alt="Ate 55% de desconto"
      />
      <div className="mt-8">
        <Categories />
      </div>
    </div>
  );
}
