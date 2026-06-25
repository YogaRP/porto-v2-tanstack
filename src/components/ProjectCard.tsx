import type { Project } from "#/data/data";
import { Image } from "@unpic/react"
import { ArrowUpRight, Code } from "lucide-react";
export default function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md">
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} preview`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    width={60}
                    height={60}
                />
            </div>
            <div className="flex flex-1 flex-col p-5">
                <span className="inline-flex w-fit items-center rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                    {project.category}
                </span>
                <h3 className="mt-3 text-base font-semibold text-foreground">
                    {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-sm">
                    <a
                        href="#"
                        className="inline-flex items-center gap-1.5 font-medium text-foreground hover:text-primary"
                    >
                        <Code className="size-4" />
                        Code
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
                    >
                        Live Demo
                        <ArrowUpRight className="size-4" />
                    </a>
                </div>
            </div>
        </article>
    )
}
