"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useToc } from "@/app/context/TocContext";
import styles from "./DateCalculation.module.scss";

const headings = [
  { id: "introduction", title: "概要" },
  { id: "reason", title: "きっかけ" },
  { id: "skills", title: "技術スタック" },
  { id: "products", title: "開発の工夫点" },
  { id: "certifications", title: "スクリーンショット" },
  { id: "learnings", title: "得られた学び・感想" },
  { id: "closing", title: "おわりに" },
];

export default function DateCalculationPage() {
  const { setHeadings } = useToc();

  useEffect(() => {
    setHeadings(headings);
  }, []);

  return (
    <div className="page-container">
      <div className="product-title">date-calculation</div>
      <div className="top-photo">
        <img src="/date-calculation-top.png" />
      </div>
      <section id="introduction" className="page-section">
        <div className="section-title">概要</div>
        <p></p>
      </section>

      <section id="reason" className="page-section">
        <div className="section-title">主な機能</div>
      </section>

      <section id="skills" className="page-section">
        <div className="section-title">技術スタック</div>
        <ul className={styles.list}>
          <li>フロントエンド: Angular (TypeScript)</li>
          <li>バックエンド: Python (Django)</li>
          <li>データベース: PostgreSQL</li>
          <li>インフラ/環境構築: Docker, Docker Compose</li>
          <li>CI/CD: GitHub Actions</li>
        </ul>
      </section>

      <section id="products" className="page-section">
        <div className="section-title">開発の工夫点</div>
      </section>

      <section id="certifications" className="page-section">
        <div className="section-title">スクリーンショット</div>
        <p>※実際の画面キャプチャをここに表示予定</p>
      </section>

      <section id="learnings" className="page-section">
        <div className="section-title">得られた学び・感想</div>
      </section>

      <section id="closing" className="page-section">
        <div className="section-title">おわりに</div>
        <p></p>
      </section>

      <div className={styles.linkRight}>
        <Link
          href="https://github.com/your-username/history-view-tools"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          GitHub リポジトリを見る
        </Link>
      </div>
    </div>
  );
}
