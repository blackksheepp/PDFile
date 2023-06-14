import Navbar from "@components/Navbar";
import "../styles/global.css";

export const metadata = {
  title: "Pdfile",
  description: "Convert PDFs and More!",
};

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="en">
      <body className="bg-primary-light dark:bg-primary-dark">
        <main className="app">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
