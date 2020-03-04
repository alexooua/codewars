import React from "react";

class JadenCasingStrings extends React.Component {


    render = () => {
        return (
            <div className="todoList-footer">
                <h1>Jaden Casing Strings</h1>
                <text>Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After
                    Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When
                    writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll
                    have to capitalize each word, check out how contractions are expected to be in the example below.

                    Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual
                    quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

                    Example:

                    Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
                    Jaden-Cased: "How Can Mirrors Be Real If Our Eyes Aren't Real"
                </text>
                <code>
                    <pre>
                    let str = "How can mirrors be real if our eyes aren't real.";

                    let target = " "; // цель поиска

                    let e = str.split(target).map(x =>x.replace(x[0],x[0].toUpperCase())).join(' ');


                    console.log(e);
                </pre>
                </code>
            </div>
        );
    }
}

export default JadenCasingStrings;

let str = "How can mirrors be real if our eyes aren't real.";

let target = " "; // цель поиска

let e = str.split(target).map(x => x.replace(x[0], x[0].toUpperCase())).join(' ');


console.log(e);