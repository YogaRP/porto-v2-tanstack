"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"
import { faqs } from "#/data/data"

export function Faq() {
    const [open, setOpen] = useState<number | null>(0)

    return (
        <section>
            <div className="flex flex-wrap items-end justify-between gap-2">
                <h2 className="text-xl font-bold text-foreground">
                    Frequently Asked Questions
                </h2>
                <p className="text-sm text-muted-foreground">
                    A few quick answers before we start.
                </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
                {faqs.map((faq, i) => {
                    const isOpen = open === i
                    return (
                        <div
                            key={faq.q}
                            className="rounded-xl border border-border bg-card"
                        >
                            <button
                                type="button"
                                onClick={() => setOpen(isOpen ? null : i)}
                                aria-expanded={isOpen}
                                className="flex w-full items-center justify-between gap-4 p-5 text-left"
                            >
                                <span className="font-medium text-foreground">{faq.q}</span>
                                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                                    {isOpen ? (
                                        <Minus className="size-3.5" />
                                    ) : (
                                        <Plus className="size-3.5" />
                                    )}
                                </span>
                            </button>
                            <div
                                className={cn(
                                    "grid transition-all duration-200",
                                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                                )}
                            >
                                <div className="overflow-hidden">
                                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
