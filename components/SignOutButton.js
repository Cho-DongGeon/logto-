'use client';

export default function SignOutButton({ onSignOut }) {
    return (
        <button
            onClick={() => {
                onSignOut();
            }}
        >
            Sign Out
        </button>
    );
}
