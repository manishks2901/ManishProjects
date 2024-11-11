import Image from "next/image";
import RootNavbar from "@repo/ui/root-navbar-structure1";

export default function Page(): JSX.Element {
  return (
    <>
      <RootNavbar 
        title="Manish kumar sharma"
        MainNavbarLinks={() => <div>Links</div>}
        MobileFilters={() => <div>Filters</div>}
      />
    </>
  );
}
