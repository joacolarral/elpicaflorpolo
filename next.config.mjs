import createNextIntlPlugin from "next-intl/plugin";
import withVideos from "next-videos";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  basePath: "",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: false,
      },
    ];
  },
};

// Combinamos los plugins
const configWithPlugins = withNextIntl({ ...nextConfig, ...withVideos() });

export default configWithPlugins;
