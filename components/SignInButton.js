'use client';

export default function SignInButton({ onSignIn }) {
    return (
        <button
            onClick={() => {
                onSignIn();
            }}
        >
            Sign In
        </button>
    );
}
