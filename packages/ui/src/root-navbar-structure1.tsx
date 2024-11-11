interface RootNavbarProps {
    title:string;
    MainNavbarLinks:React.FC;
    MobileFilters:React.FC;
}





const RootNavbar:React.FC<RootNavbarProps> = ({
    title,
    MainNavbarLinks,
    MobileFilters
}) => {
    return ( 
        <nav>
            <div className="relatve px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-center">
                {/* Company's Name */}
                <div className="lg:text-3xl sm:text-2xl font-semibold">
                    {title}
                </div>
                <div className="hidden sm:flex flex-1 justify-center">
                    <MainNavbarLinks/>
                </div>
                <div className="sm:hidden flex items-center">
                    <MobileFilters/>
                </div>

            </div>
        </nav>
     );
}
 
export default RootNavbar;