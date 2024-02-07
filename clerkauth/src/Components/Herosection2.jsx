import '../CSS/Herosection.css';
import { useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';
import { SignOutButton } from '@clerk/clerk-react';

const HeroSection2 = () => {

    const { user, isSignedIn } = useUser();

    const createConfetti = () => {
        var count = 200;
        var defaults = {
            origin: { y: 0.7 }
        };

        function fire(particleRatio, opts) {
            confetti({
                ...defaults,
                ...opts,
                particleCount: Math.floor(count * particleRatio)
            });
        }

        fire(0.25, {
            spread: 26,
            startVelocity: 55,
        });
        fire(0.2, {
            spread: 60,
        });
        fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 45,
        });
    };

    useEffect(() => {
        if (isSignedIn) {
            createConfetti();
        }
    })



    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Welcome {user.fullName}</h1>
                <p className='newp'>Your SignIn  Process is Succesful !!</p>
                <Link to={"/profile"}><button>Go To Profile</button></Link>
                <SignOutButton />
            </div>
        </section>
    );
};

export default HeroSection2;