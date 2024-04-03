"use client";

import Header from "@/components/layout/header";
// import Sidebar from "@/components/layout/sidebar";
// import type { Metadata } from "next";
import SidebarTwo from "@/components/layout/sidebar-two";
import useIsCollapsed from '@/hooks/use-is-collapsed'

// export const metadata: Metadata = {
//   title: "Next Shadcn Dashboard Starter",
//   description: "Basic dashboard with Next.js and Shadcn",
// };

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useIsCollapsed()
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        {/*<Sidebar />*/}
        <SidebarTwo isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <main className="relative flex-1 overflow-y-auto overflow-x-hidden pt-16">{children}</main>
      </div>
    </>
  );
}
