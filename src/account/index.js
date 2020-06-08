import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native"
import { useHistory } from "react-router-dom";

//import all builder x files related to this directory

import Cancelation from "./Cancelation";
import Confirmed from "./Confirmed";
import EditeProfile from "./EditeProfile";
import EditMyKashrut from "./EditMyKashrut";
import GuestCardInfo from "./GuestCardInfo";
import HoldACharge from "./HoldACharge";
import MyProfile from "./MyProfile";
import MyStaysList from "./MyStaysList";
import NewRequest from "./NewRequest";
import Previous from "./Previous";
import Trips from "./Trips";
import StayProfile from "./StayProfile";
import BookStay from "./BookStay";
import PreBookingProfile from "./PreBookingProfile";
import CheckIn from "./CheckIn";

const components = {
    cancelation: Cancelation,
    confirmed: Confirmed,
    editeProfile: EditeProfile,
    editMyKashrut: EditMyKashrut,
    guestCardInfo: GuestCardInfo,
    holdACharge: HoldACharge,
    myProfile: MyProfile,
    myStayList: MyStaysList,
    newRequest: NewRequest,
    previous: Previous,
    trips: Trips,
    stayProfile: StayProfile,
    bookStay: BookStay,
    preBookingProfile: PreBookingProfile,
    checkIn: CheckIn,
};

export default function Index(props) {
    const [render, rerender] = useState(0);
    const [backHistory, addBackHistory] = useState([])
    const [historyIndex, setHistoryIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState("");

    //this send user to route if they want to create a stay
    let history = useHistory();

    //add the import as a string to this array
    //the array should be in the order that the screens show up


    //user finished create a stay
    function onHome() {
        history.push("/home");
    };

    useEffect(() => {
        let newBackHistory = [...backHistory];
        newBackHistory[historyIndex] = props.location.state.subroute;
        addBackHistory(newBackHistory);
    }, []);

    const onUserPress = (page) => {
        setCurrentPage(page);
        let newBackHistory = [...backHistory];
        newBackHistory[historyIndex + 1] = page;
        addBackHistory(newBackHistory);
        setHistoryIndex(historyIndex + 1)
    }

    const onBack = () => {
        if (historyIndex - 1 < 0) {
            const currentSearch = props.location.state.currentSearch;
            if (currentSearch) {
                history.push("/home", { currentSearch: currentSearch })
            } else onHome();
        } else {
            setCurrentPage(backHistory[historyIndex - 1]);
            setHistoryIndex(historyIndex - 1);
        }
    }

    const CurrentComponentRouter = () => {

        if (!components[props.location.state.subroute]) return <View />
        const CurrentComponent = components[currentPage || props.location.state.subroute];
        return (<CurrentComponent
            style={styles.componentStyle}
            //if builder x component has next button
            //it's button should have onPress={()=>{props.onNext}}


            //if builder x component has back button
            //it's button should have onPress={()=>{props.onNext}}
            onBack={() => {
                onBack();
            }}

            goHome={() => {
                onHome();
            }}

            onUserPress={(page) => onUserPress(page)}
        />)
    }

    return (
        <View style={styles.container}>
            {//dynamic component
                <CurrentComponentRouter />
            }
        </View>
    );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        width: windowWidth,
        height: windowHeight
    }
});