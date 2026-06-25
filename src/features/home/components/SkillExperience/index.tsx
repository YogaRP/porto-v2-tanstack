import Experience from "./Experience"
import TechnicalSkills from "./Skill"

export default function SkillExperience() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 bg-white">
            <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
                Skills &amp; Experience
            </h2>
            <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-primary" />

            <div className="mt-10 grid gap-12 md:grid-cols-2">
                <TechnicalSkills />
                <Experience />
            </div>
        </section>
    )
}
