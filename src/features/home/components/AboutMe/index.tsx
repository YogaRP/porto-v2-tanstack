import { Image } from "@unpic/react";

const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "10+", label: "Projects Done" },
    { value: "10+", label: "Certificate" },
]

export default function AboutMe() {
    return (
        <section className="bg-secondary/40 py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
                    About Me
                </h2>
                <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-primary" />

                <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted">
                        <Image
                            src="/images/about.png"
                            alt="Workspace with laptop showing code"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                            layout="fullWidth"
                        />
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-foreground">Who Am I?</h3>
                        <p className="mt-4 leading-relaxed text-muted-foreground">
                            Hi, I&apos;m Yoga — a full-stack web developer based in Indonesia who loves building web applications that are fast, useful, and a pleasure to use. I work primarily with Reactjs, NestJS, Golang, and I'm always experimenting with what's new in the web ecosystem. If you have an idea worth building, let's talk.
                        </p>

                        <div className="mt-8 grid grid-cols-3 gap-4">
                            {stats.map((stat) => (
                                <div key={stat.label}>
                                    <p className="text-2xl font-bold text-foreground">
                                        {stat.value}
                                    </p>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
