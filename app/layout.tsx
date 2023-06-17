import Navbar from "@components/Navbar";
import Providers from "@components/ThemeProvider";
import ThemeChanger from "@components/ThemeChanger";
import "../styles/global.css";

export const metadata = {
  title: "Pdfile",
  description: "Convert PDFs and More!",
};

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="en">
      <body className="bg-primary-light dark:bg-primary-dark">
        <Providers>
          <main className="app">
            <Navbar />
            <ThemeChanger />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
