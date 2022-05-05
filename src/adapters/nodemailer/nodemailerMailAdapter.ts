import nodemailer from "nodemailer";

import { MailAdapter, SendMailData } from "../mailAdapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "669f3991cf5196",
    pass: "5b805d473c8007"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Fernanda Leite <dev.fernandaleite@gmail.com>",
      subject,
      html: body
    })
  };
}