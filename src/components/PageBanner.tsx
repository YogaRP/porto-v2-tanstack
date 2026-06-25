import { Link } from "@tanstack/react-router";
import { Home, ChevronRight } from "lucide-react"

type Crumb = { label: string; href?: string }

export function PageBanner({
    title,
    subtitle,
    breadcrumbs,
}: {
    title: string
    subtitle: string
    breadcrumbs?: Crumb[]
}) {
    return (
        <section className="bg-secondary/50">
            <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
                <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    {title}
                </h1>
                <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
                    {subtitle}
                </p>

                {breadcrumbs && (
                    <nav
                        aria-label="Breadcrumb"
                        className="mt-5 flex items-center justify-center gap-1.5 text-sm text-muted-foreground"
                    >
                        <Link to="/" className="inline-flex items-center gap-1 hover:text-primary">
                            <Home className="size-3.5" />
                            Home
                        </Link>
                        {breadcrumbs.map((crumb) => (
                            <span key={crumb.label} className="inline-flex items-center gap-1.5">
                                <ChevronRight className="size-3.5" />
                                {crumb.href ? (
                                    <Link to={crumb.href} className="hover:text-primary">
                                        {crumb.label}
                                    </Link>
                                ) : (
                                    <span className="text-foreground">{crumb.label}</span>
                                )}
                            </span>
                        ))}
                    </nav>
                )}
            </div>
        </section>
    )
}
