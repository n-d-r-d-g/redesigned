import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { DEFAULT_I18N_LOCALE, I18N_LOCALES } from "./constants";

acceptLanguage.languages([...I18N_LOCALES]);

export const config = {
  // matcher: '/:lng*'
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};

const cookieName = "i18next";

export function middleware(req: NextRequest) {
  let lng;

  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName)?.value);

  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));

  if (!lng) lng = DEFAULT_I18N_LOCALE;

  // Redirect if lng in path is not supported
  if (
    !I18N_LOCALES.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url),
    );
  }

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer") || "");
    const lngInReferer = I18N_LOCALES.find((locale) =>
      refererUrl.pathname.startsWith(`/${locale}`),
    );
    const response = NextResponse.next();

    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);

    return response;
  }

  return NextResponse.next();
}
