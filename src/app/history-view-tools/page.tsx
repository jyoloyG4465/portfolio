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
        <div>上の画像がアーキテクチャ図になります。今回、Docker を利用してローカル環境内で完結するアーキテクチャを採用しました。これにより、個人情報である視聴履歴を外部に送信されるリスクをなくしました。</div>
         <div>また、インポートしたデータは PostgreSQL に保存し永続化することで、過去と現在の視聴傾向を比較しやすくしています。</div>
         <div>さらに、UXを向上させるためフロントエンドでは ECharts ライブラリを活用し、複数種類のグラフでリアクティブに可視化できるようにしました。</div>
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
        この開発を通じて、0→1でアプリケーションを立ち上げる一連の流れを実践でき、DockerやDB連携などの基礎技術をより深く理解することができました。
        また、個人データを扱う上でのセキュリティ意識や、グラフを使った直感的なUI設計など、普段の業務では得られにくい学びも多くありました。
        自分の興味と直結したテーマだったからこそ、モチベーションを保ちつつ主体的に取り組めたことも大きな経験でした。
      </section>

      <section id="closing" className="page-section">
        <div className="section-title">おわりに</div>
        今回の開発を通じて、技術的なスキルだけでなく、自分の関心を形にするおもしろさや、主体的に学び続ける姿勢の大切さを実感しました。
        新しい分析機能の追加など、今後も改善の余地があるため、必要に応じて継続的に手を加えていくつもりです。
        今後もこうした小さなアウトプットを重ねながら、実務にも活かせる技術力を磨いていきたいと考えています。
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
