import CardComponent from "@repo/ui/card";
import ReadMoreButtons from "@/components/button";
import { 
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
 } from "@/components/ui/carousel";

const ProjectCarousel = () => {
    return ( 
        <div className="mt-10 py-3 justify-around w-full">
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <CardComponent
                        imageUrl={"https://res.cloudinary.com/dsax8ghd0/image/upload/v1731439763/docker_qm91rf.jpg"}
                        title="Headasdfasdfasddfasf asdfasdf ing"
                        description="descri dasf sdf sadfadsfsda asfds afd asdfasdfasd ption"
                        ButtonComponent={ReadMoreButtons}
                    />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <CardComponent
                        imageUrl={"https://res.cloudinary.com/dsax8ghd0/image/upload/v1731439763/docker_qm91rf.jpg"}
                        title="Headasdfasdfasddfasf asdfasdf ing"
                        description="descri dasf sdf sadfadsfsda asfds afd asdfasdfasd ption"
                        ButtonComponent={ReadMoreButtons}
                    />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <CardComponent
                        imageUrl={"https://res.cloudinary.com/dsax8ghd0/image/upload/v1731439763/docker_qm91rf.jpg"}
                        title="Headasdfasdfasddfasf asdfasdf ing"
                        description="descri dasf sdf sadfadsfsda asfds afd asdfasdfasd ption"
                        ButtonComponent={ReadMoreButtons}
                    />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <CardComponent
                        imageUrl={"https://res.cloudinary.com/dsax8ghd0/image/upload/v1731439763/docker_qm91rf.jpg"}
                        title="Headasdfasdfasddfasf asdfasdf ing"
                        description="descri dasf sdf sadfadsfsda asfds afd asdfasdfasd ption"
                        ButtonComponent={ReadMoreButtons}
                    />
                    </CarouselItem>
                </CarouselContent>
                <div className="relative z-40  ">
                    <CarouselPrevious size={"icon"} />
                    <CarouselNext />
                </div>
            </Carousel>
            

        </div>
     );
}
 
export default ProjectCarousel;