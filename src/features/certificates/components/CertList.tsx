import { certifications } from "#/data/data"
import { CheckCircle2, BadgeCheck, ExternalLink } from "lucide-react"

export function CertList() {
    return (
        <section>
            <div className="flex items-center gap-2">
                <span className="h-6 w-1 rounded-full bg-primary" />
                <h2 className="text-xl font-bold text-foreground">
                    Professional Certifications
                </h2>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {certifications.map((cert) => (
                    <article
                        key={cert.title}
                        className="flex flex-col rounded-xl border border-border bg-card p-5"
                    >
                        <div className="flex items-center justify-between">
                            <span className="flex size-9 items-center justify-center rounded-full bg-accent text-primary">
                                <BadgeCheck className="size-5" />
                            </span>
                            {cert.verified && (
                                <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-primary">
                                    <CheckCircle2 className="size-3.5" />
                                    Verified
                                </span>
                            )}
                        </div>

                        <h3 className="mt-4 text-base font-semibold text-foreground">
                            {cert.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{cert.issued}</p>

                        <a
                            href="#"
                            className="mt-4 inline-flex items-center gap-1.5 border-t border-border pt-4 text-sm font-medium text-primary hover:underline"
                        >
                            <ExternalLink className="size-4" />
                            View Certificate
                        </a>
                    </article>
                ))}
            </div>
        </section>
    )
}
