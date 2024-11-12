import RootNavbar from "@repo/ui/root-navbar-structure1";
import MobileNavbar from "@repo/ui/mobile-navbar";
import IntroPage from "../../components/intro-page";

export default function Page(): JSX.Element {
  return (
    <>
      <div className="">
        <RootNavbar 
          title="Manish Kumar Sharma ..."
          MainNavbarLinks={() => <div>Links</div>}
          MobileNavbar={MobileNavbar}
        />
        <div className="ml-8 mr-8 mt-12 py-4">
            <IntroPage/>
        </div>
      </div>
    </>
  );
}
