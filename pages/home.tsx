import React from "react";
import { useRouter } from "next/router";
export default function HomeDisplay() {
  const router = useRouter();
  router.push("/test");
  return <>11111111111111</>;
}
