import type { Project } from "#/data/data"
import { Sparkles } from "lucide-react"

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="group flex h-full flex-col rounded-2xl border border-border/80 bg-card/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
            <div className="flex items-start justify-between gap-3">
                <span className="inline-flex w-fit items-center rounded-full bg-accent/70 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-foreground">
                    {project.category}
                </span>
                <div className="flex size-10 items-center justify-center rounded-full border border-border bg-background/80 text-primary">
                    <Sparkles className="size-4" />
                </div>
            </div>

            <div className="mt-5">
                <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {project.description}
                </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* <div className="mt-6 border-t border-border/70 pt-4">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Project snapshot
                </p>
            </div> */}
        </article>
    )
}
