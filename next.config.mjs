/**
 * @type {import('next').NextConfig}
 **/
export default {
  reactStrictMode: true,
  images: {
    domains: []
  },
  async redirects() {
    return []
  },
  output: 'standalone'
}
