import RootNavbar from "@repo/ui/root-navbar-structure1";
import MobileNavbar from "@repo/ui/mobile-navbar";
import IntroPage from "@/components/intro-page";
import SocialMedia from "@/components/social-media";
import CardComponent from "@repo/ui/card"
import ReadMoreButtons from "@/components/button";
import ProjectCarousel from "@/components/project-carousel";

export default function Page(): JSX.Element {
  return (
    <>
      <div className="m-0">
        <RootNavbar 
          title="Manish Kumar Sharma ..."
          MainNavbarLinks={() => <div>Links</div>}
          MobileNavbar={MobileNavbar}
        />
      </div>

        <div className="m-14 mt-12 py-4">
            <IntroPage/>
            <SocialMedia/>
            <ProjectCarousel/>
        </div>

    </>
  );
}
