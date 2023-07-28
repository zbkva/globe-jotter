import { MapDiaryContextProvider } from "./context/mapDiary.context";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MapDiaryContextProvider>{children}</MapDiaryContextProvider>
      </body>
    </html>
  );
}
