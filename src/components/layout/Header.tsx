import { useState } from "react"
import { Menu, X, Code2, Sparkle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link, useLocation } from "@tanstack/react-router"

const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Certificates", href: "/certificates" },
    { label: "Contact", href: "/contact-me" },
]

export default function Header() {
    const { pathname } = useLocation()
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
                <Link to="/" className="flex items-center gap-2 font-semibold">
                    <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
                        <Code2 className="size-4" />
                    </span>
                    <span className="text-base text-primary">Yoga Rizky Putra</span>
                </Link>

                <nav className="hidden items-center gap-1 md:flex">
                    {navItems.map((item) => {
                        const active = pathname === item.href
                        return (
                            <Link
                                key={item.href}
                                to={item.href}
                                className={cn(
                                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                    active
                                        ? "text-primary"
                                        : "text-muted-foreground hover:text-foreground",
                                )}
                            >
                                {item.label}
                            </Link>
                        )
                    })}
                </nav>

                <div className="flex items-center gap-2">
                    <Link to="/contact-me">
                        <Button
                            size="lg"
                            className="hidden rounded-full px-5 md:inline-flex cursor-pointer"
                        >

                            <Sparkles className="size-3.5" />
                            Hire Me
                        </Button>
                    </Link>
                    <button
                        type="button"
                        aria-label="Toggle menu"
                        onClick={() => setOpen((v) => !v)}
                        className="inline-flex size-9 items-center justify-center rounded-md text-foreground md:hidden"
                    >
                        {open ? <X className="size-5" /> : <Menu className="size-5" />}
                    </button>
                </div>
            </div>

            {open && (
                <div className="border-t border-border bg-background md:hidden">
                    <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
                        {navItems.map((item) => {
                            const active = pathname === item.href
                            return (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    onClick={() => setOpen(false)}
                                    className={cn(
                                        "rounded-md px-3 py-2 text-sm font-medium",
                                        active
                                            ? "bg-accent text-primary"
                                            : "text-muted-foreground hover:bg-muted",
                                    )}
                                >
                                    {item.label}
                                </Link>
                            )
                        })}
                        <Link to="/contact-me" onClick={() => setOpen(false)}>
                            <Button
                                size="lg"
                                className="mt-2 rounded-full"
                            >
                                <Sparkles className="size-3.5" />
                                Hire Me
                            </Button>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}
