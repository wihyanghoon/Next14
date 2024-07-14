"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>HOME</Link>
          {pathname === "/" ? "here" : ""}
        </li>
        <li>
          <Link href={"/about-us"}>ABOUT-US</Link>
          {pathname === "/about-us" ? "here" : ""}
        </li>
      </ul>
    </nav>
  );
}
