
const data = [
    {
        id: 0,
        link: 'Mac',
        subLink: [
            { image: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/macbook__fjd32xo0xwmm_large.svg', product: 'MacBook' },
            { image: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/macbookair__by1vem70tkc2_large.svg', product: 'MacBook Air' },
            { image: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/macbookpro__e0wcugzmt26a_large.svg', product: 'MacBook Pro' },
            { image: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/imac__dlz2ciyr6hm6_large.svg', product: 'iMac' },
            { image: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/imac_pro__el8kcar06qky_large.svg', product: 'iMac Pro' },
            { image: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/macpro__dt69qr0ywncm_large.svg', product: 'Mac Pro' },
            { image: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/macmini__rzlk7b0xsmqq_large.svg', product: 'Mac mini' },
            { image: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/mac_acc__fia3ihqup4ae_large.svg', product: 'Accessories' },
            { image: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/mac_osx__dq0x03ehapyu_large.svg', product: 'Mojave' },
            { image: 'https://www.apple.com/v/mac/home/ae/images/familybrowser/mac_comp__by57zw2zt32a_large.svg', product: 'Compare' }
        ]
    },

    {
        id: 1,
        link: 'iPad',
        subLink: [
            { image: 'https://www.apple.com/v/ipad/home/ak/images/chapternav/ipadpro_light__fic9xqb4rq62_large.svg', product: 'iPad Pro' },
            { image: 'https://www.apple.com/v/ipad/home/ak/images/chapternav/ipadpro_10_5_light__cdnzsjo3mhsi_large.svg', product: 'iPad Pro 10.5' },
            { image: 'https://www.apple.com/v/ipad/home/ak/images/chapternav/ipad_light__fxafu0jcd16q_large.svg', product: 'iPad 9.7' },
            { image: 'https://www.apple.com/v/ipad/home/ak/images/chapternav/ipadmini_light__br4a8cvnupki_large.svg', product: 'iPad mini 4' },
            { image: 'https://www.apple.com/v/ipad/home/ak/images/chapternav/ios_light__gnmyez8xx0a6_large.svg', product: 'ios 12' },
            { image: 'https://www.apple.com/v/ipad/home/ak/images/chapternav/apple_pencil_light__bz8n8cqdvcia_large.svg', product: 'Apple Pencil' },
            { image: 'https://www.apple.com/v/ipad/home/ak/images/chapternav/keyboard_light__f6gmbmwm4i6a_large.svg', product: 'Smart' },
            { image: 'https://www.apple.com/v/ipad/home/ak/images/chapternav/ipad_acc_light__f7t99j4r9qem_large.svg', product: 'Accessories' },
            { image: 'https://www.apple.com/v/ipad/home/ak/images/chapternav/ipad_comp_light__btey5qm4uaoi_large.svg', product: 'Compare' }
        ]
    },

    {
        id: 2,
        link: 'iPhone',
        subLink: [
            { image: 'https://www.apple.com/v/iphone/home/y/images/chapternav/iphonexs_dark_large.svg', product: 'iPhone Xs' },
            { image: 'https://www.apple.com/v/iphone/home/y/images/chapternav/iphonexr_dark_large.svg', product: 'iPhone Xr' },
            { image: 'https://www.apple.com/v/iphone/home/y/images/chapternav/iphone8_dark_large.svg', product: 'iPhone 8' },
            { image: 'https://www.apple.com/v/iphone/home/y/images/chapternav/iphone7_dark_large.svg', product: 'iPhone 7' },
            { image: 'https://www.apple.com/v/iphone/home/y/images/chapternav/ios_dark_large.svg', product: 'ios 12' },
            { image: 'https://www.apple.com/v/iphone/home/y/images/chapternav/airpods_dark_large.svg', product: 'AirPods' },
            { image: 'https://www.apple.com/v/iphone/home/y/images/chapternav/accessories_dark_large.svg', product: 'Accessories' },
            { image: 'https://www.apple.com/v/iphone/home/y/images/chapternav/compare_dark_large.svg', product: 'Compare' }
        ]
    },

    {
        id: 3,
        link: 'Watch',
        subLink: [
            { image: 'https://www.apple.com/v/watch/home/l/images/watch_nav_series_2_large.svg', product: 'Apple Watch Series 4' },
            { image: 'https://www.apple.com/v/watch/home/l/images/watch_nav_nike_large.svg', product: 'Apple Watch Nike+' },
            { image: 'https://www.apple.com/v/watch/home/l/images/watch_nav_hermes_large.svg', product: 'Apple Watch Hermès' },
            { image: 'https://www.apple.com/v/watch/home/l/images/watch_nav_edition_large.svg', product: 'Apple Watch Series 3' },
            { image: 'https://www.apple.com/v/watch/home/l/images/watch_nav_watch_os_large.svg', product: 'watchOS' },
            { image: 'https://www.apple.com/v/watch/home/l/images/watch_nav_bands_large.svg', product: 'Brands' },
            { image: 'https://www.apple.com/v/watch/home/l/images/watch_nav_accessories_large.svg', product: 'Accessories' },
            { image: 'https://www.apple.com/v/watch/home/l/images/watch_nav_compare_large.svg', product: 'Compare' }
        ]
    },

    {
        id: 4,
        link: 'TV',
        subLink: [
            { image: 'https://www.apple.com/v/tv/home/e/images/home/apple_tv_dark_large.svg', product: 'Apple TV 4k' },
            { image: 'https://www.apple.com/v/tv/home/e/images/home/apple_tv_dark_large.svg', product: 'Apple TV' },
            { image: 'https://www.apple.com/v/tv/home/e/images/home/tvapp_dark_large.svg', product: 'TV App' },
            { image: 'https://www.apple.com/v/tv/home/e/images/home/accessories_dark_large.svg', product: 'Accessories' },
            { image: 'https://www.apple.com/v/tv/home/e/images/home/compare_dark_large.svg', product: 'Compare' }
        ]
    },

    {
        id: 5,
        link: 'Music',
        subLink: [
            { image: 'https://www.apple.com/v/music/h/images/overview/icons/apple_music_large.svg', product: 'Apple Music' },
            { image: 'https://www.apple.com/v/music/h/images/overview/icons/itunes_large.svg', product: 'iTunes' },
            { image: 'https://www.apple.com/v/music/h/images/overview/icons/homepod_icon_large.svg', product: 'HomePod' },
            { image: 'https://www.apple.com/v/music/h/images/overview/icons/airpods_icon_large.svg', product: 'AirPods' },
            { image: 'https://www.apple.com/v/music/h/images/overview/icons/ipod_touch_light_large.svg', product: 'iPod touch' },
            { image: 'https://www.apple.com/v/music/h/images/overview/icons/accessories_large.svg', product: 'Music Accessories' },
            { image: 'https://www.apple.com/v/music/h/images/overview/icons/gift_cards_large.svg', product: 'Gift Cards' }
        ]
    },

    {
        id: 6,
        link: 'Support'
    }
]

export default data