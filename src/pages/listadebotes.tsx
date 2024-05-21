import React, { useEffect } from "react";
import { BoteDatabase } from "../data/BoteDatabase";
import { BoatDetails } from "./Boatdetails";
import { useScrollRestoration } from "gatsby";

export default function Component(props: any) {
  const match = /bote=(\w+)/.exec(props.location.search);

  if (!match) return null;

  const bote = new BoteDatabase().find(match[1]);
  if (!bote) return <p>Bote {match[1]} no encontrado en base de datos</p>;

  return <BoatDetails bote={bote} />;
}
