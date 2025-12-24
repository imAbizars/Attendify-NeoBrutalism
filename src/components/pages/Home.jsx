export default function Home(){
    return(
        <section className="p-4  border border-black min-h-screen w-full">
            <div className="flex items-center border border-black h-30 w-full">
                <h1 className=" text-4xl border border-black">Selamat Pagi Abizar</h1>
            </div>

            <div className="border border-black p-2">
                <h4>Absen berikutnya dimulai pukul 08:00</h4>
            </div>
            {/* to do: ask permission for gps,add maps view then collect data location from user */}
        </section>
    )
}