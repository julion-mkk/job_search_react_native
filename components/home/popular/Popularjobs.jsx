import React from 'react'
import {View, Text, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native'

import styles from './popularjobs.style'
import {useRouter} from "expo-router";
import {COLORS, SIZES} from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

const Popularjobs = () => {
    const isLoading = false;
    const error = false;
    const router = useRouter();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Popular Jobs</Text>
              <TouchableOpacity>
                  <Text style={styles.headerBtn}>Sell All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size="small" color={COLORS.primary}/>
                ) : error? (
                    <Text>Something went wrong</Text>
                ) :  <FlatList
                    data={[1,2,3,4,5]}
                    renderItem={({item})=> (
                        <PopularJobCard
                            item={item}/>
                    )}
                    keyExtractor={item => item?.itemId}
                    contentContainerStyle={{columnGap: SIZES.medium}}
                    horizontal
                /> }
            </View>
        </View>
    )
}

export default Popularjobs