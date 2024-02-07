import Navbar from "./Navbar";
import HeroSection from "./Herosection";
import { SignedOut, SignedIn } from "@clerk/clerk-react";
import AfterSign from "./AfterSign";

const BeforeSign = () => {
    return (
        <>
            <SignedOut>
                <Navbar />
                <HeroSection />
            </SignedOut>

            <SignedIn>
                <AfterSign />
            </SignedIn>

        </>
    )
}

export default BeforeSign