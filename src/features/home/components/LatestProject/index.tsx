import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import ProjectCard from "../../../../components/ProjectCard";
import { projects } from "#/data/data";

export default function LatestProjects() {
    return (
        <section className="bg-secondary/40 py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                            Latest Projects
                        </h2>
                        <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
                    </div>
                    <Link
                        to="/projects"
                        className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                        See All Projects
                        <ArrowRight className="size-4" />
                    </Link>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.slice(0, 3).map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}
