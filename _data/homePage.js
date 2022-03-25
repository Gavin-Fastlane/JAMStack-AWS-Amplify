const client = require("../_server/client");
const gql = require("graphql-tag");
async function fetchUserData(username) {
    // do some async things
    let res = await client.query({
        query: gql`
            allIndexs{
              edges{
                node{
                  page_title
                  page_description
                  
                  body{
                    __typename
                    ...on IndexBodyIndex_banner {
                      type
                          primary {
                        banner_title
                        banner_description
                        banner_link {
                          _linkType
                        }
                        banner_btn_text
                        banner_image
                      }
                      label
                      fields{
                        index_repeat_slice
                      }
                        }
                  }
                  _meta{
                    id
                    uid
                    type
                  }
                }
              }
            }
        `
      })
    console.log("res===",res)
    return username;
  }
  
  module.exports = async function() {
    let user1 = await fetchUserData("user1");
  
    return {
        user1: "gggggg"
    };
  };