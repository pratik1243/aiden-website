import "../assets/styles/web-style.css";
import { Roboto } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

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
        {children}
      </body>
    </html>
  );
}
