"use client";
import dynamic from "next/dynamic";
import styles from "./page.module.scss";

const FeelingsWheel = dynamic(async () => await import("./FeelingsWheel"), {
  ssr: false,
});

// const TestWheel = dynamic(async () => await import("./TestWheel"), {
//   ssr: false,
// });

export default function Page() {
  return (
    <main className={styles.main}>
      {/* <TestWheel /> */}
      <FeelingsWheel />
    </main>
  );
}
