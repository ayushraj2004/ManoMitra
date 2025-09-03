import StudentDashboardMainLayout from './(main)/layout';
import StudentDashboardContent from './(main)/page';

export default function StudentPage() {
  return (
    <StudentDashboardMainLayout>
      <StudentDashboardContent />
    </StudentDashboardMainLayout>
  );
}
