import {ScrollView, Text, View} from 'react-native';
import React, {useContext} from "react";
import styleSheet from "react-native-web/src/exports/StyleSheet";
import {Theme} from "./Theme";

export default function About() {
    const {darkMode, setDarkMode} = useContext(Theme)


    const styles = styleSheet.create({
        block: {
            backgroundColor: darkMode ? 'black' : 'white',
        },

        aboutText: {
            color: darkMode ? 'white' : 'black'
        }
    })

    return (
        <ScrollView>
            <View style={styles.block}
                  className="flex flex-row justify-between items-center p-4 m-4 border-2 border-gray-200 rounded-2xl bg-white shadow">
                <View>
                    <Text style={styles.aboutText}
                          className="font-bold text-2xl">About
                    </Text>
                    <Text style={styles.aboutText}
                          className="flex text-lg"
                    >
                        Welkom bij Street Skate Spots. Dit is een app die je verschillende street spots in
                        Rotterdam laat zien, die perfect zijn voor het skateboarden. Ga naar de HotspotsMap en zie alle
                        plekken. Druk op een marker om meer informtie over de spot te lezen en een beeld te krijgen van
                        hoe de spot eruit ziet. In de HotspotsList kan je overzichtelijk alle spots zien. Ook kan je een
                        spot als favoriet maken, voor als het echt een goede spot is. Er is ook de mogelijkheid om
                        notities te schrijven bij verschillende spots. Om bij te houden welke tricks je er allemaal hebt
                        gedaan of wat je van de
                        spot vindt. Veel plezier met het gebruik van de app! 🛹🔥

                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}
