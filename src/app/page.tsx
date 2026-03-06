// web/src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/lib/api";
import PostArchiveList from "@/components/posts/PostArchiveList";

const currentProjects = [
  {
    title: "Auction",
    status: "個人開発",
    image: "/projects/auction.png",
    imageAlt: "Auction project preview",
    description: [
      "オークションサービス",
      "- 市場相場を分かりやすく買い手と売り手を繋ぐ",
      "",
      "使用技術 Next.js・Rails API",
      "GitHub Actions を用いて CI/CDで",
      "AWS 上にデプロイしています。",
    ],
    href: "https://auction.jongin.blog",
    github: "https://github.com/k1414k/auction",
    slug: "/blog/designing-auction-architecture",
  },
  {
    title: "Admin",
    status: "個人開発",
    image: "/projects/admin.png",
    imageAlt: "Admin project preview",
    description: [
      "管理者サイト",
      "- このドメイン上のプロジェクトの管理・権限",
      "",
      "使用技術 Vue3・Rails API",
      "GitHub Actions を用いて CI/CDで",
      "AWS 上にデプロイしています。",
    ],
    href: "https://admin.jongin.blog",
    github: "https://github.com/k1414k/admin",
    slug: "/blog/designing-infrastructure-for-app",
  },
];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Ruby on Rails",
  "AWS",
  "Docker",
  "PostgreSQL",
  "GitHub Actions",
];

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-[#f5f5f3] text-zinc-900">
      <main className="mx-auto max-w-[1600px] px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-2rem)] gap-4 lg:grid-cols-[280px_minmax(0,1fr)_320px]">
          <aside className="order-1 rounded-[28px] border border-zinc-200 bg-white p-5 shadow-sm lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)] lg:overflow-auto">
            <div className="flex h-full flex-col">
              <div>
                <Link
                  href="/"
                  className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500"
                >
                  Profile
                </Link>

                <div className="mt-8">
                  <div className="-my-5 ml-1">リ　ジョンイン</div>
                  <h1 className="mt-4 text-2xl font-semibold tracking-tight">
                    李　鍾仁
                  </h1>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">
                    Full Stack Developer
                  </p>
                </div>

                <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                    自己紹介
                  </p>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    Rails API / Next.js / AWS を中心に、設計・実装・公開まで
                    一通り進める個人開発を継続しています。
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                <a
                  href="https://github.com/k1414k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-2xl bg-zinc-900 text-sm font-medium text-white transition hover:opacity-90 pr-3"
                >
                  <div className="relative aspect-square w-8">
                    <Image
                      src={"/github.png"}
                      alt={"git"}
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                  GitHub
                </a>
                <a
                  href="mailto:rihito4929@gmail.com"
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-zinc-300 bg-gray-500 text-sm font-medium text-white transition hover:bg-gray-400"
                >
                  メールする
                </a>
                {/* ログイン不要ダイレクトにする */}
              </div>

              <div className="mt-8 border-t border-zinc-200 pt-6">
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-8 text-xs text-zinc-400">
                © 2026 LEE JONGIN
              </div>
            </div>
          </aside>

          <section className="order-2 rounded-[28px] border border-zinc-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <div className="border-b border-zinc-200 pb-6">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Current
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                プロジェクト一覧
              </h2>
            </div>

            <div className="mt-6 space-y-5">
              {currentProjects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-[26px] border border-zinc-200 bg-zinc-50 p-5 sm:p-6"
                >
                  
                  <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="animated-border-card inline-flex rounded-full p-[1px]">
                          <span className="animated-border-inner inline-flex rounded-full bg-white px-3 py-1 text-xs font-medium text-zinc-700">
                            デプロイ中
                          </span>
                        </span>

                        <span className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs font-medium text-zinc-700">
                          {project.status}
                        </span>

                        <span className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs font-medium text-zinc-700">
                          Open Project
                        </span>
                      </div>

                      <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-zinc-600 sm:text-base">
                        {project.description.map((line, index) => (
                          <span key={`${project.title}-${index}`}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-11 items-center justify-center rounded-full bg-blue-500 px-6 text-sm font-medium text-white transition hover:opacity-90"
                        >
                          サイトへ移動
                        </a>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 bg-white px-6 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50"
                        >
                          GitHub
                        </a>

                        <a
                          href={project.slug}
                          rel="noopener noreferrer"
                          className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 bg-white px-6 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50"
                        >
                          技術記事を見る（設計）
                        </a>
                      </div>
                    </div>

                    <div className="overflow-hidden rounded-[22px] border border-zinc-200 bg-zinc-50 shadow-sm">
                      <div className="relative h-[300px] w-full sm:h-[360px] lg:h-[430px]">
                        <Image
                          src={project.image}
                          alt={project.imageAlt}
                          fill
                          priority
                          className="object-contain object-center p-3"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="order-3 rounded-[28px] border border-zinc-200 bg-white p-5 shadow-sm lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)] lg:overflow-auto">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Archive
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                記事一覧
              </h2>
            </div>

            <PostArchiveList posts={posts} />
          </aside>
        </div>
      </main>
    </div>
  );
}