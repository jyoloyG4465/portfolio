"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useToc } from "@/app/context/TocContext";

const headings = [
  { id: "overview", title: "概要" },
  { id: "motivation", title: "作ったきっかけ" },
  { id: "features", title: "主な機能" },
  { id: "tech-stack", title: "技術スタック" },
  { id: "improvements", title: "開発の工夫点" },
  { id: "screenshots", title: "スクリーンショット" },
  { id: "learnings", title: "得られた学び・感想" },
  { id: "closing", title: "おわりに" },
];

export default function AiChatAnalysisPage() {
  const { setHeadings } = useToc();

  useEffect(() => {
    setHeadings(headings);
  }, []);

  return (
    <div className="page-container">
      <div className="product-title">AIチャット履歴分析</div>
      <div className="top-photo">
        <img src="/ai-chat-analysis-top.png" />
      </div>

      <section id="overview" className="page-section">
        <div className="section-title">概要</div>
        <div className="career-paragraph">
          YouTubeからダウンロードした自分の視聴履歴をAWSにアップロードし、Glue/Athenaで分析。
          さらにBedrock（Claude）を使ったAIチャットで、視聴傾向について自然言語で質問できるサーバーレスシステムです。
        </div>
        <div className="career-paragraph">
          以下のURLにアクセスするとデプロイ済みのアプリケーションを使用可能です。
        </div>
        <div className="career-paragraph">
          <Link
            href="https://main.d334pzuy0fx5ee.amplifyapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="page-link"
          >
            https://main.d334pzuy0fx5ee.amplifyapp.com
          </Link>
        </div>
        <div className="career-paragraph">
          デモ用アカウントでログインして試すことができます。
        </div>
        <ul className="section-list">
          <li>メールアドレス: demo@example.com</li>
          <li>パスワード: DemoUser123!</li>
        </ul>
      </section>

      <section id="motivation" className="page-section">
        <div className="section-title">作ったきっかけ</div>
        <div className="career-paragraph">
          自分のYouTube視聴履歴を分析してみたいという興味から始まりました。history-view-toolsでローカル完結の可視化は実現できていましたが、
          「AIに話しかけながら分析できたら面白いのでは」と感じたことが開発のきっかけです。
        </div>
        <div className="career-paragraph">
          また、業務でもAWS活用の機会が増えていたことから、S3・Glue・Athena・Bedrockといったサービスを組み合わせた
          サーバーレスアーキテクチャを実践で身につけたいという目的もありました。
        </div>
      </section>

      <section id="features" className="page-section">
        <div className="section-title">主な機能</div>
        <ul className="section-list">
          <li>S3への視聴履歴データアップロード</li>
          <li>AWS Glue / Athena によるデータ分析・クエリ実行</li>
          <li>Amazon Bedrock（Claude）によるAIチャット機能</li>
          <li>Lambda + API Gateway を用いたサーバーレス構成</li>
        </ul>
      </section>

      <section id="tech-stack" className="page-section">
        <div className="section-title">技術スタック</div>
        <ul className="section-list">
          <li>AWS: S3, Glue, Athena, Bedrock, Lambda, API Gateway</li>
          <li>フロントエンド: Next.js（TypeScript）</li>
          <li>インフラ構築: AWS CDK</li>
        </ul>
      </section>

      <section id="improvements" className="page-section">
        <div className="section-title">開発の工夫点</div>
        <ul className="section-list">
          <li>AWS CDKによるインフラのコード化で再現性・保守性を向上</li>
          <li>Athenaを活用したコスト効率の良い分析基盤の構築</li>
          <li>Bedrockを使ったAIチャットで、データ分析結果を自然言語で探索可能に</li>
        </ul>
      </section>

      <section id="screenshots" className="page-section">
        <div className="section-title">スクリーンショット</div>
        <div className="career-paragraph">・AIチャット画面</div>
        <div className="top-photo">
          <img src="/ai-chat-analysis-top.png" />
        </div>
      </section>

      <section id="learnings" className="page-section">
        <div className="section-title">得られた学び・感想</div>
        <ul className="section-list">
          <li>AWSサーバーレスサービスを組み合わせた分析基盤構築の経験</li>
          <li>AWS CDKによるインフラのコード管理の実践</li>
          <li>Bedrock（Claude）を活用したAIチャット機能の実装経験</li>
        </ul>
      </section>

      <section id="closing" className="page-section">
        <div className="section-title">おわりに</div>
        <div className="career-paragraph">
          このプロジェクトを通じて、AWSのサーバーレスサービスを活用したデータ分析基盤と、
          生成AIを組み合わせたインタラクティブなシステムを構築する経験を得ました。
          今後も新しい技術を取り入れながら、実用的なシステム開発に挑戦していきたいです。
        </div>
      </section>

      <div className="link-right">
        <Link
          href="https://github.com/jyoloyG4465/aws-serverless-analytics"
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
