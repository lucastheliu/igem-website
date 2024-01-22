import Link from "next/link";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "People", href: "#", current: false },
  { name: "Project", href: "#", current: false },
  { name: "Safety", href: "#", current: false },
  { name: "Practices", href: "#", current: false },
  { name: "Education", href: "#", current: false },
];

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-black p-3 ">
      <div>
        <h1>iGEM LeRosey</h1>
      </div>
      <div>
        {navigation.map((item, index) => (
          <Link href={item.href} className="p-2 m-2" key={index}>
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
