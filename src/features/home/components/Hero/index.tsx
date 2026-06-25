import { Button } from "#/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { ArrowRight, Download } from "lucide-react";

const floatingChips = [
    { label: "Reactjs", className: "left-2 top-6" },
    { label: "NestJs", className: "right-0 top-1/3" },
    { label: "Go", className: "left-0 bottom-10" },
]

export default function Hero() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20">
            <div className="grid items-center gap-10 md:grid-cols-2">
                <div>
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                            Available for Freelance
                        </span>
                        <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-primary">
                            Open to remote roles
                        </span>
                    </div>

                    <h1 className="mt-5 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
                        Hi, I&apos;m Yoga Rizky Putra — I love bringing ideas to life with code.
                    </h1>

                    <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
                        I specialize in building web based applications, always looking for
                        new challenges and opportunities to grow my skills. even outside of
                        web development.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <Link to="/projects">
                            <Button
                                size="lg"
                                className="rounded-full px-5 cursor-pointer hover:bg-green-700"
                            >
                                View My Work
                                <ArrowRight className="size-4" />
                            </Button>
                        </Link>
                        <a href="#">
                            <Button
                                size="lg"
                                variant="outline"
                                className="rounded-full px-5 cursor-pointer"
                            >
                                <Download className="size-4" />
                                Download CV
                            </Button>
                        </a>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-sm">
                    <div className="relative aspect-square overflow-hidden rounded-full border-4 border-primary/70 bg-muted">
                        <Image
                            src="/images/profile.png"
                            alt="Portrait of John Doe"
                            priority
                            sizes="(max-width: 768px) 80vw, 380px"
                            className="object-cover"
                            layout="fullWidth"
                        />
                    </div>
                    {floatingChips.map((chip) => (
                        <span
                            key={chip.label}
                            className={`absolute ${chip.className} rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-sm`}
                        >
                            {chip.label}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
