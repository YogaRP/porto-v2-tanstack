import { useEffect, useMemo, useRef, useState } from "react"
import { BadgeCheck, ChevronLeft, ChevronRight, ExternalLink, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { certifications } from "#/data/data"

const itemsPerPage = 6

export function CertList() {
    const [query, setQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const sectionRef = useRef<HTMLElement | null>(null)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)

        if (typeof window !== "undefined" && window.innerWidth < 768) {
            requestAnimationFrame(() => {
                sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
            })
        }
    }

    const filtered = useMemo(() => {
        const search = query.trim().toLowerCase()

        if (!search) {
            return certifications
        }

        return certifications.filter((cert) => {
            const searchableText = [cert.title, cert.issuer, cert.issued]
                .join(" ")
                .toLowerCase()

            return searchableText.includes(search)
        })
    }, [query])

    useEffect(() => {
        setCurrentPage(1)
    }, [query])

    const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage))
    const visibleCerts = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage
        return filtered.slice(start, start + itemsPerPage)
    }, [currentPage, filtered])

    return (
        <section ref={sectionRef} className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 rounded-2xl border border-border/70 bg-card/70 p-4 shadow-sm sm:p-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <p className="text-sm font-medium text-primary">Search certificates</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Find a certificate by title, issuer, or date.
                    </p>
                </div>

                <div className="flex w-full items-center gap-2 rounded-full border border-border bg-background px-4 lg:w-80">
                    <Search className="size-4 text-muted-foreground" />
                    <input
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search certificates..."
                        aria-label="Search certificates"
                        className="h-10 w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                    />
                </div>
            </div>

            {filtered.length > 0 ? (
                <>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {visibleCerts.map((cert) => (
                            <article
                                key={cert.title}
                                className="flex flex-col rounded-2xl border border-border/80 bg-card/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <span className="flex size-10 items-center justify-center rounded-full bg-accent text-primary">
                                        <BadgeCheck className="size-5" />
                                    </span>
                                    <span className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                        {cert.issued}
                                    </span>
                                </div>

                                <h3 className="mt-4 text-base font-semibold text-foreground">
                                    {cert.title}
                                </h3>
                                <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>

                                <div className="mt-5 border-t border-border/70 pt-4">
                                    <a
                                        href={cert.href}
                                        target="_blank"
                                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                                    >
                                        <ExternalLink className="size-4" />
                                        View Certificate
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
                            <button
                                type="button"
                                aria-label="Previous page"
                                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <ChevronLeft className="size-4" />
                            </button>

                            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                                <button
                                    key={page}
                                    type="button"
                                    onClick={() => handlePageChange(page)}
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
                                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                                className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <ChevronRight className="size-4" />
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <p className="mt-8 text-center text-muted-foreground">
                    No certificates match your search.
                </p>
            )}
        </section>
    )
}
