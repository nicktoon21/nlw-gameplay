import { Image } from "react-native";
import { styles } from "./styles";



export function GuildIcon() {
    const uri = "https://www.freeiconspng.com/thumbs/discord-icon/discord-metro-style-icon-0.png"
    return (
        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />
    )
}