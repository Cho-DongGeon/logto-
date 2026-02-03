'use server';

import { signIn } from '@logto/next/server-actions';
import { logtoConfig } from '@/lib/logtoConfig';

// 회원가입
export async function signUpAction() {
    await signIn(logtoConfig, {
        redirectUri: `${logtoConfig.baseUrl}/callback`,
        firstScreen: 'register',
    });
}
