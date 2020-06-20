import React from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginBottom: 20,
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 3,
        padding: 20
    },
    upperRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
    }, 
    coinCode: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold",        
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20
    },
    seperator: {
        marginTop: 10,
    },
    coinPrice: {
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 10,
        fontWeight: "bold", 
    },
    image: {
        width: 40,
        height: 40
    },
    bold: {
        fontWeight: 'bold'
    },
    moneySymbol: {
        fontWeight: "bold",
    }
});

const { container, image, bold, upperRow, coinPrice , seperator, coinName, coinCode, moneySymbol} = styles;

const CoinCard = ({ coin_assetId, price_usd, name }) => {
    return (
        <View style={container}>
            <View style={upperRow}>
                {/* <Image style={image} /> */}
                <Text style={coinCode}>{coin_assetId}</Text>
                <Text style={seperator}>|</Text>
                <Text style={coinName}>{name}</Text>
                <Text style={coinPrice}>{price_usd}
                    <Text style={moneySymbol}> $ </Text>
                </Text>
            </View>
        </View>
    )

}

export default CoinCard;