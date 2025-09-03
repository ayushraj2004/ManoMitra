import { SidebarProvider } from '@/components/ui/sidebar';
import EmployeeSidebar from '@/components/employee-sidebar';

export default function EmployeeDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <EmployeeSidebar />
      {children}
    </SidebarProvider>
  );
}
