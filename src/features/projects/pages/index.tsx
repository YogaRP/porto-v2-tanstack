import { useEffect, useMemo, useState } from "react"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { projects } from "#/data/data"
import ProjectCard from "#/components/ProjectCard"
import { PageBanner } from "#/components/PageBanner"
import { ContactBar } from "#/components/ContactBar"

const itemsPerPage = 6

export default function ProjectPage() {
    const [query, setQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    const filtered = useMemo(() => {
        const search = query.trim().toLowerCase()

        if (!search) {
            return projects
        }

        return projects.filter((project) => {
            const searchableText = [
                project.title,
                project.description,
                project.category,
                ...project.tags,
            ]
                .join(" ")
                .toLowerCase()

            return searchableText.includes(search)
        })
    }, [query])

    useEffect(() => {
        setCurrentPage(1)
    }, [query])

    const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage))
    const visibleProjects = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage
        return filtered.slice(start, start + itemsPerPage)
    }, [currentPage, filtered])

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <PageBanner
                    title="All Projects"
                    subtitle="A collection of my work and learning project"
                    breadcrumbs={[{ label: "Projects" }]}
                />
                <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
                    <div className="flex flex-col gap-4 rounded-2xl border border-border/70 bg-card/70 p-4 shadow-sm sm:p-6 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="text-sm font-medium text-primary">Search projects</p>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Find a project by name, stack, or description.
                            </p>
                        </div>

                        <div className="flex w-full items-center gap-2 rounded-full border border-border bg-background px-4 lg:w-80">
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
                        <>
                            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {visibleProjects.map((project) => (
                                    <ProjectCard key={project.title} project={project} />
                                ))}
                            </div>

                            {totalPages > 1 && (
                                <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
                                    <button
                                        type="button"
                                        aria-label="Previous page"
                                        onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                                        disabled={currentPage === 1}
                                        className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        <ChevronLeft className="size-4" />
                                    </button>

                                    {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                                        <button
                                            key={page}
                                            type="button"
                                            onClick={() => setCurrentPage(page)}
                                            className={cn(
                                                "inline-flex size-9 items-center justify-center rounded-full text-sm font-medium transition-colors",
                                                currentPage === page
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
                                        onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                                        disabled={currentPage === totalPages}
                                        className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        <ChevronRight className="size-4" />
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <p className="mt-16 text-center text-muted-foreground">
                            No projects match your search.
                        </p>
                    )}
                </section>
                <div className="bg-secondary/40">
                    <ContactBar />
                </div>
            </main>
        </div>
    )
}
