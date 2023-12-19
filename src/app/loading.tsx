import Image from "next/image";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <>
            <div className="flex items-center justify-center w-screen h-screen">
                <Image src="/cat.gif" alt="..." width={400} height={300} className="rounded-2xl"/>
                <h1 className="text-5xl ml-10 w-80">기다리라옹...</h1>
            </div>

        </>
    )
}