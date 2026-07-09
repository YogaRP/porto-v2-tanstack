import { Send, ShieldCheck, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useForm } from "@tanstack/react-form"
import { useServerFn } from "@tanstack/react-start"
import { useSendContactMessage } from "../hooks/useContact"
import { Field, FieldError, FieldGroup, FieldLabel } from "#/components/ui/field"
import { contactSchema } from "../schema/contact"
import { toast } from "sonner"
import { Input } from "@base-ui/react/input"
import { useState } from "react"
import { cn } from "#/lib/utils"

export function ContactForm() {
    const sendMessage = useServerFn(useSendContactMessage)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: ""
        },
        validators: {
            onSubmit: contactSchema,
        },
        onSubmit: async ({ value }) => {
            setIsSubmitting(true)
            try {
                // sendMessage({ data: value })
                // form.reset()
                toast.success("Message has been sent successfully.", {
                    className: "!bg-green-500 !text-white !font-medium",
                    duration: 4000,
                })
                setIsSubmitting(false)
            } catch (error) {
                toast.error("Error: Failed to send message.", {
                    className: "!bg-red-500 !text-white !font-medium",
                    duration: 4000,
                })
                setIsSubmitting(false)
            }
        },
    })

    return (
        <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-lg font-bold text-foreground">Send a Message</h2>
            <p className="mt-1 text-sm text-muted-foreground">
                Fill out the form and I&apos;ll get back to you as soon as possible.
            </p>
            <form
                className="mt-6 flex flex-col gap-5"
                onSubmit={(e) => {
                    e.preventDefault()
                    form.handleSubmit()
                }}
            >
                <FieldGroup>
                    <div className="grid gap-5 sm:grid-cols-2">
                        <form.Field
                            name="name"
                            children={(field) => {
                                const isInvalid =
                                    field.state.meta.isTouched && !field.state.meta.isValid
                                return (
                                    <Field data-invalid={isInvalid}>
                                        <FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            aria-invalid={isInvalid}
                                            placeholder="Your Name"
                                            autoComplete="off"
                                            className="input-base border rounded-md p-2" />
                                        {isInvalid && (
                                            <FieldError errors={field.state.meta.errors} />
                                        )}
                                    </Field>
                                )
                            }}
                        />
                        <form.Field
                            name="email"
                            children={(field) => {
                                const isInvalid =
                                    field.state.meta.isTouched && !field.state.meta.isValid
                                return (
                                    <Field data-invalid={isInvalid}>
                                        <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            aria-invalid={isInvalid}
                                            placeholder="you@example.com"
                                            autoComplete="off"
                                            className="input-base border rounded-md p-2" />
                                        {isInvalid && (
                                            <FieldError errors={field.state.meta.errors} />
                                        )}
                                    </Field>
                                )
                            }}
                        />
                    </div>
                    <form.Field
                        name="subject"
                        children={(field) => {
                            const isInvalid =
                                field.state.meta.isTouched && !field.state.meta.isValid
                            return (
                                <Field data-invalid={isInvalid}>
                                    <FieldLabel htmlFor={field.name}>Subject</FieldLabel>
                                    <Input
                                        id={field.name}
                                        name={field.name}
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        aria-invalid={isInvalid}
                                        placeholder="Let's collab"
                                        autoComplete="off"
                                        className="input-base border rounded-md p-2" />
                                    {isInvalid && (
                                        <FieldError errors={field.state.meta.errors} />
                                    )}
                                </Field>
                            )
                        }}
                    />
                    <form.Field
                        name="message"
                        children={(field) => {
                            const isInvalid =
                                field.state.meta.isTouched && !field.state.meta.isValid
                            return (
                                <Field data-invalid={isInvalid}>
                                    <FieldLabel htmlFor={field.name}>Message</FieldLabel>
                                    <textarea
                                        id={field.name}
                                        name={field.name}
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        aria-invalid={isInvalid}
                                        placeholder="Tell me about your idea, project, or question..."
                                        autoComplete="off"
                                        className="input-base border rounded-md p-2 resize-none" />
                                    {isInvalid && (
                                        <FieldError errors={field.state.meta.errors} />
                                    )}
                                </Field>
                            )
                        }}
                    />
                </FieldGroup>
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <ShieldCheck className="size-4 text-primary" />
                        Your information stays private.
                    </p>
                    <Button type="submit" disabled={!isSubmitting} className="rounded-full px-5 cursor-pointer">
                        <Send className="size-4" />
                        Send Message
                    </Button>
                </div>
            </form>
        </div>
    )
}
