import Image from "next/image";
import RootNavbar from "@repo/ui/root-navbar-structure1";
import MobileNavbar from "@repo/ui/mobile-navbar";

export default function Page(): JSX.Element {
  return (
    <>
      <RootNavbar 
        title="Manish Kumar Sharma ..."
        MainNavbarLinks={() => <div>Links</div>}
        MobileNavbar={MobileNavbar}
      />
    </>
  );
}
