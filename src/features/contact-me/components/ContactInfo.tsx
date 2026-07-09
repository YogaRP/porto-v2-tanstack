import { mydata } from "#/data/data"
import { Mail, Phone, Clock, MapPin, ChevronRight } from "lucide-react"

const quickContact = [
    { icon: Mail, label: "Email", value: mydata.email },
    { icon: Phone, label: "Phone", value: mydata.phone },
    { icon: Clock, label: "Response", value: "Mon–Fri, 9am–6pm WIB" },
]

const details = [
    { icon: Mail, label: "Email", value: mydata.email },
    { icon: Phone, label: "Phone", value: mydata.phone },
    { icon: MapPin, label: "Location", value: mydata.location.fulltime },
]

const socials = [
    { label: "GitHub", href: mydata.social_media.github },
    { label: "LinkedIn", href: mydata.social_media.linkedin },
    { label: "Instagram", href: mydata.social_media.instagram },
    { label: "Threads", href: mydata.social_media.threads },
]

export function QuickContact() {
    return (
        <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold text-foreground">Quick Contact</h2>
            <p className="mt-1 text-sm text-muted-foreground">
                Choose the best way to reach me.
            </p>
            <div className="mt-5 flex flex-col gap-3">
                {quickContact.map((item) => {
                    const Icon = item.icon
                    return (
                        <div
                            key={item.label}
                            className="flex items-center gap-3 rounded-lg border border-border bg-background p-3"
                        >
                            <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-primary">
                                <Icon className="size-4" />
                            </span>
                            <div>
                                <p className="text-sm font-medium text-foreground">
                                    {item.label}
                                </p>
                                <p className="text-sm text-muted-foreground">{item.value}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export function ContactDetails() {
    return (
        <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold text-foreground">Contact Details</h2>
            <p className="mt-1 text-sm text-muted-foreground">
                Prefer a direct line? Reach out through any of these channels.
            </p>
            <div className="mt-5 flex flex-col gap-3">
                {details.map((item) => {
                    const Icon = item.icon
                    return (
                        <div
                            key={item.label}
                            className="flex items-center gap-3 rounded-lg border border-border bg-background p-3"
                        >
                            <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-primary">
                                <Icon className="size-4" />
                            </span>
                            <div className="flex-1">
                                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                                    {item.label}
                                </p>
                                <p className="text-sm font-medium text-foreground">
                                    {item.value}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export function SocialLinks() {
    return (
        <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-lg font-bold text-foreground">Social Links</h2>
            <p className="mt-1 text-sm text-muted-foreground">
                Connect with me on the platforms below.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
                {socials.map((s) => {
                    return (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                        >
                            {s.label}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}
