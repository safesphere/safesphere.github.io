import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";
import { validateEmail } from "./utils";

const EMAIL_TO = "contact@safesphere.com";
const SENDGRID_API_KEY =
  "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";

sendgrid.setApiKey(SENDGRID_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const errors = validate(req.body);

    if (errors.length) {
      return res.status(400).send({ errors });
    }

    const data = getMailData(req.body);

    try {
      await sendgrid.send(data);
      return res.status(200).send({ success: true });
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
      return res.status(502).send(error);
    }
  }

  return res.status(404).json({
    error: {
      code: "not_found",
      messgae:
        "The requested endpoint was not found or doesn't support this method.",
    },
  });
};

function validate(body: any) {
  const { name, email, message } = body;
  const errors = [];

  if (!name.trim().length) {
    errors.push("name");
  }
  if (!email.trim().length || !validateEmail(email)) {
    errors.push("email");
  }
  if (!message.trim().length) {
    errors.push("message");
  }

  return errors;
}

function getMailData(body: any) {
  const { name, email, message, phone } = body;

  const regex = /<br>/gi;

  let content = name + " sent you an email:";
  phone && (content += "<br>Phone: " + phone);
  content += "<br><br> ---<br>" + message + "<br>---";

  return {
    to: EMAIL_TO,
    from: { name, email: EMAIL_TO },
    replyTo: { name, email },
    subject: `[SafeSphere] Contact from ${name}`,
    text: content.replace(regex, "\r\n"),
    html: content,
  };
}
