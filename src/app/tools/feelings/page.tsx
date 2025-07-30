"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./page.module.scss";

const FeelingsWheel = dynamic(async () => await import("./FeelingsWheel"), {
  ssr: false,
});

export default function Page() {
  return (
    <main className={styles.main}>
      <FeelingsWheel />
    </main>
  );
}
