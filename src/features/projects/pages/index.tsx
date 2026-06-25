import { useMemo, useState } from "react"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { projects } from "#/data/data"
import ProjectCard from "#/components/ProjectCard"
import { PageBanner } from "#/components/PageBanner"

const filters = ["All", "Web App", "Mobile", "UI/UX", "Open Source"]

export default function ProjectPage() {
    const [active, setActive] = useState("All")
    const [query, setQuery] = useState("")

    const filtered = useMemo(() => {
        return projects.filter((p) => {
            const matchesFilter = active === "All" || p.category === active
            const matchesQuery =
                query.trim() === "" ||
                p.title.toLowerCase().includes(query.toLowerCase()) ||
                p.description.toLowerCase().includes(query.toLowerCase())
            return matchesFilter && matchesQuery
        })
    }, [active, query])

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <PageBanner
                    title="All Projects"
                    subtitle="A collection of my work across web, mobile, and design."
                    breadcrumbs={[{ label: "Projects" }]}
                />
                <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex flex-wrap gap-2">
                            {filters.map((filter) => (
                                <button
                                    key={filter}
                                    type="button"
                                    onClick={() => setActive(filter)}
                                    className={cn(
                                        "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                                        active === filter
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                                    )}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>

                        <div className="flex w-full items-center gap-2 rounded-full border border-border bg-card px-4 lg:w-72">
                            <Search className="size-4 text-muted-foreground" />
                            <input
                                type="search"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search projects..."
                                aria-label="Search projects"
                                className="h-10 w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                            />
                        </div>
                    </div>

                    {filtered.length > 0 ? (
                        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filtered.map((project) => (
                                <ProjectCard key={project.title} project={project} />
                            ))}
                        </div>
                    ) : (
                        <p className="mt-16 text-center text-muted-foreground">
                            No projects match your search.
                        </p>
                    )}

                    <div className="mt-12 flex items-center justify-center gap-2">
                        <button
                            type="button"
                            aria-label="Previous page"
                            className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-muted"
                        >
                            <ChevronLeft className="size-4" />
                        </button>
                        {[1, 2, 3].map((page) => (
                            <button
                                key={page}
                                type="button"
                                className={cn(
                                    "inline-flex size-9 items-center justify-center rounded-full text-sm font-medium",
                                    page === 1
                                        ? "bg-primary text-primary-foreground"
                                        : "border border-border text-muted-foreground hover:bg-muted",
                                )}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            type="button"
                            aria-label="Next page"
                            className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-muted"
                        >
                            <ChevronRight className="size-4" />
                        </button>
                    </div>
                </section>
            </main>
        </div>
    )
}
