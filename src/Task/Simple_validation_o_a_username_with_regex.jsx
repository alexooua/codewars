import React from "react";

class Simple_validation_o_a_username_with_regex extends React.Component {


    render = () => {
        return (
            <div className="todoList-footer">
                <h1>Simple_validation_o_a_username_with_regex</h1>
                <text>JWrite a simple regex to validate a username. Allowed characters are:

                    lowercase letters,
                    numbers,
                    underscore
                    Length should be between 4 and 16 characters (both included).
                </text>
                <h3>Answer</h3>

                    <pre>
                   {` function validateUsr(username) {
                        let elem ;
                        if (username.search(/[^a-z0-9_]/) !== -1) {
                        elem = false;
                    } else {
                        elem =true;
                    }
                        res =elem && username.length>=4 && username.length<=16?true:false;
                        return res
                    }`}
                </pre>
                <h3>Best answer</h3>

                <pre>
                   {` #1   function validateUsr(username) {
  return /^[0-9a-z_]{4,16}$/.test(username)----
---- #2   const validateUsr = username => /^[a-z\\d_]{4,16}$/.test(username);-----

}`}
                </pre>
            </div>
        );
    }
}

export default Simple_validation_o_a_username_with_regex;
