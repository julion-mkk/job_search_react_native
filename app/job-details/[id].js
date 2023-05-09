import {View, Text, SafeAreaView, ScrollView, RefreshControl, ActivityIndicator} from "react-native";
import {Stack, useRouter, useSearchParams} from "expo-router";
import UseFetch from "../../hook/useFetch";
import {COLORS, icons, SIZES} from "../../constants";
import {Company, JobTabs, ScreenHeaderBtn} from "../../components";
import {useState} from "react";

const JobDetails = ()=> {
    const params = useSearchParams();
    const router = useRouter();
    const [refreshing, setRefreshing] = useState(false);
    console.log('asdfasdf');
    console.log(params.id);
    const { data, isLoading, error, refetch} = UseFetch('job-details', {
        'job_id' : params.id
    });
    console.log(error);
    console.log(data);
    const onRefresh = ()=> {}
    return(
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: ()=> (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension='60%'
                            handlePress={()=> router.back()}/>
                    ),
                    headerRight: ()=> (
                        <ScreenHeaderBtn
                            iconUrl={icons.share}
                            dimension='60%'/>
                    ),
                    //headerTitle : ''
            }}/>
            <>
                <ScrollView showsVerticalScrollIndicator={false} refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                }>
                    {isLoading? (
                        <ActivityIndicator size="large" color={COLORS.primary} />
                    ) : error? (
                        <Text>Something went wrong!</Text>
                    ) : data.length===0? (
                        <Text style={{color: 'black'}}>No Data</Text>
                    ) : (
                        <View style={{padding: SIZES.medium, paddingBottom: 100}}>
                            <Company
                                companyLogo = {data[0].employer_logo}
                                companyName = {data[0].employer_name}
                                jobTitle = {data[0].job_title}
                                location = {data[0].job_country}
                            />
                            <JobTabs />

                        </View>
                    )}
                </ScrollView>
            </>
        </SafeAreaView>
    );
}

export default JobDetails;

