'use client';

export default function SignOutButton({ onSignOut }) {
    return (
        // prettier-ignore
        <button onClick={() => {onSignOut()}}>Sign Out</button>
    );
}
