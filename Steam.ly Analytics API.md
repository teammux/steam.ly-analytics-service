# Steam.ly Analytics Service API

### Recommendation Interface

#### GET

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
	title: "Destiny 2",
	game_id: 1,
	category: "FPS",
	recommendation: 8 [score: 1 - 10 rating]
}
```


### Metrics Interface

#### GET

#### /gamemetrics

Example: http://steam.ly/api/v1/gamemetrics

__Response:__

```
{
	game_id: 1,
	game_title: "Destiny 2",
	category: "FPS",
	rating: 8,
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





