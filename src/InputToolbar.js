import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Platform,
} from 'react-native';

import Composer from './Composer';
import Send from './Send';
import ImagePicker from 'react-native-image-picker';


var options = {
    title: '选择照片',
    cancelButtonTitle: '取消',
    chooseFromLibraryButtonTitle: '打开相册',
    takePhotoButtonTitle: '打开相机',
    allowsEditing: true,

    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

export default class InputToolbar extends React.Component {
    renderActions() {
        if (this.props.renderActions) {
            return this.props.renderActions(this.props);
        }
        return null;
    }

    renderSend() {
        if (this.props.renderSend) {
            return this.props.renderSend(this.props);
        }
        return <Send {...this.props}/>;
    }

    renderComposer() {
        if (this.props.renderComposer) {
            return this.props.renderComposer(this.props);
        }

        return (
            <Composer
                {...this.props}
            />
        );
    }

    renderAccessory() {
        if (this.props.renderAccessory) {
            return (
                <View style={[styles.accessory, this.props.accessoryStyle]}>
                    {this.props.renderAccessory(this.props)}
                </View>
            );
        }
        return null;
    }

    selectPhoto = () => {
        if (Platform.OS == "android") {
            this.props.selectedImage();
            return;
        }
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }

            else {
                // You can display the image using either data...
                // const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
                //
                // // or a reference to the platform specific asset location
                // if (Platform.OS === 'ios') {
                //     const source = {uri: response.uri.replace('file://', ''), isStatic: true};
                // } else {
                //     const source = {uri: response.uri, isStatic: true};
                // }
                if (response.uri) {
                    this.props.selectedImage(response.uri);
                }

            }
        });
    };

    render() {
        return (
            <View style={[styles.container, this.props.containerStyle]}>
                <View style={[styles.primary, this.props.primaryStyle]}>
                    <TouchableOpacity onPress={this.selectPhoto}>
                        <Image
                            style={{height: 30, width: 30, marginLeft: 10, marginBottom: 7}}
                            source={require('./customer_service_camera.png')}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>

                    {this.renderActions()}
                    {this.renderComposer()}
                    {this.renderSend()}
                </View>
                {this.renderAccessory()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEEEEE',
    },
    primary: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    accessory: {
        height: 44,
    },
});

InputToolbar.defaultProps = {
    renderAccessory: null,
    renderActions: null,
    renderSend: null,
    renderComposer: null,
    containerStyle: {},
    primaryStyle: {},
    accessoryStyle: {},
};

InputToolbar.propTypes = {
    renderAccessory: React.PropTypes.func,
    renderActions: React.PropTypes.func,
    renderSend: React.PropTypes.func,
    renderComposer: React.PropTypes.func,
    containerStyle: View.propTypes.style,
    primaryStyle: View.propTypes.style,
    accessoryStyle: View.propTypes.style,
};
