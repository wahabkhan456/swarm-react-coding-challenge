import { gql } from "@apollo/client"

export function getLaunchQuery(limit: number = 10, missionName:string, rocketName:string) {
    const query = gql`
    query {
        launchesPast(limit:${limit}, find:{mission_name: "${missionName}", rocket_name:"${rocketName}"}){
          mission_name
          launch_date_local
          launch_site {
            site_name_long
          }
          links {
            article_link
            video_link
          }
          rocket {
            rocket_name
          }
          ships {
            name
            home_port
            image
          }
        }
    }`
    return query
}