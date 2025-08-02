import dynamic from "next/dynamic";
import "../assets/styles/web-style.css";
import { Roboto } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
const Layout = dynamic(() => import("../pageComponents/Layout"));

const nunito = Roboto({
  weight: "400",
  subsets: ["cyrillic"],
});

export const metadata = {
  title: "Aidel",
  description: "Aidel Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
