/** @type {import('next').NextConfig} */

module.exports = {
    webpack: (config, { isServer }) => {
        // 空のオブジェクト渡すことでnpmパッケージがfsモジュールに依存しないようにします
        if (!isServer) {
            config.node = {
                fs: 'empty',
                path: 'empty',
                stream: 'empty',
            }
        }
        return config
    }
}
