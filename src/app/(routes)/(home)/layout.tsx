import { Logo } from "@/components/shared/logo";
import { Sidebar } from "@/components/shared/sidebar";

export default function LayoutRoutes({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="h-full">
      <section className="flex justify-between lg:hidden px-6 py-3 items-center bg-black">
        <div>
          <Logo />
        </div>
        <div className="text-white">Movile Menu</div>
      </section>
      <section className="flex h-full">
        <div className="max-w-lg hidden lg:flex h-full w-72 flex-col fixed bg-black px-4 text-white">
          <Sidebar />
        </div>
        <div className="w-full lg:pl-72">
          <div className="p-6">{children}</div>
        </div>
      </section>
    </main>
  );
}
