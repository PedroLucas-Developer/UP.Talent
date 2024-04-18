import Footer from "@/components/footer";
import Header from "@/components/header";
import Home from "./menu";

export default function page() {
  return (
    <main className="m-0 p-0 min-h-screen inset-y-0 inset-x-0 outline-none box-border">
      <Header />
      <Home />
     
    </main>
  );
}
