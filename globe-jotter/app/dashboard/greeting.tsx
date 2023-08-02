import React from "react";
import { getUser } from "../data";

export default async function Greeting() {
  const user = await getUser();
  return <p className="text-2xl sm:text-4xl mb-8">Welcome, {user.firstName}</p>;
}
