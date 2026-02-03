import { getLogtoContext } from '@logto/next/server-actions';
import { redirect } from 'next/navigation';
import { logtoConfig } from '@/lib/logtoConfig';

export default async function NoticePage() {
    const { isAuthenticated } = await getLogtoContext(logtoConfig);
    if (!isAuthenticated) {
        redirect('/cannot-access');
    }

    return (
        <div>
            <h1 style={{ fontSize: '48px' }}>-----NoticePage-----</h1>
            <div>
                <h3 style={{ color: 'green' }}>로그인 상태만 들어올 수 있는 페이지입니다.</h3>
            </div>
        </div>
    );
}
