export const logtoConfig = {
    endpoint: 'https://auth.aidsoft.io',
    appId: '55w13jy906dvaflm9wr23',
    appSecret: process.env.LOGTO_APP_SECRET || 'P8jdXRpSsOSaqyTAbTh9I315DOi5Ssoj',
    baseUrl: 'http://192.168.1.166:3000', // Change to your own base URL
    cookieSecret: process.env.LOGTO_COOKIE_SECRET || 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
    cookieSecure: process.env.NODE_ENV === 'production',
};

// 디버깅용 로그 (개발 환경에서만)
if (process.env.NODE_ENV !== 'production') {
    // console.log('Logto Config:', {
    //     ...logtoConfig,
    //     appSecret: logtoConfig.appSecret ? '***' : 'undefined',
    //     cookieSecret: logtoConfig.cookieSecret ? '***' : 'undefined',
    // });
}
