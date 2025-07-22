"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useToc } from "@/app/context/TocContext";
import styles from "./HistoryViewTools.module.scss";

const headings = [
  { id: "introduction", title: "概要" },
  { id: "reason", title: "作ったきっかけ" },
  { id: "skills", title: "技術スタック" },
  { id: "products", title: "開発の工夫点" },
  { id: "certifications", title: "スクリーンショット" },
  { id: "learnings", title: "得られた学び・感想" },
  { id: "closing", title: "おわりに" },
];

export default function HistoryViewToolsPage() {
  const { setHeadings } = useToc();

  useEffect(() => {
    setHeadings(headings);
  }, []);

  return (
    <div className="page-container">
      <div className="product-title">history-view-tools</div>
      <div className="top-photo">
        <img src="/history-view-tools-top.png" />
      </div>
      <section id="introduction" className="page-section">
        <div className="section-title">概要</div>
        <div>
          このツールは、YouTube閲覧履歴をもとに視聴傾向をグラフで可視化するアプリケーションです。履歴データを一度取り込めば、
          棒グラフや線グラフなどの形式で視聴パターンを分析できます。
        </div>
        <div>
          ジャンルごとの変化、長期的な視聴スタイルの推移など、
          「いつ、どんな動画を見ていたのか？」「その傾向は時間とともにどう変化したのか？」がひと目で分かります。
          自分でも気づかなかった“視聴のクセ”を、データから発見してみてください。
        </div>
      </section>

      <section id="career" className="page-section">
        <div className="section-title">作ったきっかけ</div>
        <div>
          0→1でアプリケーションを開発する経験を積みたかったことが一番大きいです。普段の業務ではエンハンス開発がメインのため、あまり対応することのない
          Dockerや初期環境のセットアップなどを実践を通して深く理解したいという思いもありました。
        </div>
        <div>
          さらに、自分自身の視聴履歴を可視化して分析すること自体が純粋に面白そうだと感じたことや、
          Googleで調べても同様の事例が見当たらなかったことから、自分で一から取り組んでみようと考えました。
        </div>
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
        <ul className={styles.list}>
          <li>データの整形やタイムゾーン処理で履歴データの正確性を担保</li>
          <li>Docker環境で開発・本番環境の差異を最小化</li>
          <li>グラフの描画パフォーマンス改善のための非同期読み込み</li>
        </ul>
      </section>

      <section id="certifications" className="page-section">
        <div className="section-title">スクリーンショット</div>
        <div>・視聴履歴をデータセットとして登録・更新・削除</div>
        <video src="/dataset-use.mp4" controls className={styles.video}>
          お使いのブラウザは video タグをサポートしていません。
        </video>
        <div>・データセットからグラフで可視化</div>
        <video src="/analysis-use.mp4" controls className={styles.video}>
          お使いのブラウザは video タグをサポートしていません。
        </video>
      </section>

      <section id="learnings" className="page-section">
        <div className="section-title">得られた学び・感想</div>
        <ul className={styles.list}>
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
