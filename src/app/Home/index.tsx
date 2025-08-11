import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input/Index";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";
import { Item } from "@/components/Item";
import { useState } from "react";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];
const ITEMS = [
  {
    id: "1",
    status: FilterStatus.DONE,
    description: "1 pacote de feijao",
  },
  {
    id: "2",
    status: FilterStatus.DONE,
    description: "1 pacote de arroz",
  },
  {
    id: "3",
    status: FilterStatus.PENDING,
    description: "1 pacote de café",
  },
];

export function Home() {
  const [filter, setFilter] = useState(FilterStatus.PENDING);

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
          <View style={styles.header}>
            {FILTER_STATUS.map((status) => (
              <Filter
                key={status}
                status={status}
                isActive={status === filter}
                onPress={() => setFilter(status)}
              />
            ))}

            <TouchableOpacity style={styles.clearButton}>
              <Text style={styles.clearText}>Limpar</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={ITEMS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Item
                data={item}
                onStatus={() => console.log("Mudar o status")}
                onRemove={() => console.log("remover")}
              />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            contentContainerStyle={styles.listContent}
            ListEmptyComponent={() => (
              <Text style={styles.empty}>Nenhum item aqui.</Text>
            )}
          />
        </View>
      </View>
    </>
  );
}
