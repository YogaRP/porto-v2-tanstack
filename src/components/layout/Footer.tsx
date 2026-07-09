import { Link } from "@tanstack/react-router"
import { Separator } from "../ui/separator"

export default function Footer() {
    return (
        <div className="bg-[#09090B] p-12">
            <div className="flex flex-col gap-12 sm:flex-row">
                <div className="w-full">
                    <h1 style={{ fontFamily: 'var(--font-mono)' }} className="text-xl font-semibold mb-4 text-white">Yoga Rizky Putra</h1>
                    <p className="text-sm text-[#AEAEAF]">Web developer, problem solver, digital builder. I turn ideas into fullstack web solutions, and I never stop exploring what's next.</p>
                </div>
                <div className="w-full">
                    <h1 className="font-semibold mb-4 uppercase text-gray-500">Quick Links</h1>
                    <div className="flex flex-col gap-4 text-[#AEAEAF]">
                        <Link to="/" className="hover:text-white">Home</Link>
                        <Link to="/projects" className="hover:text-white">Projects</Link>
                        <Link to="/certificates" className="hover:text-white">Certificates</Link>
                        <Link to="/contact-me" className="hover:text-white">Contact me</Link>
                    </div>
                </div>
                <div className="w-full">
                    <h1 className="font-semibold mb-4 uppercase text-gray-500">Stay connected</h1>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href={"https://github.com/YogaRP"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-2 items-center bg-white hover:bg-gray-400 text-black font-semibold rounded-full p-2 w-fit"
                        >
                            <svg className="w-8 h-8" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                        </a>
                        <a
                            href={"https://linkedin.com/in/yogarizkyputra"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-2 items-center bg-white hover:bg-blue-400 text-black font-semibold rounded-full p-2 w-fit"
                        >
                            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z" /></svg>
                        </a>
                        <a
                            href={"mailto:yogarizky51@gmail.com"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-2 items-center bg-white hover:bg-orange-600 text-black font-semibold rounded-full p-2 w-fit"
                        >
                            <svg className="w-8 h-8" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
            <Separator className={"bg-[#AEAEAF] my-8"} />
            <div className="text-center text-sm text-[#AEAEAF]">© 2026 Yoga Rizky Putra. All rights reserved.</div>
        </div>
    )
}
