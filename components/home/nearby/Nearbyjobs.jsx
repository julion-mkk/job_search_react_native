import React from 'react'
import {View, Text, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native'

import styles from './nearbyjobs.style'
import {useRouter} from "expo-router";
import {COLORS, SIZES} from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import UseFetch from '../../../hook/useFetch';

const NearbyJobs = () => {
    const router = useRouter();
    const {data, isLoading, error} = UseFetch(
        'search', {
            query : 'React Developer',
            num_pages : 1
        }
    );
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Nearby Jobs</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>Sell All</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size="small" color={COLORS.primary}/>
                ) : error? (
                    <Text>Something went wrong</Text>
                ) :  data?.map((job)=> (
                    <NearbyJobCard
                        job={job}
                        key={`nearby-jobs-${job?.job_id}`}
                        handleNavigate={()=> router.push(`/job-details/${job.job_id}`)}
                    />
                ))}
            </View>
        </View>
    )
}

export default NearbyJobs;