import AboutMe from "../components/AboutMe";
import { CertificatesPreview } from "../components/Certificate";
import ContactHome from "../components/ContactHome";
import Hero from "../components/Hero";
import LatestProjects from "../components/LatestProject";
import SkillExperience from "../components/SkillExperience";

export default function HomePage() {
    return (
        <>
            {/* <Hero />
            <AboutMe />
            <SkillExperience />
            <LatestProjects />
            <CertificatesPreview />
            <div className="bg-secondary/40">
                <ContactHome />
            </div> */}

            <div className="flex min-h-screen flex-col">
                <main className="flex-1">
                    <Hero />
                    <AboutMe />
                    <SkillExperience />
                    <LatestProjects />
                    <CertificatesPreview />
                    <div className="bg-secondary/40">
                        <ContactHome />
                    </div>
                </main>
            </div>
        </>
    )
}
