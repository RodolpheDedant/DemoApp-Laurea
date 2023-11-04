import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Importez l'icône de votre choix depuis la bibliothèque d'icônes
import CustomButtons from '../../components/CustomButtons';
import { firebaseAuth } from '../../../firebase';



const randomUsers = ['xxxTentacionxxx', 'Beyoncé', 'Barack Obama', 'Emma Tahbl', 'John Doe', 'Alice Smith', 'David Johnson', 'Emily Brown', 'Michael Lee', 'Olivia Wilson', 'William Davis', 'Sophia Garcia', 'James Martinez', 'Mia Rodriguez', 'Benjamin Gonzalez', 'Isabella Perez', 'Joseph Lopez', 'Charlotte Hernandez', 'Daniel Flores', 'Abigail Clark', 'Christopher Turner', 'Madison Baker', 'Matthew Hall', 'Grace Green', 'Andrew White', 'Harper Adams', 'Alexander King', 'Victoria Lewis', 'Samuel Scott', 'Lily Moore'];

const getRandomUsername = () => {
    const randomIndex = Math.floor(Math.random() * randomUsers.length);
    return randomUsers[randomIndex];
};

const tweets = [
    { id: '1', username: 'Michel Sardou', tweet: 'Hello everyone, Im french' },
    { id: '2', username: 'Le marseillais', tweet: 'Too bad, my shampoo doesnt work, do you have an idea ?' },
    { id: '3', username: 'Emmanuel', tweet: 'Oh ! I have a daughter' },
    // Ajoutez davantage de tweets ici
];

const HomeScreen = () => {
    const [tweetText, setTweetText] = useState('');
    const [tweetList, setTweetList] = useState(tweets);

    const handleTweet = () => {
        if (tweetText.trim() !== '') {
            const newTweet = {
                id: String(Date.now()),
                username: getRandomUsername(),
                tweet: tweetText,
            };
            setTweetList([newTweet, ...tweetList]);
            setTweetText('');
        }
    };

    const toggleLike = (tweetId) => {
        const updatedTweets = tweetList.map((tweet) => {
            if (tweet.id === tweetId) {
                return { ...tweet, isLiked: !tweet.isLiked };
            }
            return tweet;
        });
        setTweetList(updatedTweets);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ padding: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, marginBottom: 10 }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 10 }}>Exaderma</Text>
                </View>
                <TextInput
                    placeholder="Say what you want"
                    style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        marginBottom: 10,
                        paddingLeft: 5,
                        borderRadius: 10,
                    }}
                    value={tweetText}
                    onChangeText={(text) => setTweetText(text)}
                />
                <TouchableOpacity
                    style={{
                        backgroundColor: 'dodgerblue',
                        padding: 10,
                        borderRadius: 5,
                        alignItems: 'center',
                        marginBottom: 10,
                    }}
                    onPress={handleTweet}
                >
                    <Text style={{ color: 'white' }}>Tweet</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={tweetList}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                    <View style={{ borderColor: '#F9FBFC', marginBottom: 10, overflow: 'hidden' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 10 }}>{item.username}</Text>
                        </View>
                        <Text style={{ padding: 10, fontSize: 16 }}>{item.tweet}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
                            <TouchableOpacity>
                                <MaterialIcons
                                    name="comment"
                                    size={20}
                                    color="black"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => toggleLike(item.id)}>
                                <MaterialIcons
                                    name={item.isLiked ? "favorite" : "favorite-border"}
                                    size={20}
                                    color={item.isLiked ? "red" : "black"}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <MaterialIcons
                                    name="send"
                                    size={20}
                                    color="black"
                                />
                            </TouchableOpacity>
                        </View>
                        {index !== tweetList.length - 1 && <View style={{ borderBottomWidth: 1, borderColor: 'lightgray' }} />}
                    </View>
                )}
            />
        </View>
    );
};
const notifications = [
    { id: '1', message: 'Michel sardou has tweeted' },
    { id: '2', message: 'Le marseillais has tweeted' },
    { id: '3', message: 'Emmanuel has tweeted' },
    // Ajoutez davantage de notifications ici
];

const NotificationsScreen = () => {
    const renderNotification = ({ item }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
            <Text>{item.message}</Text>
            <View style={{ width: 10, height: 10, backgroundColor: 'red', borderRadius: 5 }} />
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', padding: 10, marginTop: 20 }}>Notifications</Text>
            <FlatList
                data={notifications}
                keyExtractor={(item) => item.id}
                renderItem={renderNotification}
            />
        </View>
    );
};

const Settings = () => {
    const signOut = () => {
        firebaseAuth.signOut()
    }
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <View style={{ flex: 1 }}>
                {/* Contenu des paramètres */}
                <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Settings</Text>
                {/* Ajoutez d'autres éléments de configuration ici */}

            </View>
            <View style={{ marginBottom: 20 }}>
                <TouchableOpacity
                    onPress={signOut}
                    style={{
                        backgroundColor: 'red',
                        padding: 10,
                        borderRadius: 5,
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ color: 'white' }}>Sign out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const App = () => {
    const [activeScreen, setActiveScreen] = useState('Home');

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                {activeScreen === 'Home' && <HomeScreen />}
                {activeScreen === 'Notifications' && <NotificationsScreen />}
                {activeScreen === 'Settings' && <Settings />}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
                <TouchableOpacity onPress={() => setActiveScreen('Home')}>
                    <View style={{ alignItems: 'center' }}>
                        <MaterialIcons
                            name="home"
                            size={30}
                            color={activeScreen === 'Home' ? 'blue' : 'black'}
                            style={{ marginBottom: 5 }}
                        />
                        {/* <Text style={{ color: activeScreen === 'Home' ? 'blue' : 'black', marginBottom: 5 }}>Accueil</Text> */}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveScreen('Notifications')}>
                    <View style={{ alignItems: 'center' }}>
                        <MaterialIcons
                            name="notifications"
                            size={30}
                            color={activeScreen === 'Notifications' ? 'blue' : 'black'}
                            style={{ marginBottom: 5 }}
                        />
                        {/* <Text style={{ color: activeScreen === 'Notifications' ? 'blue' : 'black', marginBottom: 5 }}>Notifications</Text> */}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveScreen('Settings')}>
                    <View style={{ alignItems: 'center' }}>
                        <MaterialIcons
                            name="settings"
                            size={30}
                            color={activeScreen === 'Settings' ? 'blue' : 'black'}
                            style={{ marginBottom: 5 }}
                        />
                        {/* <Text style={{ color: activeScreen === 'Settings' ? 'blue' : 'black', marginBottom: 5 }}>Paramètres</Text> */}
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default App;
