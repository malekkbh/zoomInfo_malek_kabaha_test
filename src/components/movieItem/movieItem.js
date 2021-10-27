import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View, Image, StyleSheet } from 'react-native';
import { KeyValueItem, MovieDetails } from '..';
import { globalStyle, Screens, sizes, strings } from '../../res';
import { useNavigation } from '@react-navigation/native';


const MovieItem = (props) => {

    const { data } = props; 
    const navigation = useNavigation() ; 

    let rating_AVG = () => {
        const sum = data?.ratings?.reduce((a, b) => a + b, 0);
        const avg = (sum / data?.ratings?.length)?.toFixed(1) || 0;
        return avg + '/10';
    }


    const params = {
        mainImage: {
            source: { uri: data?.posterurl },
            style: styles.mainImage,
        },
    }

    const onItemPress = () => {
        navigation.navigate(Screens.MovieScreen, { data: data })
    }

    return (
        <TouchableOpacity onPress={() => onItemPress()} activeOpacity={0.7} >
            <View style={styles.container} >
                <Image {...params.mainImage} />
                <MovieDetails data={data} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: sizes.PageWidth - 50,
        flexDirection: 'row',
        ...globalStyle.SHADOW,
        backgroundColor: '#ffff',
        paddingVertical: 5,
        marginVertical: 5,
    },
    mainImage: {
        height: 180,
        width: 140,
        resizeMode: 'contain',
    },
    detailesContainer: {
        width: '100%',
        marginTop: 10,
    }
})

export default MovieItem;