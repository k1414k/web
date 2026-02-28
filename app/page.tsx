import Link from "next/link";

const currentProjects = [
  {
    title: "Auction",
    status: "Building",
    description:
      "Rails API と Next.js を使った中古オークションサービス。",
    points: [
      "API とフロントを分離",
      "一覧・詳細・購入導線を整理",
      "保守しやすい構成を意識",
    ],
    href: "https://auction.jongin.blog",
    github: "https://github.com/k1414k/auction",
  },
  {
    title: "Lab",
    status: "Active",
    description:
      "中古車テーマの実験用プロダクト。UI と導線の検証用。",
    points: [
      "軽く試せる構成",
      "改善しやすさ重視",
      "ポータルとの接続を整理中",
    ],
    href: "https://lab.jongin.blog",
    github: "https://github.com/k1414k/lab",
  },
];

const pastProjects = [
  {
    title: "Jongin Blog",
    status: "Planned",
    description: "設計判断や制作記録をまとめるページ。",
    href: "/blog",
  },
  {
    title: "Project Archive",
    status: "Planned",
    description: "過去制作物を一覧で見られるページ。",
    href: "/projects",
  },
  {
    title: "Architecture Notes",
    status: "Planned",
    description: "技術選定や構成意図を残すページ。",
    href: "/notes",
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

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f3] text-zinc-900">
      <main className="mx-auto max-w-[1600px] px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-2rem)] gap-4 lg:grid-cols-[280px_minmax(0,1fr)_320px]">
          {/* Left */}
          <aside className="order-1 rounded-[28px] border border-zinc-200 bg-white p-5 shadow-sm lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)] lg:overflow-auto">
            <div className="flex h-full flex-col">
              <div>
                <Link
                  href="/"
                  className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500"
                >
                  jongin.blog
                </Link>

                <div className="mt-8">
                  <div className="h-14 w-14 rounded-2xl bg-zinc-900" />
                  <h1 className="mt-4 text-2xl font-semibold tracking-tight">
                    LEE JONGIN
                  </h1>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">
                    Full Stack Developer
                  </p>
                </div>

                <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                    About
                  </p>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    2019年から開発を継続。Next.js、Rails、AWS を中心に、
                    保守しやすい構成を意識して作っています。
                  </p>
                </div>

                <div className="mt-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                    Focus
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                    <li>Marketplace</li>
                    <li>UI / UX</li>
                    <li>Maintainability</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                <a
                  href="https://github.com/k1414k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-2xl bg-zinc-900 text-sm font-medium text-white transition hover:opacity-90"
                >
                  GitHub
                </a>
                <a
                  href="mailto:your-email@example.com"
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-zinc-300 bg-white text-sm font-medium text-zinc-900 transition hover:bg-zinc-50"
                >
                  Contact
                </a>
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

          {/* Center */}
          <section className="order-2 rounded-[28px] border border-zinc-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <div className="border-b border-zinc-200 pb-6">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Current
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                現在進行中のプロジェクト
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
                いま作っているものと、設計で意識している点を中心にまとめています。
              </p>
            </div>

            <div className="mt-6 space-y-5">
              {currentProjects.map((project, index) => (
                <div className="animated-border-card"
                    key={project.title}
                >
                  <article
                    className="overflow-hidden rounded-[26px] border border-zinc-200 bg-zinc-50
                      animated-border-inner overflow-hidden rounded-[25px]"
                  >
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition hover:bg-zinc-100/70"
                    >
                      <div className="p-5 sm:p-6">
                        <div className="flex flex-wrap items-center gap-3">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-medium ${
                              index === 0
                                ? "bg-zinc-900 text-white"
                                : "border border-zinc-300 bg-white text-zinc-700"
                            }`}
                          >
                            {project.status}
                          </span>
                          <span className="text-sm text-zinc-500">Open project</span>
                        </div>

                        <div className="mt-4 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                          <div>
                            <h3 className="text-2xl font-semibold tracking-tight">
                              {project.title}
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-zinc-600 sm:text-base">
                              {project.description}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                              {project.points.map((point) => (
                                <span
                                  key={point}
                                  className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700"
                                >
                                  {point}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="rounded-[22px] border border-zinc-200 bg-white p-4">
                            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                              Structure
                            </p>
                            <div className="mt-4 space-y-3">
                              <div className="rounded-2xl bg-zinc-100 px-4 py-3 text-sm text-zinc-700">
                                Frontend / Next.js
                              </div>
                              <div className="rounded-2xl bg-zinc-100 px-4 py-3 text-sm text-zinc-700">
                                Backend / Rails API
                              </div>
                              <div className="rounded-2xl bg-zinc-100 px-4 py-3 text-sm text-zinc-700">
                                Infra / AWS
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>

                    <div className="flex flex-col gap-3 border-t border-zinc-200 bg-white p-4 sm:flex-row">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 flex-1 items-center justify-center rounded-2xl bg-zinc-900 text-sm font-medium text-white transition hover:opacity-90"
                      >
                        Live
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 flex-1 items-center justify-center rounded-2xl border border-zinc-300 bg-white text-sm font-medium text-zinc-900 transition hover:bg-zinc-50"
                      >
                        GitHub
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-[24px] border border-zinc-200 bg-zinc-50 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Design
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  実装だけでなく、責務分離と今後の修正しやすさを意識しています。
                </p>
              </div>
              <div className="rounded-[24px] border border-zinc-200 bg-zinc-50 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Direction
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  UI、構成、運用のバランスを見ながら改善を続けています。
                </p>
              </div>
            </div>
          </section>

          {/* Right */}
          <aside className="order-3 rounded-[28px] border border-zinc-200 bg-white p-5 shadow-sm lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)] lg:overflow-auto">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Archive
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                これまでと次
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                完了済みや、今後追加するページの入口です。
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {pastProjects.map((project) => (
                <a
                  key={project.title}
                  href={project.href}
                  className="block rounded-[24px] border border-zinc-200 bg-zinc-50 p-5 transition hover:bg-zinc-100"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold text-zinc-900">
                      {project.title}
                    </h3>
                    <span className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-[11px] text-zinc-600">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {project.description}
                  </p>
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-[24px] border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                Quick Links
              </p>
              <div className="mt-4 grid gap-3">
                <a
                  href="https://auction.jongin.blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-zinc-300 bg-white text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
                >
                  Auction
                </a>
                <a
                  href="https://lab.jongin.blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-zinc-300 bg-white text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
                >
                  Lab
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}