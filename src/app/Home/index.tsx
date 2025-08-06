import { Image, View } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input/Index";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";

export function Home() {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("@/assets/logo.png")}
        ></Image>

        <View style={styles.form}>
          <Input placeholder="O que você precisa comprar?" />
          <Button title="Adicionar" onPress={() => console.log("adicionar")} />
        </View>

        <View style={styles.content}>
          <Filter status={FilterStatus.DONE} isActive />
          <Filter status={FilterStatus.PENDING} isActive={false} />
        </View>
      </View>
    </>
  );
}
