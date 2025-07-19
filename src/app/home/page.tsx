"use client"; // Contextのstateを操作するのでクライアントコンポーネントにする

import { useEffect } from "react";
import { useToc } from "../context/TocContext";

const headings = [
  { id: "usage", title: "aaa" },
  { id: "graph", title: "aaaaaaa" },
  { id: "note", title: "aaaaaa" },
];

export default function HomePage() {
  const { setHeadings } = useToc();

  useEffect(() => {
    setHeadings([]);
  }, []);
  // クリーンアップで目次リセットしたい場合はここに return () => setHeadings([]);
  //  [setHeadings]);

  return (
    <>
      <h1 id="usage">使い方</h1>
      <h2 id="graph">グラフで見る</h2>
      <h2 id="note">注意点</h2>
      <div className="content">ようこそ、ホームページへ！</div>
    </>
  );
}
