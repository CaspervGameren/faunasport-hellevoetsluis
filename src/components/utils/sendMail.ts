import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_KEY);

export type ContactArgs = {
    email: string;
    name: string;
    message: string;
}

export const sendMail = async (args: ContactArgs) => {
    const { data, error } = await resend.emails.send({
        from: 'FaunaSport <onboarding@resend.dev>',
        to: [args.email],
        subject: `New contact message from ${args.name}`,
        html: `
      <p><strong>Name:</strong> ${args.name}</p>
      <p><strong>Email:</strong> ${args.email}</p>
      <p><strong>Message:</strong> ${args.message}</p>
    `,
    });

    if (error) {
        console.error("Resend Error:", error);
        throw error;
    }

    return data;
};