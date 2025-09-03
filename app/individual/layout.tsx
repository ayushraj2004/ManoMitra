import IndividualSidebar from '@/components/individual-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function IndividualPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <IndividualSidebar />
      {children}
    </SidebarProvider>
  );
}
