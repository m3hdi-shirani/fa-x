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
        <div className="flex justify-between mx-auto max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl">
          <div className="px-2 sm:px-4 xxl:px-8  h-screen">
            <RightBar />
          </div>
          <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-gray-100 h-screen">
            {children}
          </div>
          <div className="hidden lg:flex flex-1 mr-4 xl:mr-8  h-screen">
            <LeftBar />
          </div>
        </div>
      </body>
    </html>
  );
}
