'use client';

export default function SignUpButton({ action }) {
  return (
    <form>
      <button formAction={action}>Sign Up</button>
    </form>
  );
}