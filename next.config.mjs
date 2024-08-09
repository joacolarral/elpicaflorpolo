import createNextIntlPlugin from "next-intl/plugin";
import withVideos from "next-videos";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

// Combinamos los plugins
const configWithPlugins = withNextIntl({ ...nextConfig, ...withVideos() });

export default configWithPlugins;
