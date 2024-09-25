import { Suspense } from "react";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
