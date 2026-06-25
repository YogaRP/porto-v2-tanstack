import { ContactBar } from "#/components/ContactBar";
import { PageBanner } from "#/components/PageBanner";
import { Awards } from "../components/Awards";
import { CertList } from "../components/CertList";
import { CertStats } from "../components/CertStats";

export default function CertificatePage() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <PageBanner
                    title="Certificates & Achievements"
                    subtitle="Recognition of my learning journey and professional milestones."
                    breadcrumbs={[{ label: "Certificates" }]}
                />
                <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 sm:px-6">
                    <CertStats />
                    <CertList />
                    <Awards />
                    <ContactBar />
                </div>
            </main>
        </div>
    )
}
