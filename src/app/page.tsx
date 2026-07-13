import { MembershipShowcase } from "@/components/membership-showcase";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <main id="home">
      <SiteHeader />

      <MembershipShowcase />
    </main>
  );
}
