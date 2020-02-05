import React, { Component } from "react";
export default class Test extends Component {
    componentDidMount() {
        //to get open weather API
        let apiURI = 'http://localhost:5000/api/GroupType';
        this.getTest(apiURI);
      }


      getTest(apiURI) {
        fetch(apiURI, { method: "GET" })
          .then(function(resp) {
            return resp.json();
          }) // Convert data to json
          .then(data => {
            console.log(data)
          })
          .catch(function() {
            var error = "error happened";
            // catch any errors
           console.log('error happened while test')
          });
      }

      render() {
        return(
            <div>
                test
            </div>
        )
      }
      
}