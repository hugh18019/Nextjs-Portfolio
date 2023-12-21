import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const from = process.env.FROM_EMAIL;
const Response = (message) => {
  return (
    <>
      <h1>{subject}</h1>
      <p>Thank you for the message!</p>
      <p>{message}</p>
    </>
  );
};

const SEND = async (req, res) => {
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from,
      to: [fromEmail, email],
      subject,
      react: <Response />,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
};

export default SEND;
