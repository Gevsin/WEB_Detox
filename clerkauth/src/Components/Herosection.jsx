import '../CSS/HeroSection.css';
import { SignInButton } from '@clerk/clerk-react';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Clerk-Auth</h1>
                <p className='newp'>New Gen Auth and SignIn to Explore</p>
                <SignInButton />
            </div>
        </section>
    );
};

export default HeroSection;