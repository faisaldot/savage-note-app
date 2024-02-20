import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Note | Create your note" },
    { name: "description", content: "A simple and feature fully note app." },
  ];
};

export default function Index() {
  return <></>;
}
