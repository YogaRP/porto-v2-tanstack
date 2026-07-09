import { createServerFn } from "@tanstack/react-start";
import { contactSchema } from "../schema/contact";
import { Resend } from 'resend'


export const useSendContactMessage = createServerFn({method: "POST"})
.inputValidator(contactSchema)
.handler(async ({data}) => {
    const resend = new Resend(process.env.RESEND_API_KEY)

    const {name, email, subject, message} = data

    try {
      const result = await resend.emails.send({
        from: 'Portfolio Contact <contact@yogarizky.my.id>', // must be your verified domain
        to: process.env.CONTACT_EMAIL!,
        replyTo: email,
        subject: `[Portfolio] ${subject}`,
        text: `From: ${name} (${email})\n\n${message}`,
        html: `
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        `,
      })

      if (result.error) {
        throw new Error(result.error.message)
      }

      return { success: true }
    } catch (err) {
      console.error('Failed to send email:', err)
      throw new Error('Failed to send message. Please try again later.')
    }

})