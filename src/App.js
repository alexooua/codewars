import React from 'react';
import './App.css';
import Simple_validation_o_a_username_with_regex from "./Task/Simple_validation_o_a_username_with_regex";
import JadenCasingStrings from "./Task/JadenCasingStrings";
import index_of_an_element_in_an_array from "./Task/index_of_an_element_in_an_array";

class App extends React.Component {
    render = () => {
        function sabb(s, val, happiness) {
            // s=s.toLowerCase()
            const newNum = Array.prototype.map.call("Sabticl", eachLetter => {
                let count = s.length;
                let res = 0;
                for (let i = 0; i < count; i++) {
                    if (s.charAt(i) === eachLetter) {
                        res++
                    }
                }
                return res;
            })
            let nun = newNum.reduce(function (previousValue, currentValue) {
                return previousValue + currentValue;
            });
            console.log(nun, val, happiness)
            return nun + val + happiness > 21 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'

        }

        console.log(sabb("uaajcaslja wlboxuwl", 7, 5), 'Back to your desk, boy.')//
        console.log(sabb("xutvbpakzpinltsssrtas iwapb", 4, 3), 'Back to your desk, boy.')

        console.log(sabb("agisvcwsz pabgluipnb  tsbhi", 2, 8), 'Sabbatical! Boom!')
        let str = "agisvcwsz pabgluipnb  tsbhi"

        function count_char(str) {
            let count = str.length;
            var res = 0;
            for (let i = 0; i < count; i++) {
                if (str.charAt(i) === "a") {
                    res++
                }

            }
            return res;
        }
        console.log(count_char(str))
        return (
            <div className="App">
                <div className="todoList">
                    <Simple_validation_o_a_username_with_regex />
                    <index_of_an_element_in_an_array />
                    <JadenCasingStrings/>
                </div>
            </div>
        );
    }
}


export default App;
