import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { SideNavRail } from "@/components/SideNavRail";
import { TopAppBar } from "@/components/TopAppBar";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session?.user) {
    redirect("/sign-in");
  }

  const userName = session.user.name ?? session.user.email ?? "Account";

  return (
    <div className="flex min-h-screen bg-background">
      <SideNavRail userName={userName} />
      <main className="flex-1 flex flex-col min-w-0">
        <TopAppBar userName={userName} userTag={session.user.email ?? undefined} />
        <div className="p-gutter lg:p-10 space-y-section-gap max-w-[1600px] mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
