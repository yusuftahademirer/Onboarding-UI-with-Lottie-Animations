import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

export default function OnboardingScreen() {

    const navigation = useNavigation();

    const handleDone = () => {
        navigation.navigate("HomeScreen")
    }

    const doneButton = ({ ...props }) => {
        return(
            <TouchableOpacity style={styles.doneButtonView} onPress={handleDone}>
                <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
        )
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <Onboarding
                onDone={handleDone}
                onSkip={handleDone}
                DoneButtonComponent={doneButton}
                containerStyles={{ paddingHorizontal: 15 }}
                pages={[
                    {
                        backgroundColor: '#fff8e1',
                        image: (
                            <View>
                                <LottieView style={styles.lottieView}
                                    source={require('../assets/animations/boost.json')}
                                    autoPlay
                                    loop
                                />
                            </View>
                        ),
                        title: 'Boost Productivity',
                        subtitle: 'Subscribe this channel to boost your productivity level',
                    },
                    {
                        backgroundColor: '#d0e7ff',
                        image: (
                            <View>
                                <LottieView style={styles.lottieView}
                                    source={require('../assets/animations/work.json')}
                                    autoPlay
                                    loop
                                />
                            </View>
                        ),
                        title: 'Work Seamlessly',
                        subtitle: 'Get your work done seamlessly without interruption',
                    },
                    {
                        backgroundColor: '#d9d9d9',
                        image: (
                            <View>
                                <LottieView style={styles.lottieView}
                                    source={require('../assets/animations/achieve.json')}
                                    autoPlay
                                    loop
                                />
                            </View>
                        ),
                        title: 'Achieve Higher Goals',
                        subtitle: 'By boosting your productivity we help you to achieve higher goals',
                    },
                ]}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    lottieView: {
        height: width*0.9,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    doneButtonView: {
        paddingVertical: 20,
        paddingHorizontal: 25,
        backgroundColor: "#fff",
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100
    },
    doneButtonText: {
        fontSize: 16,
    }
});
