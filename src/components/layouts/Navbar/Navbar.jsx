import React, { useState } from "react";
import { Button } from "@/components/ui/button";
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
        </>
    );
}