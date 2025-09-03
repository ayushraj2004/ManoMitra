import IndividualPortalMainLayout from './(main)/layout';
import IndividualDashboardPage from './(main)/page';

export default function IndividualPage() {
  return (
    <IndividualPortalMainLayout>
      <IndividualDashboardPage />
    </IndividualPortalMainLayout>
  );
}
