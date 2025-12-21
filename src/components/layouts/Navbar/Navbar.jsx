import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    House,
    BookOpenText,
    CircleUser,
    BedSingle
} from "lucide-react";
export default function Navbar(){
    const [isopen,setOpen] = useState(false);
    const tooglesidebar = () => setOpen(!isopen);
    return(
        <>
            <nav className="sticky top-0 z-50 flex items-center justify-between p-3 py-3 bg-main border-b-3">
                <div className="border border-4 p-2 pr-3 pb-3 rounded-xl">
                    <Button
                    onClick={tooglesidebar}
                    className="text-2xl font-bold focus:outline-none px-2"
                    >
                    {isopen ? "✕" : "☰"}
                    </Button>
                </div>
            </nav>
            <div className={`fixed top-0 left-0 h-full w-50 pt-20 z-40 bg-main border-r-3 transform transition-transform duration-300 ease-in-out ${isopen?"translate-x-0":"-translate-x-full"}`}>
                <div className="pt-10">
                    <ul className="space-y-5 text-md">
                        <a className="flex items-center p-4 border-3" href="#"><House className="mr-2"/>Beranda</a>
                        <a className="flex items-center p-4 border-3" href="#"><BookOpenText className="mr-2"/>Riwayat Absen</a>
                        <a className="flex items-center p-4 border-3" href="#"><CircleUser className="mr-2"/>Profile</a>
                        <a className="flex items-center p-4 border-3" href="#"><BedSingle className="mr-2"/>Izin</a>
                    </ul>
                </div>
            </div>
        </>
    );
}