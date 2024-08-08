import createNextIntlPlugin from "next-intl/plugin";
import withVideos from "next-videos";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

// Combinamos los plugins
const configWithPlugins = withVideos(withNextIntl(nextConfig));

export default configWithPlugins;
