import CustomBadge from "#/components/atom/CustomBadge";

const skillGroups = [
    {
        group: "Frontend Web",
        skills: [
            { name: "ReactJS", level: 90 },
            { name: "NextJS", level: 90 },
            { name: "Tanstack", level: 80 },
            { name: "VueJS", level: 70 },
        ],
    },
    {
        group: "Backend",
        skills: [
            { name: "ExpressJS", level: 90 },
            { name: "NestJS", level: 85 },
            { name: "Golang", level: 80 },
            { name: "NextJs (Fulltsack)", level: 80 },
        ],
    },
    {
        group: "Database",
        skills: [
            { name: "PostgreSQL", level: 90 },
            { name: "MongoDB", level: 90 },
            { name: "MySQL", level: 90 },
            { name: "Redis", level: 85 },
        ],
    },
]

const tools = ["VSCode", "Git", "Docker", "Microservice"]

export default function TechnicalSkills() {
    return (
        <div>
            <h3 className="text-lg font-semibold text-foreground">
                Technical Skills
            </h3>

            {skillGroups.map((group) => (
                <div key={group.group} className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        {group.group}
                    </p>
                    <div className="mt-3 flex flex-col gap-4">
                        {group.skills.map((skill) => (
                            <div key={skill.name}>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="font-medium text-foreground">
                                        {skill.name}
                                    </span>
                                    <span className="text-muted-foreground">
                                        {skill.level}%
                                    </span>
                                </div>
                                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
                                    <div
                                        className="h-full rounded-full bg-primary"
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Others
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                    {tools.map((tool) => (
                        <CustomBadge
                            key={tool}
                            type="light-green-black"
                            classname="p-4"
                        >
                            {tool}
                        </CustomBadge>
                    ))}
                </div>
            </div>
            <div className="mt-6">
                <p className="text-[#888]">Note: Percentages reflect relative familiarity across skills, not absolute expertise level</p>
            </div>
        </div>
    )
}