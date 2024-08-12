import * as React from "react";

interface ContactUsTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

interface RegistrationProps {
  email: string;
}

export const ContactUsTemplate: React.FC<Readonly<ContactUsTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div>
    <h3>De: {fullName}</h3>
    <h3>Mail: {email}</h3>
    <p>{message}</p>
  </div>
);

export const RegistrationTemplate: React.FC<Readonly<RegistrationProps>> = ({
  email,
}) => (
  <div>
    <h3>Mail: {email}</h3>
  </div>
);
