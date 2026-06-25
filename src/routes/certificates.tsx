import CertificatePage from '#/features/certificates/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/certificates')({
  component: RouteComponent,
})

function RouteComponent() {
  return <CertificatePage />
}
