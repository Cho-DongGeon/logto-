import { handleSignIn } from '@logto/next/server-actions';
import { redirect } from 'next/navigation';
import { logtoConfig } from '@/lib/logtoConfig';

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    await handleSignIn(logtoConfig, searchParams); // code 교환 및 세션/쿠키 저장
    redirect('/notice'); // 로그인 후 이동할 페이지
}
