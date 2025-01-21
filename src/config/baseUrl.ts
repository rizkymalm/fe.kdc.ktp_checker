export const getEnv = () => ({
    BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    API_ADMIN: process.env.NEXT_PUBLIC_API_URL_ADMIN,
    API_PUBLIC: process.env.NEXT_PUBLIC_API_URL_PUBLIC,
    API_SHARED: process.env.NEXT_PUBLIC_API_URL_SHARED,
    API_SYSTEM: process.env.NEXT_PUBLIC_API_URL_SYSTEM,
    API_USER: process.env.NEXT_PUBLIC_API_URL_USER,
});

export default getEnv();
