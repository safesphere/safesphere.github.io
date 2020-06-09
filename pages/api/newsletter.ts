import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";
import crypto from "crypto";

import { validateEmail } from "../../utils";

const MAILCHIMP_LIST_ID = "769c3b18ae";
const MAILCHIMP_API_KEY = "53cf5d2061fa89e573a68c1215ed8bd6-us20";
const MAILCHIMP_TAG = "safesphere";
const DATACENTER = MAILCHIMP_API_KEY.split("-")[1];

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!validateEmail(email)) {
      return res.status(400).send({ error: "Email is invalid" });
    }

    try {
      const subscriber_hash = crypto
        .createHash("md5")
        .update(email.toLowerCase())
        .digest("hex");

      const response = await fetch(
        `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members/${subscriber_hash}`,
        {
          headers: {
            Authorization: `apikey ${MAILCHIMP_API_KEY}`,
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );

      if (response.status === 200) {
        return res.status(400).json({
          error: `This email is already subscribed`,
        });
      }
    } catch (error) {
      console.error({ error });
      return res.status(201).json({});
    }

    try {
      const data = {
        email_address: email,
        status: "subscribed",
        tags: [MAILCHIMP_TAG],
      };

      const response = await fetch(
        `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
        {
          body: JSON.stringify(data),
          headers: {
            Authorization: `apikey ${MAILCHIMP_API_KEY}`,
            "Content-Type": "application/json",
          },
          method: "POST",
        }
      );

      if (response.status >= 400) {
        return res.status(400).json({
          error: `There was an error subscribing to the newsletter. Please contact us at contact@safesphere.com`,
        });
      }

      return res.status(201).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: error.message || error.toString() });
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
