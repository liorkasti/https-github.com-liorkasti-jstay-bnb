import React, { useState, useEffect } from "react";
import { View } from "react-native"
import { useHistory } from "react-router-dom";

//import all builder x files related to this directory
import ComingSoon from "../modules/comingSoon";

export default function Index(props) {
    const [componentIndex, setComponentIndex] = useState(0);
    
    //this send user to route if they want to create a stay
    let history = useHistory();
    //user finished create a stay
    function done() {
        history.push("/home");
    }

    //add the import as a string to this array 
    //the array should be in the order that the screens show up
    const componentKeys = ["ComingSoon"];

    return (
        <View>
            {/* copy paste below component*/}
            
            {
                //replace this string with the string 
                //in componentKeys related to this import
                
                componentKeys[omponentIndex] === "ComingSoon"
                &&
                //change component name to the new import 
                <ComingSoon /*coming soon requires */ comingSoonPath="createStay"
                    
                    //if builder x component has next button
                    //it's button should have onPress={()=>{props.onNext}}
                    onNext={() => { 
                        setComponentIndex(componentIndex + 1)
                    }}
                    
                    //if builder x component has back button
                    //it's button should have onPress={()=>{props.onNext}}
                    onBack={() => {
                        setComponentIndex(componentIndex - 1)
                    }}

                    //sends user to home
                    onExitBack={()=>{
                        done();
                    }}

                    //if builder x component has skip button
                    //it's button should have onPress={()=>{props.onNext}}
                    onSkip={() => {
                        setComponentIndex(componentIndex + 1)
                    }}
                />
            }
        </View>
    );
}