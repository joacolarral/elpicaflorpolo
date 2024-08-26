import Head from "next/head";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import React from "react";

import favicon from "@/app/favicon.ico";

import type { Metadata } from "next";

import "../styles/global.scss";

export const metadata: Metadata = {
  title: "El Picaflor Polo",
  description: "Polo Experience in Argentina",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <Head>
        <title>El Picaflor Polo</title>
        <meta name="description" content="Polo Experience in Argentina" />
        <link rel="icon" href={favicon.src} type="image/x-icon" />
      </Head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
