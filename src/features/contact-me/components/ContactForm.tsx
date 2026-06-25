import { useState } from "react"
import { Send, ShieldCheck, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactForm() {
    const [submitted, setSubmitted] = useState(false)

    return (
        <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-lg font-bold text-foreground">Send a Message</h2>
            <p className="mt-1 text-sm text-muted-foreground">
                Fill out the form and I&apos;ll get back to you as soon as possible.
            </p>

            {submitted ? (
                <div className="mt-6 flex items-center gap-3 rounded-lg bg-accent p-4 text-sm text-accent-foreground">
                    <CheckCircle2 className="size-5 text-primary" />
                    Thanks! Your message has been sent. I&apos;ll reply shortly.
                </div>
            ) : (
                <form
                    className="mt-6 flex flex-col gap-5"
                    onSubmit={(e) => {
                        e.preventDefault()
                        setSubmitted(true)
                    }}
                >
                    <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="Full Name" htmlFor="name">
                            <input
                                id="name"
                                required
                                placeholder="Your name"
                                className="input-base"
                            />
                        </Field>
                        <Field label="Email" htmlFor="email">
                            <input
                                id="email"
                                type="email"
                                required
                                placeholder="you@example.com"
                                className="input-base"
                            />
                        </Field>
                    </div>

                    <Field label="Subject" htmlFor="subject">
                        <input
                            id="subject"
                            placeholder="Project inquiry, collaboration, etc."
                            className="input-base"
                        />
                    </Field>

                    <Field label="Message" htmlFor="message">
                        <textarea
                            id="message"
                            required
                            rows={5}
                            placeholder="Tell me about your project or question..."
                            className="input-base resize-none"
                        />
                    </Field>

                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                            <ShieldCheck className="size-4 text-primary" />
                            Your information stays private.
                        </p>
                        <Button type="submit" className="rounded-full px-5">
                            <Send className="size-4" />
                            Send Message
                        </Button>
                    </div>
                </form>
            )}
        </div>
    )
}

function Field({
    label,
    htmlFor,
    children,
}: {
    label: string
    htmlFor: string
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
                {label}
            </label>
            {children}
        </div>
    )
}
