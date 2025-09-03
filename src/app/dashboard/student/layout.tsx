import StudentSidebar from '@/components/student-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function StudentDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <StudentSidebar />
      {children}
    </SidebarProvider>
  );
}
