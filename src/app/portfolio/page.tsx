"use client"; // Contextのstateを操作するのでクライアントコンポーネントにする

import { useEffect } from "react";
import styles from "./Portfolio.module.scss";
import { useToc } from "../context/TocContext";
import Link from "next/link";

const headings = [
  { id: "introduction", title: "概要" },
  { id: "reason", title: "きっかけ" },
  { id: "skills", title: "技術スタック" },
  { id: "products", title: "開発の工夫点" },
  { id: "learnings", title: "得られた学び・感想" },
  { id: "closing", title: "おわりに" },
];

export default function PortfolioPage() {
  const { setHeadings } = useToc();

  useEffect(() => {
    setHeadings(headings);
  }, []);

  return (
    <div className="page-container">
      <div className="product-title">portfolio</div>

      <section id="introduction" className="page-section">
        <div className="section-title">概要</div>
      </section>

      <section id="reason" className="page-section">
        <div className="section-title">きっかけ</div>
      </section>

      <section id="skills" className="page-section">
        <div className="section-title">技術スタック</div>
        <ul className="section-list">
          <li>フロントエンド: Angular (TypeScript)</li>
          <li>バックエンド: Python (Django)</li>
          <li>データベース: PostgreSQL</li>
          <li>インフラ/環境構築: Docker, Docker Compose</li>
          <li>CI/CD: GitHub Actions</li>
        </ul>
      </section>

      <section id="products" className="page-section">
        <div className="section-title">開発の工夫点</div>
        <ul className="section-list">
          <li>データの整形やタイムゾーン処理で履歴データの正確性を担保</li>
          <li>Docker環境で開発・本番環境の差異を最小化</li>
          <li>グラフの描画パフォーマンス改善のための非同期読み込み</li>
        </ul>
      </section>

      <section id="learnings" className="page-section">
        <div className="section-title">得られた学び・感想</div>
      </section>

      <section id="closing" className="page-section">
        <div className="section-title">おわりに</div>
      </section>

      <div className="link-right">
        <Link
          href="https://github.com/jyoloyG4465/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="page-link"
        >
          GitHub リポジトリを見る
        </Link>
      </div>
    </div>
  );
}
