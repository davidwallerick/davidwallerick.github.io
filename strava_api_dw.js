const auth_link = "https://www.strava.com/oauth/token"

function getDwActivites(res){
    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
    fetch(activities_link)
        .then((res) => console.log(res.json()))
}

function getDwAthleteStats(res){
    const athlete_link = `https://www.strava.com/api/v3/athletes/2833223/stats?access_token=${res.access_token}`
    fetch(athlete_link)
        .then((res) => console.log(res.json()))
}

function getActivities(){
    fetch(auth_link,{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({

            client_id: '54764',
            client_secret: '22d1a513f751ff03576d09a577de2d44d7eda7ab',
            refresh_token: 'f015b1151d5bc8b46971c65b904e26433961461c',
            grant_type: 'refresh_token'
        })
    }).then(res => res.json())
    .then(res => {
        getDwActivites(res);

        }
        )   
}

function getAthleteStats(){
    fetch(auth_link,{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({

            client_id: '54764',
            client_secret: '22d1a513f751ff03576d09a577de2d44d7eda7ab',
            refresh_token: 'f015b1151d5bc8b46971c65b904e26433961461c',
            grant_type: 'refresh_token'
        })
    }).then(res => res.json())
    .then(res => {
        getDwAthleteStats(res);

        }
        )   
}

getActivities();
getAthleteStats();

//        window.open("https://www.strava.com/activities/7832612942",  '_blank');
