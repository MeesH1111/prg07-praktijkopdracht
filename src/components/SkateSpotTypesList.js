import {FlatList, Image, Linking, Pressable, ScrollView, Text, View} from "react-native";
import React, {useContext} from "react";
import styleSheet from "react-native-web/src/exports/StyleSheet";
import {Theme} from "./Theme";


export default function SkateSpotTypesList() {
    const {darkMode, themeColors, fontFamilies} = useContext(Theme);

    const skateSpotTypes = [
        {
            id: '1',
            type: 'Flatground',
            description: 'Flatground is skateboarden op een vlakke ondergrond. Zonder obstakels, ledges of stairs. Dit kan bijvoorbeeld op een lege parkeerplaats, gladde stoep en eigenlijk overal waar je rond kan rijden en tricks kan doen.',
            images: [
                'https://tse3.mm.bing.net/th/id/OIP.-CmhVduqu43GQJEjWGGohAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
                'https://i.ytimg.com/vi/vOxZHPrIFX4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgXyhaMA8=&rs=AOn4CLCcxdHDOLzoUBVG1wrXXAWl8Z2dOQ',
                'https://i.ytimg.com/vi/OEMt_-MDScQ/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLDJ7oBKzlpCbs9LMYxYxD9JDkVgWw',
            ],
            link: 'https://www.youtube.com/watch?v=SQZqWjsPFiM&t=84s',
        },
        {
            id: '2',
            type: 'Flatrail',
            description: 'Een flatrail is een rail die parallel aan de grond loopt. Niet naar beneden of omhoog maar gewoon vlak. Je kan hier tricks op doen zoals boardslides, lipslides, 50-50s en verschillende grinds.',
            images: [
                'https://www.skatedeluxe.com/blog/wp-content/uploads/2018/07/obstacle-guide-flatrail-ben-dillinger-1-600x400.jpg',
                'https://tse2.mm.bing.net/th/id/OIP.ljOtvjwcof1BVlAMd0mMgwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
                'https://tse4.mm.bing.net/th/id/OIP.n9zYwqyp_05A5zLVXII25AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
            ],
            link: 'https://www.youtube.com/watch?v=lv36QLAF2zE',
        },
        {
            id: '3',
            type: 'Handrail',
            description: 'Een handrail is een rail die ergens langs naar beneden loopt, meestal stairs of een bank. Hier worden vaak tricks op gedaan zoals boardslides, lipslides, feebles en crooks',
            images: [
                'https://tse3.mm.bing.net/th/id/OIP.EEC-9mGr8jvH2RHG6qRfEgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3',
                'https://th.bing.com/th/id/R.e774f04d54f5b20dd8b008a4f9842cf4?rik=PErb7iBLjEPv9w&pid=ImgRaw&r=0',
                'https://i.pinimg.com/736x/88/a3/d4/88a3d449caf74e50407b2ea81d3bbf53--skate--extreme-sports.jpg',
            ],
            link: 'https://www.youtube.com/watch?v=rs7Di3CsEiI',
        },
        {
            id: '4',
            type: 'Stairset',
            description: 'Stair sets zijn letterlijk trappen die je vind in de stad of op de straat. Hier kan je heel veel coole flatground tricks van af doen zoals een ollie, kickflip, tre flip en elke flatground trick eigenlijk wel. Bij stair sets zijn de hoeveelheid traptredens van de stair erg belangrijk. Dit bepaald hoe makkelijk of moeilijk de stair set is om een trick van af te doen.',
            images: [
                'https://cf-img-cdn.nodplatform.com/static/images/q23f9d40.jpg',
                'https://i.ytimg.com/vi/SCIw77Q1JU0/maxresdefault.jpg',
                'https://i.redd.it/xx73o1zjcjo91.jpg',
            ],
            link: 'https://www.youtube.com/watch?v=SmQjyRtIUd4',
        },
        {
            id: '5',
            type: 'Ledge',
            description: 'Een ledge is een lage, verhoogde rand waar je op kan grinden of sliden. Ledges zijn vlak aan de bovenkant en kunnen recht, schuin of zelfs rond zijn. Hier kan je alle soorten slides, grinds en Flip-in/out tricks op doen.',
            images: [
                'https://tse4.mm.bing.net/th/id/OIP.JoO79P-g1fRX-UIEuVb82AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
                'https://www.skatedeluxe.com/blog/wp-content/uploads/2016/12/skateboard-tricks-curb-rail.jpg',
                'https://www.skatedeluxe.com/blog/wp-content/uploads/2018/09/obsctacle-guide-curb.jpg',
            ],
            link: 'https://www.youtube.com/watch?v=tYv7cGyzRow',
        },
        {
            id: '6',
            type: 'Curb',
            description: 'Een curb is een smalle rand langs stoepen, straten en parkeerplaatsen. De meeste zijn maar enkele centimeters hoog, zo\'n 10 tot 20 centimeter. Je kan hier slides, grinds en vooral populair: slappy\'s op doen. Een slappy is een grind waar je geen ollie of pop voor nodig hebt. Je draait je board gewoon in een bepaalde hoek en rijd op de curb af, waardoor de trucks bijna vanzelf inlocken.',
            images: [
                'https://i.ytimg.com/vi/t3Q4NTn1g8Y/maxresdefault.jpg',
                'https://cdn.shopify.com/s/files/1/0566/3814/4595/files/IMG_6079_480x480.jpg?v=1678549562',
                'https://lwmag.co.za/wp-content/uploads/2023/05/DSC_8955.jpeg',
            ],
            link: 'https://www.youtube.com/watch?v=TCdnpPZmUQU',
        },
        {
            id: '7',
            type: 'Manual pad',
            description: 'Een manual pad is een plat, verhoogd oppervlak van meestal een paar tot 30 centimeter hoog waarop je op ollied en gelijk daarna een manual doet. Dit kan van alles zijn, als het maar een kleine verhoging heeft. De meeste skaters ollie\'en erop, doen een manual of nose manual en rollen er vervolgens af of ronden het af met een trick zoals een kickflip.',
            images: [
                'https://tse3.mm.bing.net/th/id/OIP.lvaD3NYo6uoiMsspuIDk5gHaDV?rs=1&pid=ImgDetMain&o=7&rm=3',
                'https://content.instructables.com/F2H/JN8Z/GBOTJHQD/F2HJN8ZGBOTJHQD.jpg?auto=webp&fit=bounds&frame=1&height=1024&width=1024auto=webp&frame=1&height=300',
                'https://images.gutefrage.net/media/fragen/bilder/diy-manual-pad-aus-beton/0_full.jpg?v=1618571746000',
            ],
            link: 'https://www.youtube.com/watch?v=hBVBIgJ4664',
        },
        {
            id: '8',
            type: 'Bank',
            description: 'Een bank is een hellend oppervlak dat schuin genoeg is om op te rollen, af te dalen of trucs op te doen, maar niet zo steil dat het een volwaardige quarterpipe is. Zie het als een gladde ramp zonder bocht erin. Je kan hier veel verschillende tricks op doen zoals ollies, kickflips en verschillende fakie flips.',
            images: [
                'https://www.skatedeluxe.com/blog/wp-content/uploads/2018/07/obstacle-guide-bank-ben-dillinger-lisbon.jpg',
                'https://i.ytimg.com/vi/rPzbjpThoyM/maxresdefault.jpg',
                'https://i.pinimg.com/736x/80/5b/a5/805ba51d79c66d13281919bad8a96d0a--skate--skateboarding.jpg',
            ],
            link: 'https://www.youtube.com/watch?v=JT0ZVtFUe0I',
        },
        {
            id: '9',
            type: 'Hubba',
            description: 'Een hubba is in feite een aflopende ledge die langs de zijkant van een trap of helling loopt, meestal in een hoek parallel aan de helling. Je kan hier grinds, slides en flip-in/out tricks op doen.',
            images: [
                'https://th.bing.com/th/id/R.bbc459925764085615361275a9832ec9?rik=%2fL%2bE%2f%2fc0xXeV1A&pid=ImgRaw&r=0',
                'https://external-preview.redd.it/k2e-_9GsuCEklE_3xbYHGrXlQhwgSPzuYjOcWkK9DBs.jpg?width=640&crop=smart&auto=webp&s=bb63743adc2f4b5a54b096bdbbc4e1f909bbbc93',
                'https://kingskateboard.com/cdn/shop/articles/Screen-Shot-2022-04-21-at-15.14.42.jpg?v=1688783745',
            ],
            link: 'https://www.youtube.com/watch?v=tV01JADspNo',
        },
        {
            id: '10',
            type: 'Gap',
            description: 'Een gap is elke ruimte waar je overheen springt tijdens een trick. Het kan een vlakke gap tussen twee ledges zijn, een trap, over een rail, een scheur in de stoep of iets veel ingewikkelder, zoals van dak tot dak. In principe spring je over iets heen en land je aan de andere kant. Je kan hier tricks zoals ollies, kickflips en bijna elke die je kan bedenken over doen.',
            images: [
                'https://www.skatedeluxe.com/blog/wp-content/uploads/2019/05/Obstacle-Guide-Gap.jpg',
                'https://i.ytimg.com/vi/S7RAcOiIZkQ/maxresdefault.jpg',
                'https://www.lemondeduskate.com/wp-content/uploads/2021/04/gap-2-min-redim.jpg',
            ],
            link: 'https://www.youtube.com/watch?v=X_Kj3V-gquw',
        },
        {
            id: '11',
            type: 'Walls',
            description: 'Een wall is meestal een verticaal oppervlak waar je op kunt rijden of op/af tricks kunt doen. Je gebruikt de muur als terreinelement, of je doet tricks op de muur zelf zoals een wallride, wall plant of grabs. ',
            images: [
                'https://th.bing.com/th/id/R.81baf5d460102eee794792ed14120a97?rik=5th6%2b9YpuOA9Og&riu=http%3a%2f%2fsi2g.co.uk%2fgallery_photos%2fCommercial_Photography_Martin_Herrick_Skateboard_Wallride.jpg&ehk=Yq4ezNRgsHo9T4AA6yhJJtbYGf1RnJXBt3T5FBPognM%3d&risl=&pid=ImgRaw&r=0',
                'https://www.howcast.com/.image/t_share/MTU5NzA0NjM0NjMxNzI2MTAw/zh-how-to-do-a-wallride-on-a-skateboard-promo-image.jpg',
                'https://i.pinimg.com/736x/dd/b1/25/ddb1257938c2f03f10e036b9c067c1da--longboarding-skateboards.jpg',
            ],
            link: 'https://www.youtube.com/watch?v=ecmLD3K2Odo',
        },
    ]

    const openLink = (link) => {
        if (link) {
            Linking.openURL(link).catch(err =>
                console.error("Kan de URL niet openen:", err)
            );
        } else {
            console.warn("Geen link beschikbaar in de JSON-data!");
        }
    };


    const styles = styleSheet.create({
        shadow: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
        },

        divider: {
            borderBottomWidth: 1,
            borderBottomColor: darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(48,48,48,0.2)',
            marginVertical: 10,

        },
    })

    return (
        <FlatList
            data={skateSpotTypes}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <View>
                    <View className="flex mt-8 ml-7">
                        <Text
                            className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>• {item.type}</Text>
                        <Text
                            className={`text-lg ml-4 max-w-96 ${darkMode ? 'text-white' : 'text-black'}`}>{item.description}</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            className="ml-4 overflow-visible"
                        >
                            {item.images.map((image, index) => (
                                <View
                                    key={index}
                                    style={[styles.shadow, {
                                        width: 160,
                                        height: 160,
                                    }]}
                                    className="mt-8 mr-6 rounded-lg"
                                >
                                    <Image className="rounded-lg"
                                           source={{uri: image, width: 160, height: 160}}
                                    />

                                </View>
                            ))}
                        </ScrollView>
                        <Pressable onPress={() => openLink(item.link)}
                                   className="mt-8 ml-4 mb-10"
                        >
                            <Text className={`underline ${darkMode ? 'text-white' : 'text-black'}`}>Meer leren ></Text>
                        </Pressable>
                    </View>
                    <View style={styles.divider} className="mt-8"></View>
                </View>
            )}
        />
    )
}