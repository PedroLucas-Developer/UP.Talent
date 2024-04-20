import Header from "@/components/header/header";
import Home from "./home";
import Differential from "./differential";
import Footer from "@/components/footer";
import Customers from "./customers";
import Team from "./team";

export default function page() {
  return (
    <main className="m-0 p-0 min-h-screen inset-y-0 inset-x-0 outline-none box-border">
      <Header />
      <Home />
      <Differential />
      <Customers />
      <Team />
      <Footer />
    </main>
  );
}
