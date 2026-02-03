import { signIn } from '@logto/next/server-actions';
import { logtoConfig } from '@/lib/logtoConfig';

export default function LoginPage() {
    async function handleLogin(formData) {
        'use server';
        await signIn(logtoConfig);
    }

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
            <h1>로그인</h1>
            <form action={handleLogin}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor='username' style={{ display: 'block', marginBottom: '5px' }}>
                        아이디
                    </label>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        style={{
                            width: '100%',
                            padding: '8px',
                            fontSize: '16px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor='password' style={{ display: 'block', marginBottom: '5px' }}>
                        비밀번호
                    </label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        style={{
                            width: '100%',
                            padding: '8px',
                            fontSize: '16px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                        required
                    />
                </div>
                <button
                    type='submit'
                    style={{
                        width: '100%',
                        padding: '10px',
                        fontSize: '16px',
                        backgroundColor: '#0070f3',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    로그인
                </button>
            </form>
            <div style={{ marginTop: '15px', textAlign: 'center' }}>
                <p>
                    계정이 없으신가요?{' '}
                    <a href='/signup' style={{ color: '#0070f3' }}>
                        회원가입
                    </a>
                </p>
            </div>
        </div>
    );
}
