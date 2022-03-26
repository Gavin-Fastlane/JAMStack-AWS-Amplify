const ApolloClient = require("../_server/client");
const gql = require("graphql-tag");
async function fetchHomePageData() {
    // do some async things
    const client = await ApolloClient()
    let res = await client.query({
        query: gql`{
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
          }`
      })
   
    return res.data;
  }
  
  module.exports = async function() {
    let res = await fetchHomePageData();
    let homePageData = res.allIndexs.edges[0].node
    let homePagePrimary = homePageData.body[0].primary
    let homePageFields = homePageData.body[0].fields
    let homePage = Object.assign({},{
      page_title: homePageData.page_title[0].text,
      page_description: homePageData.page_description[0].text,
      body: Object.assign({},{
        banner_title: homePagePrimary.banner_title[0].text,
        banner_description: homePagePrimary.banner_description[0].text,
        banner_btn_text: homePagePrimary.banner_btn_text[0].text,
        banner_image: homePagePrimary.banner_image.url,
        repeat_contents: homePageFields.map((field) => {
          return Object.assign({},{
            text: field.index_repeat_slice[0].text
          })
        })
      })
    })
    console.log("res===",homePage)
    return homePage;
  };