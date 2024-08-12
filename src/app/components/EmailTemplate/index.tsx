import * as React from "react";

import { RegistrationTemplate, ContactUsTemplate } from "./templates";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) =>
  fullName ? (
    <ContactUsTemplate fullName={fullName} email={email} message={message} />
  ) : (
    <RegistrationTemplate email={email} />
  );
