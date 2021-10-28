import React, { useEffect, useRef } from 'react';
import { Image, StyleSheet, Text, View, Animated } from 'react-native';
import imagesIndex from '../../assets/images/imagesIndex'
import { globalStyle, Screens, strings, urls } from '../../res';
import { getAllMovies } from '../../res/api/api';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
    return {

    };
}

const dispatchToProps = (dispatch) => {
    return {
        setMovies: (val) => dispatch({ type: 'setMovies', value: val }),
    };
}

const Splash = (props) => {

    const { navigation, setMovies } = props;

    const fadeAnim = useRef(new Animated.Value(1)).current;


    var loadingDataDone = false;
    var timerDone = false;

    const imageParams = {
        source: imagesIndex.splashImage(),
        style: styles.image
    }

    const getMoviesFromApi = async () => {
        await getAllMovies()
            .then(resJson => {
                setMovies(resJson);
                loadingDataDone = true;
            })
            .catch(err => console.log('error: ' ,err ));

        timerDone && navigateToHomePage();
    }

    const navigateToHomePage = () => {
        navigation.replace(Screens.MainScreen);
    }

    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 4000,
            useNativeDriver: true
        }).start();
    };

    useEffect(() => {
        fadeOut();
        getMoviesFromApi();
        setTimeout(() => {
            timerDone = true;
            loadingDataDone && navigateToHomePage()
        }, 2500);
    }, [])

    return (

        <View style={{ flex: 1, backgroundColor: 'black', }}>
            <Animated.View style={[styles.container, { opacity: fadeAnim }]} >
                <Image {...imageParams} />
                <Text style={styles.text}>{strings.splash_text}</Text>
            </Animated.View>
        </View >

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    image: {
        width: '60%',
        resizeMode: 'contain'
    },
    text: {
        ...globalStyle.Rubik_17,
        color: '#ffff',
        marginTop: 20,
    }
})

export default connect(mapStateToProps, dispatchToProps)(Splash);
