import Link from 'next/link';
import { getLogtoContext } from '@logto/next/server-actions';
import { logtoConfig } from '@/lib/logtoConfig';

export default async function CannotAccessPage() {
    const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

    return (
        <div>
            {isAuthenticated ? (
                <>
                    <h1 style={{ fontSize: '48px' }}>이미 로그인되어 있습니다.</h1>
                    <p style={{ fontSize: '24px' }}>안녕하세요, {claims?.username || claims?.sub}님</p>
                    <Link href='/' style={{ fontSize: '20px', color: '#0070f3' }}>
                        홈으로 이동
                    </Link>
                </>
            ) : (
                <>
                    <h1 style={{ fontSize: '32px', color: 'red' }}>접근 불가 페이지입니다. 로그인이 필요합니다.</h1>
                    <Link href='/' className='styledLink'>
                        홈으로 이동
                    </Link>
                </>
            )}
        </div>
    );
}
