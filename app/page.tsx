import Link from "next/link";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Ruby on Rails",
  "AWS",
  "Docker",
  "PostgreSQL",
  "GitHub Actions",
  "REST API",
  "UI/UX",
];

const projects = [
  {
    title: "Auction",
    subtitle: "中古オークションサービス",
    description:
      "Rails API + Next.js を中心に、出品・閲覧・購入導線を意識して設計している中古オークションサービス。機能を作るだけでなく、保守性・責務分離・運用しやすさも重視しています。",
    href: "https://auction.jongin.blog",
    github: "https://github.com/k1414k/auction",
    status: "Building",
    tech: ["Next.js", "TypeScript", "Ruby on Rails", "AWS", "Docker"],
    highlights: [
      "フロントとAPIを分離した構成",
      "プロダクトとしての導線・一覧・詳細体験を意識",
      "保守性を意識した設計と責務分割",
    ],
  },
  {
    title: "Lab",
    subtitle: "中古車サービス / 実験用プロダクト",
    description:
      "機能やUIの実験、プロダクト仮説の検証を目的にしたサービス。アイデアを形にする速さと、後から改善しやすい構成の両立を意識しています。",
    href: "https://lab.jongin.blog",
    github: "https://github.com/k1414k/lab",
    status: "Active",
    tech: ["Next.js", "React", "Tailwind CSS"],
    highlights: [
      "仮説検証を回しやすい軽量構成",
      "UI改善の実験場として運用",
      "ポータルから他サービスへつなぐ導線設計",
    ],
  },
  {
    title: "Jongin Blog",
    subtitle: "学習・設計・制作記録",
    description:
      "学んだことをそのままメモするだけでなく、『なぜそうしたか』まで残していくブログ。今後は設計判断・失敗談・改善過程も公開していく予定です。",
    href: "/blog",
    github: "https://github.com/k1414k",
    status: "Soon",
    tech: ["Next.js", "MDX or CMS"],
    highlights: [
      "学習ログではなく設計ログを残す",
      "就活で見られやすい判断プロセスを可視化",
      "制作物との往復導線を作る",
    ],
  },
];

const values = [
  {
    title: "保守性を重視",
    description:
      "動くだけでなく、後から読める・直せる・広げられるコードを書くことを重視しています。",
  },
  {
    title: "プロダクト目線",
    description:
      "画面単体ではなく、ユーザー導線・価値提供・改善余地を含めて考えるのが好きです。",
  },
  {
    title: "理解して作る",
    description:
      "AIツールが強くなった今こそ、表面的に作るのではなく、設計意図と仕組みを理解して作ることを大切にしています。",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <main className="mx-auto flex w-full max-w-6xl flex-col px-6 py-10 sm:px-10 lg:px-12">
        {/* Header */}
        <header className="mb-16 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-[0.2em] text-zinc-600 uppercase">
            jongin.blog
          </Link>

          <nav className="hidden gap-6 text-sm text-zinc-600 md:flex">
            <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
            <a href="#projects" className="hover:text-zinc-900 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-zinc-900 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
          </nav>
        </header>

        {/* Hero */}
        <section className="grid gap-10 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm md:grid-cols-[1.4fr_0.9fr] md:p-12">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
              Full Stack Developer / Product-minded Engineer
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              こんにちは、<br className="hidden sm:block" />
              <span className="text-zinc-950">LEE JONGIN</span> です。
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
              コードを書いて、その通りに動く面白さに魅了され、
              2019年から開発を続けています。
              ただ動くものではなく、<span className="font-semibold text-zinc-900">保守性が高く、改善し続けられるプロダクト</span>
              を作ることを大事にしています。
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
              最近はAIツールの進化によって、実装力だけでなく
              <span className="font-semibold text-zinc-900">「本質を理解する力」と「プロダクト全体を俯瞰する力」</span>
              がより重要だと考えています。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-zinc-900 px-5 text-sm font-medium text-white transition hover:opacity-90"
              >
                プロジェクトを見る
              </a>
              <a
                href="https://github.com/k1414k"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl bg-zinc-900 p-6 text-white">
            <div>
              <p className="text-sm text-zinc-300">Now Building</p>
              <h2 className="mt-2 text-2xl font-semibold">Auction Service</h2>
              <p className="mt-4 text-sm leading-7 text-zinc-300">
                Rails API + Next.js を軸に、中古オークションサービスを開発中。
                UI・設計・運用を分けて考えながら、長く育てられる形を目指しています。
              </p>
            </div>

            <div className="mt-8 space-y-3 text-sm text-zinc-300">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <span>Main Stack</span>
                <span className="font-medium text-white">Next.js / Rails / AWS</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <span>Focus</span>
                <span className="font-medium text-white">Maintainability</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Mindset</span>
                <span className="font-medium text-white">Build + Product View</span>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-24">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              About
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">どんな開発者か</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-24">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Projects
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                現在のプロジェクトと制作物
              </h2>
            </div>
            <a
              href="https://github.com/k1414k"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-sm font-medium text-zinc-600 transition hover:text-zinc-900 md:inline-block"
            >
              すべて見る →
            </a>
          </div>

          <div className="space-y-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm"
              >
                <div className="grid gap-0 lg:grid-cols-[1.25fr_0.95fr]">
                  <div className="p-8 md:p-10">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                        {project.status}
                      </span>
                      <span className="text-sm text-zinc-500">{project.subtitle}</span>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold tracking-tight">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <a
                        href={project.href}
                        target={project.href.startsWith("http") ? "_blank" : undefined}
                        rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex h-11 items-center justify-center rounded-xl bg-zinc-900 px-4 text-sm font-medium text-white transition hover:opacity-90"
                      >
                        プロジェクトを見る
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 items-center justify-center rounded-xl border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-zinc-200 bg-zinc-50 p-8 lg:border-t-0 lg:border-l">
                    <p className="text-sm font-semibold text-zinc-900">What I focused on</p>
                    <ul className="mt-4 space-y-3">
                      {project.highlights.map((point) => (
                        <li
                          key={point}
                          className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm leading-7 text-zinc-600"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-24">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Skills
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">対応技術</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
              特定技術を並べるだけでなく、どの技術をどの責務に使うべきかを考えながら選定します。
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mt-24 rounded-3xl border border-zinc-200 bg-zinc-900 p-8 text-white shadow-sm md:p-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            作るだけでなく、育てられるプロダクトを。
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
            フロントエンド、バックエンド、設計、改善まで含めて、
            長く運用できる形を意識して開発しています。
            詳細はGitHubや各プロジェクトからご覧ください。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://github.com/k1414k"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
            >
              GitHubを見る
            </a>
            <a
              href="mailto:your-email@example.com"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-zinc-700 px-5 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              メールで連絡
            </a>
          </div>
        </section>

        <footer className="mt-10 py-8 text-sm text-zinc-500">
          © 2026 LEE JONGIN. Built with Next.js.
        </footer>
      </main>
    </div>
  );
}