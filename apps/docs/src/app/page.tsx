import RootNavbar from "@repo/ui/root-navbar-structure1";
import MobileNavbar from "@repo/ui/mobile-navbar";
import IntroPage from "@/components/intro-page";
import SocialMedia from "@/components/social-media";
import CardComponent from "@repo/ui/card"
import ReadMoreButtons from "@/components/button";

export default function Page(): JSX.Element {
  return (
    <>
      <div className="m-0">
        <RootNavbar 
          title="Manish Kumar Sharma ..."
          MainNavbarLinks={() => <div>Links</div>}
          MobileNavbar={MobileNavbar}
        />
        <div className="m-14 mt-12 py-4">
            <IntroPage/>
            <SocialMedia/>
            <CardComponent
            imageUrl={"https://res.cloudinary.com/dsax8ghd0/image/upload/v1731439763/docker_qm91rf.jpg"}
            title="Headasdfasdfasddfasf asdfasdf ing"
            description="descri dasf sdf sadfadsfsda asfds afd asdfasdfasd ption"
            ButtonComponent={ReadMoreButtons}
            />
        </div>
      </div>
    </>
  );
}
