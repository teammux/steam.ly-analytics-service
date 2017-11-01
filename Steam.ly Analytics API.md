# Steam.ly Analytics Service API

## Recommendation Interface

### Schema

#### Recommendations

|Parameter         |Description                    |
|------------------|-------------------------------|
|id                |Integer, auto increment        |
|user_id           |Integer                        |
|game_id           |Integer                        |
|title             |String                         |
|preference        |String                         |

TODO: Add recommendation_coefficient

### /GET

#### /recommendations

Example: http://steam.ly/api/v1/recommendations

__Response:__

```
{
  id: 1,
  user_id: 1,
  game_id: 1,
  title: "Counter-Strike: Global Offensive",
  preference: "FPS"
}
```


## Metrics Interface

### Schema

#### Game Metrics

|Parameter            |Description                    |
|---------------------|-------------------------------|
|id                   |Integer                        |
|game_id              |Integer                        |
|title                |String                         |
|average_user_rating  |Integer                        |
|total_clicks         |Integer                        |

### /GET

#### /gamemetrics

Example: http://steam.ly/api/v1/gamemetrics

__Response:__

```
{
  id: 1,
  game_id: 1,
  title: "Destiny 2",
  average_user_rating: 8,
  clicks: 5343421
}
```




