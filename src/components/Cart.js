import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <FlatList
      data={cartItems}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.cartItemContainer}>
          <Image source={item.image} style={styles.cartItemImage} />
          <Text style={styles.cartItemName}>{item.name}</Text>
          <Text style={styles.cartItemPrice}>{item.price}</Text>
          <TouchableOpacity style={styles.button} onPress={() => removeFromCart(item)}>
            <Image source={require('../../assets/remove.png')} style={styles.buttonIcon} />
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  cartItemContainer: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cartItemImage: {
    width: '100%',
    height: 450,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  cartItemName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  cartItemPrice: {
    fontSize: 18,
    color: '#888',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonIcon: {
    width: 24,
    height: 24,
  },
});

export default Cart;
