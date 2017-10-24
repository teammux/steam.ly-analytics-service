# Steam.ly Analytics Service API

## Recommendation Interface

### Schema

<!-- #### Users
|Parameter         |Description                    |
|------------------|-------------------------------|
|user_id           |Integer                        |
|user_preferences  |String                         |

#### Games
|Parameter         |Description                    |
|------------------|-------------------------------|
|game_id           |Integer                        |
|title             |String                         |
|category          |String                         |
|number_of_clicks  |Integer												 | -->

#### Recommendations	
|Parameter         |Description                    |
|------------------|-------------------------------|
|id                |Integer, auto increment        |
|user_id           |Integer                        |
|game_id           |Integer                        |
|title             |String                         |
|category          |String                         |


TODO: Add recommendation_coefficient

#### Recommended User Game	
|Parameter         |Description                    |
|------------------|-------------------------------|
|id                |Integer, auto increment        |
|user_id           |Integer                        |
|game_id           |Integer                        |
|date              |date                           |

### /GET

#### /recommendations

Example: http://steam.ly/api/v1/recommendations

__Response:__

Options: { type: simple | full }


**simple:**
```
{
	game_id: 1
}
```

**full:**
```
{
	user_id: 1,
	game_id: 1,
	title: "Destiny 2",
	category: "FPS",
	recommendation: 8
}
```


## Metrics Interface

### Schema

<!-- #### Analytics
|Parameter         |Description                    |
|------------------|-------------------------------|
|user_id           |Integer                        |
|user_preferences  |String                         | -->

### /GET

#### /gamemetrics

Example: http://steam.ly/api/v1/gamemetrics

__Response:__

```
{
	game_id: 1,
	game_title: "Destiny 2",
	category: "FPS",
	rating: [8],
	clicks: 94123
}
```

#### /categorymetrics

Example: http://steam.ly/api/v1/categorymetrics

__Response:__	

```
{
	
}
```





