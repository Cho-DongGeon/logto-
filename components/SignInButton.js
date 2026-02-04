'use client';

export default function SignInButton({ onSignIn }) {
    return (
        // prettier-ignore
        <button onClick={() => {onSignIn()}}>Sign In</button>
    );
}
