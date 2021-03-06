import React from 'react';
import {
    Platform,
    StyleSheet,
    TextInput,
    View
} from 'react-native';

export default class Composer extends React.Component {
    render() {
        return (
            <TextInput
                placeholder={this.props.placeholder}
                placeholderTextColor={this.props.placeholderTextColor}
                multiline={this.props.multiline}
                onChange={(e) => {
                    this.props.onChange(e);
                }}
                style={[styles.textInput, this.props.textInputStyle, {
                    height: this.props.composerHeight,
                }]}
                value={this.props.text}
                enablesReturnKeyAutomatically={true}
                underlineColorAndroid="transparent"
                {...this.props.textInputProps}
            >

            </TextInput>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        flex: 1,
        marginLeft: 10,
        marginRight: 13,
        fontSize: 16,
        lineHeight: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        borderColor: '#dddddd',
        borderWidth: 1,
        marginTop: Platform.select({
            ios: 6,
            android: 0,
        }),
        marginBottom: Platform.select({
            ios: 5,
            android: 3,
        }),
        paddingLeft: 10,
    },
});

Composer.defaultProps = {
    onChange: () => {
    },
    composerHeight: Platform.select({
        ios: 33,
        android: 41,
    }), // TODO SHARE with GiftedChat.js and tests
    text: '',
    placeholder: '',
    placeholderTextColor: '#b2b2b2',
    textInputProps: null,
    multiline: true,
    textInputStyle: {},
};

Composer.propTypes = {
    onChange: React.PropTypes.func,
    composerHeight: React.PropTypes.number,
    text: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    placeholderTextColor: React.PropTypes.string,
    textInputProps: React.PropTypes.object,
    multiline: React.PropTypes.bool,
    textInputStyle: TextInput.propTypes.style,
};
