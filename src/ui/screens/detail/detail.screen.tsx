import { FlatList, ListRenderItem, View, Text, StyleSheet } from 'react-native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainParamList, Screen } from '../../navigation/types';
import { RouteProp } from '@react-navigation/native';
import { GenericCard } from '../../atoms/genericCard/genericCard.atom';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../atoms/button/button.atom';
import { styles } from './detail.styles';

interface CartDetailProduct {
  discountPercentage: number;
  discountedTotal: number;
  id: number;
  price: number;
  quantity: number;
  thumbnail: string;
  title: string;
  total: number;
}

interface CartDetail {
  discountedTotal: number;
  id: number;
  products: CartDetailProduct[];
  total: number;
  totalProducts: number;
  totalQuantity: number;
  userId: number;
}

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Screen.Detail>;
  route: RouteProp<MainParamList, Screen.Detail>;
}

const DetailScreen = ({ navigation, route }: Props) => {
  const { top, bottom } = useSafeAreaInsets();
  const { id, idsArray } = route.params;
  const [cart, setCart] = useState<CartDetail | null>(null);

  const currentIndex = useMemo(() => idsArray.indexOf(id), [id, idsArray]);

  const backIconColor = useMemo(() => (currentIndex > 0 ? '#3b7ddd' : '#cccccc'), [currentIndex]);
  const forwardIconColor = useMemo(
    () => (currentIndex < idsArray.length - 1 ? '#3b7ddd' : '#cccccc'),
    [currentIndex, idsArray.length]
  );

  // ** CALLBACKS ** //
  const handleBack = useCallback(() => {
    const nextId = idsArray[currentIndex - 1];
    if (!nextId) {
      return;
    }
    navigation.setParams({ id: nextId });
  }, [currentIndex, idsArray, navigation]);

  const handleNext = useCallback(() => {
    const nextId = idsArray[currentIndex + 1];
    if (!nextId) {
      return;
    }
    navigation.setParams({ id: nextId });
  }, [currentIndex, idsArray, navigation]);

  // ** USE EFFECTS ** //
  useEffect(() => {
    fetch('https://dummyjson.com/carts/' + id)
      .then((res) => res.json())
      .then(setCart);
  }, [id]);

  // ** UI **//

  const renderDetailItem = useCallback<ListRenderItem<CartDetailProduct>>(({ item }) => {
    return (
      <View style={styles.cardContainer}>
        <GenericCard
          title={item.title}
          subTitle={`€${item.price.toFixed(2)}`}
          image={{ uri: item.thumbnail }}
          backgroundColor={'#ffffff'}
        />
        <Text style={styles.productQuantity}>Quantità: {item.quantity}</Text>
      </View>
    );
  }, []);

  const ItemSeparatorComponent = useCallback(
    () => <View style={styles.separator} />,
    []
  );

  return (
    <View style={[styles.container, { marginTop: top, marginBottom: bottom }]}>
      {/* Navigazione */}
      <View style={styles.navigatorContainer}>
        <Ionicons
          name={'chevron-back-circle'}
          size={36}
          onPress={handleBack}
          color={backIconColor}
        />
        <Ionicons
          name={'chevron-forward-circle'}
          size={36}
          onPress={handleNext}
          color={forwardIconColor}
        />
      </View>

      {/* Lista Prodotti */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cart?.products}
        renderItem={renderDetailItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
        contentContainerStyle={styles.listContainer}
      />

      {/* Pulsante Indietro */}
      <Button title="Torna indietro" onPress={navigation.goBack} />
    </View>
  );
};

export default DetailScreen;