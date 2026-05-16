import { BookOpen, ExternalLink, Sparkles } from "lucide-react";
import { cyberStories } from "@/lib/data";

export default function DigitalChakrabyuhaPage() {
  return (
    <div className="space-y-6 odia-readable">
      <section className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.8)]">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Weekly cyber stories</p>
            <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">ଡିଜିଟାଲ୍ ଚକ୍ରବ୍ୟୂହ</h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
              ବାସ୍ତବ ଜଗତର ସାଇବର୍ ଘଟଣାରୁ ପ୍ରେରିତ ସହଜ ଓଡ଼ିଆ କାହାଣୀ। ପ୍ରତି ସପ୍ତାହରେ ଏକ ନୂଆ କାହାଣୀ ଯୋଡ଼ନ୍ତୁ।
            </p>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-fuchsia-300/25 bg-fuchsia-300/10 px-4 py-2 text-sm font-semibold text-fuchsia-100">
            <Sparkles className="h-4 w-4" />
            1 story / week
          </div>
        </div>
      </section>

      <div className="grid gap-6">
        {cyberStories.map((story) => (
          <article
            id={story.id}
            key={story.id}
            className="glass-card overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.8)]"
          >
            <div
              className="min-h-[320px] bg-cover bg-center p-6 sm:p-8"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(3,5,13,0.92), rgba(3,5,13,0.62), rgba(3,5,13,0.86)), url(${story.backgroundImage})`,
              }}
            >
              <div className="flex min-h-[260px] max-w-3xl flex-col justify-end">
                <div className="mb-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em]">
                  <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-cyan-200">{story.category}</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300">{story.date}</span>
                  <span className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-emerald-200">{story.readingTime}</span>
                </div>
                <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">{story.title}</h2>
                <p className="mt-4 text-lg leading-8 text-slate-200">{story.subtitle}</p>
              </div>
            </div>

            <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_0.35fr]">
              <div>
                <p className="text-base leading-8 text-cyan-100">{story.summary}</p>
                <div className="mt-6 space-y-5 text-base leading-9 text-slate-300">
                  {story.story.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <aside className="space-y-5">
                <div className="rounded-[24px] border border-slate-700/40 bg-slate-950/70 p-5">
                  <div className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-cyan-300">
                    <BookOpen className="h-4 w-4" />
                    ଶିଖିବା ଯୋଗ୍ୟ
                  </div>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                    {story.lessons.map((lesson) => (
                      <li key={lesson}>• {lesson}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[24px] border border-slate-700/40 bg-slate-950/70 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-300">Reference reports</p>
                  <div className="mt-4 space-y-3">
                    {story.references.map((reference) => (
                      <a
                        key={reference.url}
                        href={reference.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-sm leading-6 text-slate-200 transition hover:border-fuchsia-300/30 hover:bg-fuchsia-300/10"
                      >
                        <span>{reference.label}</span>
                        <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-fuchsia-300" />
                      </a>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
