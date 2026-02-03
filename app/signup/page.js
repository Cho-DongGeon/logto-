import { signIn } from '@logto/next/server-actions';
import { logtoConfig } from '@/lib/logtoConfig';

export default function SignUpPage() {
    async function handleSignUp(formData) {
        'use server';
        await signIn(logtoConfig, { firstScreen: 'register' });
    }

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
            <h1>회원가입</h1>
            <form action={handleSignUp}>
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
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor='email' style={{ display: 'block', marginBottom: '5px' }}>
                        이메일
                    </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
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
                    회원가입
                </button>
            </form>
            <div style={{ marginTop: '15px', textAlign: 'center' }}>
                <p>
                    이미 계정이 있으신가요?{' '}
                    <a href='/login' style={{ color: '#0070f3' }}>
                        로그인
                    </a>
                </p>
            </div>
        </div>
    );
}
