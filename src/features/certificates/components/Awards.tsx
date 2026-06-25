import { awards } from "#/data/data"
import { Trophy } from "lucide-react"

export function Awards() {
    return (
        <section>
            <div className="flex items-center gap-2">
                <span className="h-6 w-1 rounded-full bg-primary" />
                <h2 className="text-xl font-bold text-foreground">
                    Awards &amp; Achievements
                </h2>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
                {awards.map((award) => (
                    <article
                        key={award.title}
                        className="flex gap-4 rounded-xl border border-border bg-card p-5"
                    >
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                            <Trophy className="size-5" />
                        </span>
                        <div>
                            <div className="flex items-start justify-between gap-3">
                                <h3 className="font-semibold text-foreground">{award.title}</h3>
                                <span className="shrink-0 text-sm font-medium text-primary">
                                    {award.year}
                                </span>
                            </div>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                {award.description}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
