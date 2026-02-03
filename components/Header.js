import { getLogtoContext, signIn, signOut } from '@logto/next/server-actions';
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';
import SignUpButton from './SignUpButton';
import { logtoConfig } from '@/lib/logtoConfig';
import { signUpAction } from '@/features/login/action';

export default async function Header() {
    const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);
    console.log('Header - isAuthenticated:', isAuthenticated);
    console.log('Header - claims: ', claims)
    return (
        <div style={{ marginLeft: '20px', display: 'inline-block' }}>
            {isAuthenticated ? (
                <div style={{ display: 'inline-block' }}>
                    <span>안녕하세요 [ {claims?.username} ] 님</span>
                    <SignOutButton
                        onSignOut={async () => {
                            'use server';
                            await signOut(logtoConfig);
                        }}
                    />
                </div>
            ) : (
                <div style={{ display: 'flex' }}>
                    <SignInButton
                        onSignIn={async () => {
                            'use server';
                            await signIn(logtoConfig);
                        }}
                    />
                    <SignUpButton action={signUpAction} />
                </div>
            )}
        </div>
    );
}
