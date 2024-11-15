import RootNavbar from "@repo/ui/root-navbar-structure1";
import MobileNavbar from "@repo/ui/mobile-navbar";
import IntroPage from "@/components/intro-page";
import SocialMedia from "@/components/social-media";
import ProjectCarousel from "@/components/project-carousel";
import TalentSpace from "@/components/talent-space";

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

      <div className="m-36 mt-12 py-4">
        <IntroPage />
        <SocialMedia />
        <ProjectCarousel />
      <div className="h-[300px] flex justify-end items-center mt-40">
      <div className="mr-40">
          <p className="text-3xl md:text-2xl font-sans font-semibold">
            Hello I'm Manish , I'm a{" "}
            <b>
              <i>fullstack developer</i>
            </b>
            <br /> and I'm passionate about learning new technologies <br /> and
            building new things.
          </p>
        </div>
      </div>

        
        <div className="h-[400px] mt-20">
            <TalentSpace />
          </div>
      </div>
    </>
  );
}
