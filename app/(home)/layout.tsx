import { Header } from "@/components";

export default function HomeLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <Header quantity={0} showSearch={false} />
      { children }
    </div>
  );
}