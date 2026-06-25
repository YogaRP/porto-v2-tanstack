import ContactPage from '#/features/contact-me/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact-me')({
    head: () => ({
        meta: [
            { title: "Contact — Yoga Rizky Putra" },
            {
                name: "description",
                content: "Have a project idea or want to collaborate? Get in touch with Yoga Rizky Putra."
            }
        ]
    }),
    component: RouteComponent,
})

function RouteComponent() {
    return <ContactPage />
}
