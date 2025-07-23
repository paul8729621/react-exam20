import Header from "@/components/Headers";
import "./globals.css";
import { FavoritesProvider } from "@/app/context/FavoritesContext";

export const metadata = {
  title: "포켓몬 도감",
  description: "귀여운 포켓몬들을 살펴보세요.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="google-site-verification"
          content="08ocBbHhmQPTFPT-x5hvf5DIRSDXxprE4e0MZYaET1E"
        />
      </head>
      <body>
        <FavoritesProvider>
          <Header />
          {children}
        </FavoritesProvider>
      </body>
    </html>
  );
}
