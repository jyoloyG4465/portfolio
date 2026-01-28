"use client";

import { useEffect } from "react";
import { useToc } from "../context/TocContext";
import styles from "./HomePage.module.scss";
import ProductCard from "./components/ProductCard";

const headings = [
  { id: "introduction", title: "自己紹介" },
  { id: "career", title: "職務経歴" },
  { id: "skills", title: "スキルセット" },
  { id: "products", title: "自主開発プロダクト" },
  { id: "certifications", title: "資格・語学" },
  { id: "vision", title: "目指すエンジニア像" },
  { id: "closing", title: "おわりに" },
];

export default function HomePage() {
  const { setHeadings } = useToc();

  useEffect(() => {
    setHeadings(headings);
  }, []);

  return (
    <div className="page-container">
      <div className="page-section" id="introduction">
        <div className="section-title">自己紹介</div>
        <div className={styles.profileContainer}>
          <div className={styles.photoWrapper}>
            <img src="/logo-grad.png" className={styles.profileImage} />
          </div>
          <ul className={styles.profileText}>
            <li>
              <strong>名前：</strong>jyoroyG
            </li>
            <li>
              <strong>年齢：</strong>20代後半
            </li>
            <li>
              <strong>学歴：</strong>国立大学大学院 情報系修了
            </li>
            <li>
              <strong>経験：</strong>
              事業会社・SIerの両方でITエンジニアを経験
            </li>
            <li>
              <strong>趣味：</strong>料理、温泉巡り、ドラマ鑑賞
            </li>
            <li>
              <strong>GitHub：</strong>
              <a
                href="https://github.com/jyoloyG4465"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/jyoloyG4465
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.paragraph}>
          はじめまして、jyoroyGと申します。フルスタックエンジニアとして、
          <strong>
            様々な現場で業務システムのリプレイスや、Webアプリの設計・実装
          </strong>
          まで幅広く対応してきました。現在は業務外でもアプリ開発を行いながら、知識の習得と実践を続けています。
        </div>
      </div>

      <div className="page-section" id="career">
        <div className="section-title">職務経歴</div>

        <div className={styles.subTitle}>
          インフラ系事業会社（2021年4月〜2023年4月）
        </div>
        <ul className={styles.list}>
          <li>
            ・グループ会社に出向し、
            <strong>業務パッケージシステム導入PJのPL</strong>
            として上流工程に従事
          </li>
          <li>・要件整理・ベンダーコントロール・勉強会の運営など対応</li>
          <li>・VBAによる業務アプリ開発、ヘルプデスク業務も担当</li>
        </ul>

        <div className={styles.subTitle}>
          Web領域を主軸とする日系SIer（2023年5月〜現在）
        </div>
        <ul className={styles.list}>
          <li>
            ・クライアント企業が提供する
            <strong>
              BtoB向けデータ分析プラットフォーム製品のエンハンス開発
            </strong>
            を担当し、既存機能の改修や追加開発を実施
          </li>
          <li>
            ・TypeScript/Angular・python/Django
            を用いた設計・実装・コードレビューを担当
          </li>
          <li>・軽度の新機能提案や要件整理、テスト設計にも関与</li>
        </ul>
      </div>

      <div className="page-section" id="skills">
        <div className="section-title">スキルセット</div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>分野</th>
              <th>技術・ツール</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>フロントエンド</td>
              <td>TypeScript（Angular, Next.js）, Javascript, HTML, SCSS</td>
            </tr>
            <tr>
              <td>バックエンド</td>
              <td>Python（Django）</td>
            </tr>
            <tr>
              <td>インフラ</td>
              <td>Linux, Docker, AWS（Lambda, RDS, CDK etc...） </td>
            </tr>
            <tr>
              <td>その他</td>
              <td>
                VBA, GitHub, Swagger, Jira, Jenkins, Confluence, Github Actions
              </td>
            </tr>
            <tr>
              <td>DB</td>
              <td>PostgreSQL, SQL Server</td>
            </tr>
            <tr>
              <td>AIツール</td>
              <td>Gemini CLI, Claude, GPT-4</td>
            </tr>
          </tbody>
        </table>
        ※Next.jsやGitHub
        Actions、AWSなど一部ツールについては、自主開発や個人学習での使用経験が中心です。
      </div>
      <div className="page-section" id="certifications">
        <div className="section-title">資格・語学</div>
        <ul className={styles.certificationList}>
          <li>基本情報技術者試験</li>
          <li>応用情報技術者試験</li>
          <li>情報処理安全確保支援士</li>
          <li>AWS Certified Cloud Practitioner</li>
          <li>AWS Certified Solutions Architect Associate</li>
          <li>AWS Certified Developer Associate</li>
          <li>AWS Certified SysOps Administrator Associate</li>
          <li>AWS Certified Data Engineer Associate</li>
          <li>AWS Certified Solutions Architect Professional</li>
          <li>AWS Certified DevOps Engineer Professional</li>
          <li>Linux Professional Institute Certification（LPIC）レベル1</li>
          <li>Linux Professional Institute Certification（LPIC）レベル2</li>
          <li>G検定</li>
          <li>TOEIC Listening & Reading Test 820点</li>
          <li>日商簿記検定 2級</li>
        </ul>
      </div>

      <div className="page-section" id="products">
        <div className="section-title">自主開発プロダクト</div>
        <div className={styles.cardGrid}>
          <ProductCard
            title="履歴閲覧ツール"
            description="youtubeの閲覧履歴をグラフで可視化します"
            url="/history-view-tools"
          />
          <ProductCard
            title="日数計算ツール"
            description="特定日からの経過日数や期間を自動計算します"
            url="/date-calculation"
          />
          <ProductCard
            title="営業報告集計ツール"
            description="LINEで投稿された営業報告を自動収集・集計します"
            url="/sales-report"
          />
          <ProductCard
            title="本サイト"
            description="自身の職務経歴やスキルセットを整理して掲載"
            url="/portfolio"
          />
        </div>
      </div>

      <div className="page-section" id="vision">
        <div className="section-title">目指すエンジニア像</div>
        <p className={styles.paragraph}>
          現場課題の本質を捉え、
          <strong>提案・設計・運用まで一気通貫で支援できるエンジニア</strong>
          を目指しています。マネジメント経験も重ね、チーム全体を動かす立場へ成長していきたいです。
        </p>
      </div>

      <div className="page-section" id="closing">
        <div className="section-title">おわりに</div>
        <p className={styles.paragraph}>
          ご覧いただきありがとうございます。GitHubもぜひご覧ください！
          <a
            href="https://github.com/jyoloyG4465"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/jyoloyG4465
          </a>
        </p>
      </div>
    </div>
  );
}
