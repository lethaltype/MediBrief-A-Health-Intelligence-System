export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/reports/:path*",
    "/history/:path*",
    "/settings/:path*",
  ],
};
