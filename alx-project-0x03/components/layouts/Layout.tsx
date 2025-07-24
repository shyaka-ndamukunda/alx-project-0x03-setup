    import Footer from "./Footer";
    import Header from "./Header";
    import { LayoutProps } from "@/interface"; // Ensure this import is correct

    const Layout: React.FC<LayoutProps> = ({ children }) => {
      return (
        <>
          <Header />
          <main className="pt-[100px] min-h-screen"> {/* Added padding-top to account for fixed header */}
            {children}
          </main>
          <Footer />
        </>
      );
    };

    export default Layout;
    