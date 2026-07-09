import { ContactBar } from "#/components/ContactBar"
import { PageBanner } from "#/components/PageBanner"
import { CertList } from "../components/CertList"

export default function CertificatePage() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <PageBanner
                    title="Certificates"
                    subtitle="Recognition of my learning journey and professional milestones."
                    breadcrumbs={[{ label: "Certificates" }]}
                />
                <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
                    <CertList />
                </div>
                <div className="bg-secondary/40">
                    <ContactBar />
                </div>
            </main>
        </div>
    )
}
