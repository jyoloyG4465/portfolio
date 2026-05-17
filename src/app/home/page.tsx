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
              <strong>名前：</strong>jyoloyG
            </li>
            <li>
              <strong>学歴：</strong>大学院卒（国立大学大学院 情報系修了）
            </li>
            <li>
              <strong>経験：</strong>
              事業会社・SIerの両方でITエンジニアを経験
            </li>
            <li>
              <strong>趣味：</strong>旅行、野球観戦、ドラマ鑑賞
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
            を担当し、30件以上の機能開発・改善を実施
          </li>
          <li>
            ・TypeScript/Angular・Python/Django
            を用いた設計・実装・コードレビューを担当
          </li>
          <li>
            ・サブリーダーとして5名体制のチームでタスク管理・技術フォローを担当
          </li>
          <li>・パフォーマンス改善（表示速度40%向上など）にも従事</li>
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
              <td>Python（Django）, Java, Go</td>
            </tr>
            <tr>
              <td>インフラ</td>
              <td>Linux, Docker, AWS </td>
            </tr>
            <tr>
              <td>その他</td>
              <td>
                VBA, GitHub, Swagger, Jira, Jenkins, Confluence, GitHub Actions,
                Scrapbox
              </td>
            </tr>
            <tr>
              <td>DB</td>
              <td>PostgreSQL, DuckDB</td>
            </tr>
            <tr>
              <td>AIツール</td>
              <td>Claude Code, Gemini CLI, GPT-4</td>
            </tr>
          </tbody>
        </table>
        ※Next.jsやGitHub
        Actions、AWSなど一部技術については、自主開発や個人学習での使用経験が中心です。
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
            description="youtubeの閲覧履歴を手動で取り込んで、グラフで可視化します"
            url="/history-view-tools"
          />
          <ProductCard
            title="日数計算ツール"
            description="特定日からの経過日数や期間や、指定した日付からN日後の日付を自動計算します"
            url="/date-calculation"
          />
          <ProductCard
            title="AIチャット履歴分析"
            description="YouTube閲覧履歴をAWSで分析し、AIチャットで質問できます"
            url="/ai-chat-analysis"
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
          開発だけに閉じず、
          <strong>
            企画・改善・運用まで一貫して関わりながら、プロダクト成長に責任を持てるエンジニア
          </strong>
          を目指しています。技術・業務・ユーザー視点を併せ持ち、継続的な改善を通じて価値を届けていきたいです。
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
