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
        <div className="section-title">主な機能</div>
        <ul className="section-list">
          <li>YouTubeの視聴履歴 (HTML) をインポート</li>
          <li>視聴時間や頻度をグラフ化（時間帯・日付別など）</li>
          <li>カテゴリ別の視聴傾向分析</li>
          <li>Webベースでの視覚的な操作UI</li>
        </ul>
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
        <ul className="section-list">
          <li>Django REST APIの実装とAngularとの接続経験</li>
          <li>Docker Composeを活用した複数サービス構成の理解</li>
          <li>時系列データの取り扱いや視覚化技術の実践</li>
        </ul>
      </section>

      <section id="closing" className="page-section">
        <div className="section-title">おわりに</div>
        <p>
          このプロジェクトを通じて、バックエンドからフロントエンドまでのフルスタック開発を実践しました。今後も自身の興味を深掘りしながら、データを活用した可視化や分析の知見を広げていきたいです。
        </p>
      </section>

      <div className="link-right">
        <Link
          href="https://github.com/your-username/history-view-tools"
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
