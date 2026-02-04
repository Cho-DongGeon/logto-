import { getLogtoContext, signIn, signOut } from '@logto/next/server-actions';
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';
import SignUpButton from './SignUpButton';
import { logtoConfig } from '@/lib/logtoConfig';
import { signUpAction } from '@/features/login/action';

export default async function Header() {
    const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);
    console.log('Header - isAuthenticated:', isAuthenticated);
    console.log('Header - claims: ', claims);
    return (
        <div style={{ width: '100%', padding: '10px', marginLeft: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {isAuthenticated ? (
                <div style={{ display: 'inline-block' }}>
                    <span style={{ fontSize: '24px' }}>
                        안녕하세요 <strong>[ {claims?.username} ]</strong> 님
                    </span>
                    {/* 로그아웃 */}
                    <SignOutButton
                        onSignOut={async () => {
                            'use server';
                            await signOut(logtoConfig);
                        }}
                    />
                </div>
            ) : (
                <div style={{ display: 'flex' }}>
                    <span style={{ fontSize: '24px' }}>로그인하세요</span>
                    {/* 로그인 */}
                    <SignInButton
                        onSignIn={async () => {
                            'use server';
                            await signIn(logtoConfig);
                        }}
                    />
                    {/* 회원가입 */}
                    <SignUpButton action={signUpAction} />
                </div>
            )}
        </div>
    );
}
