import { MessageSquare, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"
import { ContactDetails, QuickContact, SocialLinks } from "../components/ContactInfo"
import { ContactForm } from "../components/ContactForm"
import { Faq } from "../components/Faq"
import { mydata } from "#/data/data"



export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary">
                                <MessageSquare className="size-3.5" />
                                Contact Me
                            </span>
                            <h1 className="mt-5 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                                Let&apos;s build something thoughtful, useful, and beautifully
                                crafted.
                            </h1>
                            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                                Whether you have a project idea, a collaboration opportunity, or
                                just want to say hello, I&apos;d love to hear from you.
                            </p>
                            <div className="mt-6 flex flex-wrap items-center gap-3">
                                <a href="#message">
                                    <Button className="rounded-full px-5 cursor-pointer" >
                                        Send a Message
                                    </Button>
                                </a>
                                <Link to="/projects">
                                    <Button
                                        variant="outline"
                                        className="rounded-full px-5 cursor-pointer"
                                    >
                                        View Projects
                                    </Button>
                                </Link>
                            </div>
                            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                                <span className="inline-flex items-center gap-1.5">
                                    <Clock className="size-4 text-primary" />
                                    Usually replies within 24 hours
                                </span>
                                <span className="inline-flex items-center gap-1.5">
                                    <MapPin className="size-4 text-primary" />
                                    {mydata.location.fulltime}
                                </span>
                            </div>
                        </div>

                        <QuickContact />
                    </div>

                    <div id="message" className="mt-12 grid gap-8 lg:grid-cols-2">
                        <ContactForm />
                        <div className="flex flex-col gap-6">
                            <ContactDetails />
                            <SocialLinks />
                        </div>
                    </div>

                    <div className="mt-12">
                        <Faq />
                    </div>
                </div>
            </main>
        </div>
    )
}
