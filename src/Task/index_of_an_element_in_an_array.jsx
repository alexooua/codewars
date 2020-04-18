import React from "react";

class index_of_an_element_in_an_array  extends React.Component {


    render = () => {
        return (
            <div className="todoList-footer">
                <h1>Be_Concise_IV - Index_of_an_element_in_an_array </h1>
                <text>Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. You may assume that all array elements are unique.
                </text>
                <h3>Answer</h3>

                    <pre>
                    {`let str = "How can mirrors be real if our eyes aren't real.";

                    let target = " "; // цель поиска


                    let e = str.split(target).map(x =>x.replace(x[0],x[0].toUpperCase())).join(' ');


                    console.log(e);`}
                </pre>
                <h3>Best answer</h3>
                <pre>
                   {`String.prototype.toJadenCase = function () {
                    return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
                };`}
                </pre>
            </div>
        );
    }
}

export default index_of_an_element_in_an_array ;

