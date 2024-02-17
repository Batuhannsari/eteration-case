/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/products', // "/" adresi /products sayfasına yönlendirilecek
        permanent: true, // Yönlendirme kalıcı olacak
      },
    ];
  },
};

export default nextConfig;
