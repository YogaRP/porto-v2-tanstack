import CustomBadge from "#/components/atom/CustomBadge"
import { Separator } from "#/components/ui/separator"

const education = [
    {
        name: "Bachelor of Education (B.Ed.)/Sarjana Pendidikan (S1)",
        place: "State University of Jakarta (Universitas Negeri Jakarta), 2018 - 2023",
        description:
            "Graduated with a GPA of 3.72/4.00, developed a QR Code–based digital signature web application using Laravel as a final project, and served as Head of Human Resource Development (PSDM) at BEM PTIK 2020 while actively participating in campus organizations.",
    }
]

const experience = [
    {
        role: "Full Stack Web Developer",
        company: "Elang System Solusi Indonesia, Depok",
        timeline: "September 2024 - February 2026",
        stack: ["ReactJS", "NextJS", "ExpressJS"],
        description:
            "Built full-stack web applications for school management and company HRIS, collaborating with mobile developers.",
    },
    {
        role: "Freelance Frontend Web Developer",
        company: "Remote",
        timeline: "August - December 2024",
        stack: ["VueJS"],
        description:
            "Developed a stock management web application, working alongside a UI/UX designer and backend developer.",
    },
    {
        role: "Internship Frontend Web Developer",
        company: "Kemenristek BRIN, Jakarta",
        timeline: "February - May 2021",
        stack: ["Codeigniter 3"],
        description:
            "Built a frontend web application for an internal management system, collaborating with backend developers.",
    },
]

export default function Experience() {
    return (
        <div>
            <div>
                <h3 className="text-lg font-semibold text-foreground">
                    Work Experience
                </h3>
                <ol className="mt-6 flex flex-col gap-6 border-l border-border pl-6">
                    {experience.map((item) => (
                        <li key={item.role} className="relative">
                            <span className="absolute -left-[1.7rem] top-1 size-3 rounded-full border-2 border-background bg-green-500" />
                            <div className="sm:flex justify-between">
                                <h4 className="font-semibold text-foreground">{item.role}</h4>
                                <CustomBadge type="green" classname="my-1 sm:my-0">{item.timeline}</CustomBadge>
                            </div>
                            <p className="mt-0.5 text-sm font-medium text-primary">
                                {item.company}
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                {item.description}
                            </p>
                            {item.stack.map((techstack) => (
                                <CustomBadge key={techstack} type="gray" classname="mt-2 mr-2">{techstack}</CustomBadge>
                            ))}
                        </li>
                    ))}
                </ol>
            </div>
            <Separator className="my-4" />
            <div>
                <h3 className="text-lg font-semibold text-foreground">
                    Education
                </h3>
                <ol className="mt-6 flex flex-col gap-6 border-l border-border pl-6">
                    {education.map((item) => (
                        <li key={item.name} className="relative">
                            <span className="absolute -left-[1.7rem] top-1 size-3 rounded-full border-2 border-background bg-green-500" />
                            <h4 className="font-semibold text-foreground">{item.name}</h4>
                            <p className="mt-0.5 text-sm font-medium text-primary">
                                {item.place}
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                {item.description}
                            </p>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}
