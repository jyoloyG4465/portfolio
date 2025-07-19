"use client"; // Contextのstateを操作するのでクライアントコンポーネントにする

import { useEffect } from "react";
import { useToc } from "../context/TocContext";

const headings = [
  { id: "usage", title: "使い方" },
  { id: "graph", title: "グラフで見る" },
  { id: "note", title: "注意点" },
];

export default function DateCalculationPage() {
  const { setHeadings } = useToc();

  useEffect(() => {
    setHeadings(headings);
    // クリーンアップで目次リセットしたい場合はここに return () => setHeadings([]);
  }, [setHeadings]);

  return (
    <>
      <h1 id="usage">使い方</h1>
      <h2 id="graph">グラフで見る</h2>
      <h2 id="note">注意点</h2>
      <div className="content">これは日数計算へ！</div>
    </>
  );
}
