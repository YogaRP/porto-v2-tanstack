import { Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"
import { mydata } from "#/data/data"

const fields = [
    { label: "Email", value: mydata.email },
    { label: "Location", value: mydata.location.fulltime },
    { label: "Availability", value: mydata.available.fulltime },
]

export function ContactBar() {
    return (
        <section className='max-w-6xl mx-auto px-4 py-16 sm:px-6'>
            <section className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <div className="flex items-center gap-2">
                    <Mail className="size-5 text-primary" />
                    <h2 className="text-lg font-bold text-foreground">Contact Me</h2>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                    Have a project in mind or want to collaborate? Let&apos;s connect.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    {fields.map((field) => (
                        <div
                            key={field.label}
                            className="rounded-lg border border-border bg-background p-4"
                        >
                            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                {field.label}
                            </p>
                            <p className="mt-1.5 text-sm font-medium text-foreground">
                                {field.value}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Link to="/contact-me">
                        <Button className="rounded-full px-5 cursor-pointer">
                            <Send className="size-4" />
                            Send a Message
                        </Button>
                    </Link>
                </div>
            </section>
        </section>
    )
}
