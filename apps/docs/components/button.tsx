import IconButton from "@repo/ui/icon-button";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";


const ReadMoreButtons = () => {
    return ( 
        <>
        <Button className="h-12 w-40 rounded-full mr-2">
            Read More 
        </Button>
        <IconButton icon={<MoveRight/>} className="h-12 w-12"/>
        </>
     );
}
 
export default ReadMoreButtons;