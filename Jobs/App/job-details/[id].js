import { useCallback, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import {
  Stack,
  useRouter,
  useGlobalSearchParams,
  useLocalSearchParams,
} from "expo-router";
import {
  Company,
  JobAbout,
  JobFooter,
  Specifics,
  JobTabs,
  ScreenHeaderBtn,
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";
const tabs = ["About", "Qualification", "Responsibilities"];
const JobDetail = () => {
  const params = useLocalSearchParams();
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const router = useRouter();
  const { data, isLoading, error, refetch } = useFetch();
  const onRefresh = () => {};
  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualification":
        const highLight =
          data[params.id].highLight == null
            ? ["No Data"]
            : data[params.id].highLight.split(";");
        return <Specifics title="Qualification" points={highLight} />;
      case "About":
        return <JobAbout info={data[params.id].description ?? "No Data"} />;
      case "Responsibilities":
        break;
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconURL={icons.left}
              dimension="60%"
              handelPress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconURL={icons.share} dimension="60%" />
          ),
          headerTitle: "Details",
        }}
      />
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>Some Went Wrong!</Text>
          ) : data.length === 0 ? (
            <Text>No Data</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company
                companyLogo={data[0].image}
                jobTitle={data[0].job_title}
                companyName={data[0].company_name}
                location={data[0].location}
              />
              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              {displayTabContent()}
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default JobDetail;
