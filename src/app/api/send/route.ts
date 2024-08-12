import { NextResponse } from "next/server";
import { Resend } from "resend";

import { EmailTemplate } from "../../components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { data, error } = await resend.emails.send({
      from: `${body.mailFrom}`,
      to: ["inac.otero@gmail.com"],
      subject: body.subject,
      react: EmailTemplate(body),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
