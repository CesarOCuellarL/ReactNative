import React, { useEffect, useContext } from "react";
import { Text, View } from "react-native";
import { styles } from "./Catalogo.styles";
import { list } from "../../services/Books";

import { GlobalContext } from "../../context/global/global.context";

export default function CatalogoScreen() {
  const { listBooks, books } = useContext(GlobalContext);

  useEffect(() => {
    listBooks();
  }, []);

  return (
    <View style={styles.container}>
      {books &&
        books.map((book, i) => (
          <View key={i}>
            <Text>Name: {`${book.Name}`}</Text>
            <Text>Description: {`${book.Description} `}</Text>
            <Text>Estatus: {`${book.Estatus} `}</Text>
            <Text>ISBN: {`${book.ISBN}`}</Text>
            <Text>Categoria: {`${book.Categoria}`}</Text>
            <Text style={{ marginBottom: 30 }}>
              Fecha de Publicacion: {`${book.FechaPublicacion}`}
            </Text>
          </View>
        ))}
    </View>
  );
}
