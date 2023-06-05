// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        build: {
            cssCodeSplit: false
        }
    },

    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    'postcss-preset-env': {
                        preserve: true,
                        stage: 0,
                        features: {
                            'nesting-rules': true
                        }
                    },
                    // '@fullhuman/postcss-purgecss': {
                    //   content: [
                    //     'playground/pages/**/*.vue',
                    //     'playground/layouts/**/*.vue',
                    //     'playground/components/**/*.vue'
                    //   ],
                    //   safelist: [
                    //     'html', 'body', /^nuxt/
                    //   ]
                    // }
                },
                order: 'cssnanoLast'
            }
        }
    }

})
