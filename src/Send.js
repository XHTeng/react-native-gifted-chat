import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default class Send extends React.Component {
    // shouldComponentUpdate(nextProps, nextState) {
    //   if (this.props.text.trim().length === 0 && nextProps.text.trim().length > 0 || this.props.text.trim().length > 0 && nextProps.text.trim().length === 0) {
    //     return true;
    //   }
    //   return false;
    // }
    render() {
        if (true) {
            return (
                <TouchableOpacity
                    style={[styles.container, this.props.containerStyle]}
                    onPress={() => {
                        this.props.onSend({text: this.props.text.trim()}, true);
                    }}
                >
                    <Text style={[styles.text, this.props.textStyle]}>{this.props.label}</Text>
                </TouchableOpacity>
            );
        }
        return <View/>;
    }
}

const styles = StyleSheet.create({
    container: {
        height: 30,
        justifyContent: 'flex-end',
        backgroundColor: '#fe4d40',
        marginBottom: 7,
        borderRadius: 6,
        marginRight: 10,
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 17,
        backgroundColor: 'transparent',
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
    },
});

Send.defaultProps = {
    text: '',
    onSend: () => {
    },
    label: '发送',
    containerStyle: {},
    textStyle: {},
};

Send.propTypes = {
    text: React.PropTypes.string,
    onSend: React.PropTypes.func,
    label: React.PropTypes.string,
    containerStyle: View.propTypes.style,
    textStyle: Text.propTypes.style,
};
