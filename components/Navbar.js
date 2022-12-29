import Link from "next/link";
const Navbar = () => (
  <div>
    <Link href="/" as="Giriş">
      <a>Home</a>
    </Link>
    &nbsp;
    <Link href="/users" as="Kullanicilar">
      <a>Users</a>
    </Link>
  </div>
);

export default Navbar;
