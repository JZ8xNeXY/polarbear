import type { Locale } from '@/lib/locale'

export type ArticleSource = {
  title: string
  url: string
  publisher: string
  publishedAt: string
  note: string
}

export type ArticleSection = {
  heading: string
  paragraphs: string[]
}

export type LocalizedArticle = {
  title: string
  excerpt: string
  summaryLines: string[]
  sections: ArticleSection[]
  actionTitle: string
  actionBody: string
  source: ArticleSource
}

export type Article = {
  slug: string
  readingMinutes: number
  updatedAt: string
  locales: Record<Locale, LocalizedArticle>
}

export const articles: Article[] = [
  {
    slug: 'sea-ice-and-polar-bear-health',
    readingMinutes: 4,
    updatedAt: '2026-02-11',
    locales: {
      ja: {
        title: '海氷が減ると、なぜホッキョクグマの体調に影響するの？',
        excerpt:
          'PBIが紹介する研究をもとに、海氷の減少がホッキョクグマの体調にどのように関わるのかを、できるだけやさしく整理しました。',
        summaryLines: [
          '海氷が使える期間が短いほど、狩りの機会が減る傾向があります。',
          '食べる量が減ると、体重や子育てに影響が出る可能性があります。',
          '影響は地域で差があるため、個体群ごとの観察が大切です。',
        ],
        sections: [
          {
            heading: 'いま、どのような変化が起きている？',
            paragraphs: [
              'PBIが紹介する研究では、海氷の減少とホッキョクグマの健康指標の低下に関連があることが示されています。',
              'とくに、海氷が早く割れ、戻る時期が遅い地域では、負担が大きくなりやすいと報告されています。',
            ],
          },
          {
            heading: 'なぜ体調に影響しやすいの？',
            paragraphs: [
              'ホッキョクグマは海氷を足場にしてアザラシを狩ります。足場が減ると、食べる機会そのものが少なくなります。',
              '食事不足が続くと、体力だけでなく繁殖や子育てにも影響が及ぶ可能性があります。',
            ],
          },
          {
            heading: '誤解されやすい点',
            paragraphs: [
              '「寒い地域だから問題は小さい」という見方だけでは、状況を十分に説明できません。',
              '重要なのは気温だけでなく、狩りに使える海氷が、いつ・どこに・どれだけあるかです。',
            ],
          },
        ],
        actionTitle: '今日できること',
        actionBody:
          'PBIの元記事を1本読み、印象に残った1文を身近な方に共有してみませんか。会話が、次の行動のきっかけになることがあります。',
        source: {
          title: 'Arctic Sea Ice Loss Increasingly Affects Polar Bear Health',
          url: 'https://polarbearsinternational.org/news-media/articles/arctic-sea-ice-loss-increasingly-affects-polar-bear-health/',
          publisher: 'Polar Bears International',
          publishedAt: '2025-01-30',
          note: '本記事は上記ページの内容をもとに、一般向けに再構成した要約です。',
        },
      },
      en: {
        title: 'Why Does Less Sea Ice Hurt Polar Bear Health?',
        excerpt:
          'Based on a PBI source article, this guide explains in simple terms how sea-ice loss affects polar bear health.',
        summaryLines: [
          'Shorter sea-ice seasons reduce hunting opportunities.',
          'Less food can lower body condition and reduce parenting capacity.',
          'Impacts differ by region, so subpopulation-level tracking matters.',
        ],
        sections: [
          {
            heading: 'What is happening now?',
            paragraphs: [
              'PBI highlights research linking sea-ice loss with worsening health indicators in polar bears.',
              'Pressure tends to be higher in areas where sea ice breaks up earlier and returns later.',
            ],
          },
          {
            heading: 'Why does it affect health?',
            paragraphs: [
              'Polar bears hunt seals from sea ice. When that platform shrinks, feeding opportunities shrink too.',
              'Sustained food stress can affect body condition, reproduction, and cub survival.',
            ],
          },
          {
            heading: 'A common misunderstanding',
            paragraphs: [
              '“They live in cold places, so they are fine” is misleading.',
              'The key factor is not only temperature. It is the timing, location, and duration of usable sea ice.',
            ],
          },
        ],
        actionTitle: 'One Action for Today',
        actionBody:
          'Read one original PBI article and share one key takeaway with someone close to you. Awareness often starts with one conversation.',
        source: {
          title: 'Arctic Sea Ice Loss Increasingly Affects Polar Bear Health',
          url: 'https://polarbearsinternational.org/news-media/articles/arctic-sea-ice-loss-increasingly-affects-polar-bear-health/',
          publisher: 'Polar Bears International',
          publishedAt: '2025-01-30',
          note: 'This page is a simplified interpretation for a general audience.',
        },
      },
      zh: {
        title: '海冰减少，为什么会影响北极熊健康？',
        excerpt:
          '基于 PBI 的原始文章，我们用更易懂的方式说明海冰减少与北极熊健康之间的关系。',
        summaryLines: [
          '可利用海冰时间越短，捕猎机会越少。',
          '食物不足会影响体况，也会影响育幼能力。',
          '不同地区影响程度不同，必须按亚种群持续观察。',
        ],
        sections: [
          {
            heading: '现在发生了什么？',
            paragraphs: [
              'PBI 介绍的研究显示，海冰减少与北极熊健康指标下降存在关联。',
              '在海冰更早破裂、回冻更晚的地区，压力通常更明显。',
            ],
          },
          {
            heading: '为什么会影响健康？',
            paragraphs: [
              '北极熊依赖海冰捕猎海豹。海冰减少，捕猎机会也会减少。',
              '长期进食不足不仅影响体力，也会影响繁殖和育幼。',
            ],
          },
          {
            heading: '常见误解',
            paragraphs: [
              '“它们生活在寒冷地区，所以问题不大”并不准确。',
              '关键不只是温度，而是可用于捕猎的海冰在何时、何地、持续多久。',
            ],
          },
        ],
        actionTitle: '今天可以做的一件事',
        actionBody:
          '阅读一篇 PBI 原文，并把你记住的一句话分享给身边的人。很多行动都从一次交流开始。',
        source: {
          title: 'Arctic Sea Ice Loss Increasingly Affects Polar Bear Health',
          url: 'https://polarbearsinternational.org/news-media/articles/arctic-sea-ice-loss-increasingly-affects-polar-bear-health/',
          publisher: 'Polar Bears International',
          publishedAt: '2025-01-30',
          note: '本文根据上述来源做了面向普通读者的简化解读。',
        },
      },
    },
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getArticleSlugs(): string[] {
  return articles.map((article) => article.slug)
}
