import SiteNav from "./Site-nav";

export default function header() {
    //TODO change the app name later and add image + adjust the placement of the text 
    return(
        <header className="bg-gray-300 text-black shadow-md dark:bg-gray-700 dark:text-gray-100">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">My App</h1>
                <SiteNav />
            </nav>
        </header>
    )
}