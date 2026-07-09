import { certifications } from "#/data/data"
import { Link } from "@tanstack/react-router"
import { ArrowRight, BadgeCheck, CheckCircle2, ExternalLink } from "lucide-react"

export function CertificatesPreview() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="flex items-end justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                        Certificates &amp; Achievements
                    </h2>
                    <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
                </div>
                <Link
                    to="/certificates"
                    className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                    See All Achievements
                    <ArrowRight className="size-4" />
                </Link>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {certifications.slice(0, 3).map((cert) => {
                    return (
                        <article
                            key={cert.title}
                            className="flex flex-col rounded-xl border border-border bg-card p-5"
                        >
                            <div className="flex items-center justify-between">
                                <span className="flex size-9 items-center justify-center rounded-full bg-accent text-primary">
                                    <BadgeCheck className="size-5" />
                                </span>
                                {/* {cert.verified && (
                                    <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-primary">
                                        <CheckCircle2 className="size-3.5" />
                                        Verified
                                    </span>
                                )} */}
                            </div>

                            <h3 className="mt-4 text-base font-semibold text-foreground">
                                {cert.title}
                            </h3>
                            <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                            <p className="mt-1 text-xs text-muted-foreground">{cert.issued}</p>

                            <a
                                href={cert.href}
                                target="_blank"
                                className="mt-4 inline-flex items-center gap-1.5 border-t border-border pt-4 text-sm font-medium text-primary hover:underline"
                            >
                                <ExternalLink className="size-4" />
                                View Certificate
                            </a>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
