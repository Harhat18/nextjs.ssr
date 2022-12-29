import Link from "next/link";

const UserList = () => (
  <div>
    <Link href="/user?name=harun" as="/user/Harun">
      <a className="username">Harun</a>
    </Link>
    <br />
    <Link href="/user?name=miray" as="/user/Miray">
      <a className="username">Miray</a>
    </Link>
    <style jsx>{`
      .username {
        background: black;
        color: white;
      }
    `}</style>
  </div>
);
export default UserList;
