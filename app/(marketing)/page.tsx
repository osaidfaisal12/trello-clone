import { Button } from '@/components/ui/button';
import { Medal } from 'lucide-react'
import Link from 'next/link';
import localFont from 'next/font/local'
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const headingFont = localFont({
    src: '../../public/fonts/font.woff2'
})

const textFont = Poppins({
    subsets: ["latin"],
    weight: [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
    ],
})

const MarketingPage = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <div className={cn(
                "flex justify-center items-center flex-col",
                headingFont.className
                )}>
                <div className='justify-center mb-4 items-center flex font-bold bg-amber-200 px-4 p-2 rounded-full'>
                    <Medal className='h-6 w-6 mr-2 text-amber-800' />
                    <p className='text-amber-800'>
                        NO 1 TASK MANAGEMENT
                    </p>
                </div>
                <h1 className='text-3xl text-neutral-800 mb-6 md:text-6xl font-bold'>Taskify helps team move</h1>
                <div className='text-3xl md:text-6xl font-bold text-white bg-gradient-to-r from-fuchsia-700 to-pink-700 p-2 px-4 pb-2 rounded-md w-fit'>
                    work forward.
                </div>
                <div className={cn(
                    'text-xs md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto',
                    textFont.className
                    )}>
                    Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique - accomplish it all with Taskify.
                </div>
                <Button className='mt-6' size='lg' asChild>
                    <Link href='/sign-up'>Get Taskify For Free</Link>
                </Button>
            </div>
        </div>
    );
};

export default MarketingPage;