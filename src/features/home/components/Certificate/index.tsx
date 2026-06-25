import { Link } from "@tanstack/react-router"
import { ArrowRight, BadgeCheck, Award, CheckCircle2 } from "lucide-react"

const items = [
    {
        type: "Certificate",
        icon: BadgeCheck,
        title: "Google UX Design",
        description:
            "Completed a professional UX design program focused on research, prototyping, and usability testing.",
        meta: "Issued by Google · 2024",
    },
    {
        type: "Achievement",
        icon: Award,
        title: "Best Product Design Award",
        description:
            "Recognized for delivering a high-impact product redesign that improved usability and engagement.",
        meta: "Design Summit · 2023",
    },
    {
        type: "Certificate",
        icon: CheckCircle2,
        title: "AWS Cloud Practitioner",
        description:
            "Validated foundational cloud knowledge across infrastructure, security, and deployment workflows.",
        meta: "Amazon Web Services · 2023",
    },
]

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
                {items.map((item) => {
                    const Icon = item.icon
                    return (
                        <article
                            key={item.title}
                            className="flex flex-col rounded-xl border border-border bg-card p-6"
                        >
                            <div className="flex items-center justify-between">
                                <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                                    {item.type}
                                </span>
                                <Icon className="size-5 text-primary" />
                            </div>
                            <h3 className="mt-4 text-base font-semibold text-foreground">
                                {item.title}
                            </h3>
                            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                                {item.description}
                            </p>
                            <p className="mt-4 text-xs font-medium text-muted-foreground">
                                {item.meta}
                            </p>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
