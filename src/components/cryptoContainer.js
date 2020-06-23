import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from "react-native";

import FetchCoinData from './../actions/fetchCoinData';
import CoinCard from './coinCard';

import Spinner from 'react-native-loading-spinner-overlay';

class CryptoContainer extends Component {

    componentWillMount() {
        this.props.FetchCoinData();
    }

    renderCoinCards() {
        const displayCoins = [
            "BTC", "ETH", "ADA", "XRP", "USDT",
            "BCH", "LTC", "EOS", "XTZ", "LINK",
            "XLM", "XMR", "TRON", "ETC", "USDC",
            "DASH", "ATOM", "ZEC", "BAT", "XDG"
        ];
        const {crypto}  = this.props; 
        if(crypto.data !== null) {

            return crypto.data.filter(coin => coin.type_is_crypto === 1 && displayCoins.includes(coin.asset_id))
            .map((coin, index) =>
                    <CoinCard
                    key={index}
                    coin_assetId={coin.asset_id}
                    price_usd={coin.price_usd}
                    name={coin.name}
                />  
                
            )
        } 
    }

    render() {

        const { crypto } = this.props;

        if(crypto.isFetching) {
            return (
                <View>
                    <Spinner 
                    visible={crypto.isFetching}
                    textContent={"Loading..."}
                    textStyle={{color: "#253145"}}
                    animation="fade"
                    />
                </View>
            )
        }
        return (
                <ScrollView style={contentContainer}>
                    {this.renderCoinCards()}
                </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55
    }
});

const { contentContainer } = styles;

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, {FetchCoinData})(CryptoContainer)