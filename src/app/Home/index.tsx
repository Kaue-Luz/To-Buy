import { Image, View } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";

export function Home() {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("@/assets/logo.png")}
        ></Image>
        <Button title="Adicionar" onPress={() => console.log("adicionar")} />
        <Button title="Excluir" onPress={() => console.log("excluir")} />
      </View>
    </>
  );
}
