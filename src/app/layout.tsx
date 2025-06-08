import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa">
      <body>
        <div className="flex justify-between">
          <div>
            <RightBar />
          </div>
          <div>{children}</div>
          <div>
            <LeftBar />
          </div>
        </div>
      </body>
    </html>
  );
}
