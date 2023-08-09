var config = {
    style: 'mapbox://styles/nam-sgn327/cll2nzonr000101p4gfapc2td',
    accessToken: 'pk.eyJ1IjoibmFtLXNnbjMyNyIsImEiOiJjbGppZjl2eG4wbzR6M2VxZ2lvbDljZ3BmIn0.ByroIp05NH0hCRgx9H8O-A',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Saigon\'s Japantown is more for sex than food.',
    subtitle: 'What purpose does the area really serve when there are just as many, if not more karaokes and massages than restaurants.',
    byline: 'By Nam Tran',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        // {
        //     id: 'slug-style-id',
        //     alignment: 'left',
        //     hidden: false,
        //     title: 'A brief history of Vietnam/Japan relations',
        //     // image: './path/to/image/source.png',
        //     description: 'Japan is among the top donors of official development assisstance (ODA) to Vietnam, totalling nearly US$20bn from 1992-2011 according to estimates to Japan International Cooperation Agency (JICA) estimates.',
        //     location: {
        //         center: [109.1, 15.63],
        //         zoom: 4.29,
        //         pitch: 60,
        //         bearing: 0
        //     },
            
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //         // {
        //         //     layer: 'layer-name',
        //         //     opacity: 1,
        //         //     duration: 5000
        //         // }
        //     ],
        //     onChapterExit: [
        //         // {
        //         //     layer: 'layer-name',
        //         //     opacity: 0
        //         // }
        //     ]
        // },
        // {
        //     id: 'second-identifier',
        //     alignment: 'fully',
        //     hidden: false,
        //     // title: 'Second Title',
        //     image: '/pictures/jpn_vn_50years.jpg',
        //     description: '2023 marked the 50th anniversary of Japan and Vietnam establishing diplomatic relations, marked by a luminescent display of LED lights in Bach Dang harbour at the heart of town.',
        //     location: {
        //         center:  [106.707627, 10.773285],
        //         zoom: 16,
        //         pitch: 60,
        //         bearing: -43.2,
        //         // flyTo additional controls-
        //         // These options control the flight curve, making it move
        //         // slowly and zoom out almost completely before starting
        //         // to pan.
        //         //speed: 2, // make the flying slow
        //         //curve: 1, // change the speed at which it zooms out
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: true,
        //     callback: '',
        //     onChapterEnter: [{layer: 'japantown_outline',
        //                       opacity: 0
        //                     }],
        //     onChapterExit: []
        // },

        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'The Japanese community in Vietnam',
            image: 'https://thesmartlocal.com/vietnam/wp-content/uploads/2020/12/Japan-Town-alley-by-night-1-2048x1638.jpg',
            description: 'After re-establishing diplomatic relations in the early 90s, the Japanese expat community in Vietnam grew, bringing Japanese culture to Vietnam, and establishing a culturally distinct enclave in Saigon to bring these workers a slice of home-away-from-home. ',
            location: {
                center: [106.70569, 10.779625],
                zoom: 16,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '15b_alley',
                    opacity: 0
                },
                {
                    layer: 'japantown_outline',
                    opacity: 1
                },
                {
                    layer: 'restaurants',
                    opacity: 0
                },
                {
                    layer: 'snack_bars',
                    opacity: 0
                },
                {
                    layer: 'massages',
                    opacity: 0
                },
                {
                    layer: 'shady',
                    opacity: 0
                },
                {
                    layer: 'karaoke',
                    opacity: 0
                }

            ],
            onChapterExit: [{
                layer: 'japantown_outline',
                opacity: 1
            },
            {
                layer: 'restaurants',
                opacity: 0
            },
            {
                layer: 'snack_bars',
                opacity: 0
            },
            {
                layer: 'massages',
                opacity: 0
            },
            {
                layer: 'shady',
                opacity: 0
            }
            ,
            {
                layer: 'karaoke',
                opacity: 0
            }]
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            // title: 'Third Title',
            image: 'https://static.dw.com/image/50720835_605.jpg',
            description: 'Work culture in Japan is notoriously demanding. It\'s a common sight to see salarymen indulging in the nightlife district to stave off impending karoshi, death from overwork.',
            location: {
                center: [106.70569, 10.779625],
                zoom: 16,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '15b_alley',
                    opacity: 0
                },
                {
                    layer: 'japantown_outline',
                    opacity: 1
                },
                {
                    layer: 'restaurants',
                    opacity: 0
                },
                {
                    layer: 'snack_bars',
                    opacity: 0
                },
                {
                    layer: 'massages',
                    opacity: 0
                },
                {
                    layer: 'shady',
                    opacity: 0
                },
                {
                    layer: 'karaoke',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'What\'s Japantown like?',
            image: 'https://img.vietcetera.com/uploads/images/20-oct-2020/kobayashi.jpeg',
            description: 'Saigon\'s Japantown is defined by two things:\n1. great food. There are over 60 restaurants in the alleys of Japantown where you can be expected to be welcomed in Japanese by the head chef and waitstaff upon entering.',
            location: {
                center: [106.705532, 10.780234],
                zoom: 16.79,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'japantown_outline',
                    opacity: 1
                },
                {
                    layer: 'restaurants',
                    opacity: 1
                },
                {
                    layer: 'snack_bars',
                    opacity: 0
                },
                {
                    layer: 'massages',
                    opacity: 0
                },
                {
                    layer: 'shady',
                    opacity: 0
                },
                {
                    layer: 'karaoke',
                    opacity: 0
                }
            ],
            onChapterExit: [{
                layer: 'japantown_outline',
                opacity: 1
            },
            {
                layer: 'restaurants',
                opacity: 0
            },
            {
                layer: 'snack_bars',
                opacity: 0
            },
            {
                layer: 'massages',
                opacity: 0
            },
            {
                layer: 'shady',
                opacity: 0
            },
            {
                layer: 'karaoke',
                opacity: 0
            }]
        },
        {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'What\'s Japantown like',
            image: '/images/massagegirls.png',
            description: '2. Having to dodge your way across a minefield of hostesses offering you a special massage, if you have the unfortunate luck of being a non-Vietnamese male.',
            location: {
                center: [106.705532, 10.780234],
                zoom: 16.79,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'japantown_outline',
                opacity: 1
            },
            {
                layer: 'restaurants',
                opacity: 0
            },
            {
                layer: 'snack_bars',
                opacity: 0
            },
            {
                layer: 'massages',
                opacity: 0
            },
            {
                layer: 'shady',
                opacity: 1
            },
            {
                layer: 'karaoke',
                opacity: 0
            }],
            onChapterExit: []
        },
        {
            id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            // title: 'What\'s Japantown like',
            image: 'https://static01.nyt.com/images/2009/08/11/opinion/11hostess.480.jpg',
            description: 'These nightlife establishments are a mixture of typical ones you might find in Japan. Officially sex is off-the-table, with shops in Japan having explicit policy against customer-employee relations. Whether this translates to Vietnam is another matter...',
            location: {
                center: [106.705532, 10.780234],
                zoom: 16.79,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'japantown_outline',
                opacity: 1
            },
            {
                layer: 'restaurants',
                opacity: 0
            },
            {
                layer: 'snack_bars',
                opacity: 0
            },
            {
                layer: 'massages',
                opacity: 0
            },
            {
                layer: 'shady',
                opacity: 1
            },
            {
                layer: 'karaoke',
                opacity: 0
            }],
            onChapterExit: [
            ]
        },
        {
            id: 'eigth-chapter',
            alignment: 'left',
            hidden: false,
            // title: 'What\'s Japantown like',
            image: '/images/snack_bar.jpg',
            description: 'The pickings available to Japanese expats are\n1. Snack or counter bars, a more wallet-friendly option compared to oppulent hostess clubs back in Japan to enjoy some female company. ',
            location: {
                center: [106.705532, 10.780234],
                zoom: 16.79,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'japantown_outline',
                    opacity: 1
                },
                {
                    layer: 'restaurants',
                    opacity: 0
                },
                {
                    layer: 'snack_bars',
                    opacity: 1
                },
                {
                    layer: 'massages',
                    opacity: 0
                },
                {
                    layer: 'shady',
                    opacity: 0
                },
                {
                    layer: 'karaoke',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                layer: 'japantown_outline',
                opacity: 1
            },
            {
                layer: 'restaurants',
                opacity: 0
            },
            {
                layer: 'snack_bars',
                opacity: 0
            },
            {
                layer: 'massages',
                opacity: 0
            },
            {
                layer: 'shady',
                opacity: 0
            },
            {
                layer: 'karaoke',
                opacity: 0
            }
        ]
        },
        {
            id: 'ninth-chapter',
            alignment: 'left',
            hidden: false,
            // title: 'What\'s Japantown like',
            image: '/images/karaoke_bar.jpg',
            description: '2. Karoke bars or KTVs (Karaoke TV), where clients sing away their stress in a private room, often with female company. The karaoke bars of Saigon\'s Japantown is pretty devoid of song.',
            location: {
                center: [106.705532, 10.780234],
                zoom: 16.79,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'japantown_outline',
                opacity: 1
            },
            {
                layer: 'restaurants',
                opacity: 0
            },
            {
                layer: 'snack_bars',
                opacity: 0
            },
            {
                layer: 'karaoke',
                opacity: 1
            },
            {
                layer: 'massages',
                opacity: 0
            },
            {
                layer: 'shady',
                opacity: 0
            }
        ],
            onChapterExit: [
                {
                    layer: 'japantown_outline',
                    opacity: 1
                },
                {
                    layer: 'restaurants',
                    opacity: 0
                },
                {
                    layer: 'snack_bars',
                    opacity: 0
                },
                {
                    layer: 'karaoke',
                    opacity: 0
                },
                {
                    layer: 'massages',
                    opacity: 1
                },
                {
                    layer: 'shady',
                    opacity: 0
                }
            ]
        },
        {
            id: 'tenth-chapter',
            alignment: 'left',
            hidden: false,
            // title: 'What\'s Japantown like',
            image: '/images/nice_spa.jpg',
            description: '3. The ubiquitous massages with happy-endings, a mainstay for sexpats coming to Southeast Asia.',
            location: {
                center: [106.705532, 10.780234],
                zoom: 16.79,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'japantown_outline',
                opacity: 1
            },
            {
                layer: 'restaurants',
                opacity: 0
            },
            {
                layer: 'snack_bars',
                opacity: 0
            },
            {
                layer: 'karaoke',
                opacity: 0
            },
            {
                layer: 'massages',
                opacity: 1
            },
            {
                layer: 'shady',
                opacity: 0
            }],
            onChapterExit: [{
                layer: 'japantown_outline',
                opacity: 1
            },
            {
                layer: 'restaurants',
                opacity: 0
            },
            {
                layer: 'snack_bars',
                opacity: 0
            },
            {
                layer: 'karaoke',
                opacity: 0
            },
            {
                layer: 'massages',
                opacity: 0
            },
            {
                layer: 'shady',
                opacity: 0
            }]
        },
        {
            id: 'eleventh-chapter',
            alignment: 'left',
            hidden: false,
            // title: 'What\'s Japantown like',
            image: '/images/ginga_jpnonly.jpg',
            description: 'Cloaked in a shroud of secrecy with dark doors and Japanese-only names, these snack and KTV bars know who they\'re not catering to: local Vietnamese men',
            location: {
                center: [106.705532, 10.780234],
                zoom: 16.79,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
        
        
    ]
};
