## Pivot Table Challenge

Using data found at [chart2000.com](https://chart2000.com/about.htm) create an webpage capable of returning the data in a table format of

| Artist | Song | Position Overall |
|--------|------|------------------|
| Ed Sheeran| Thinking Out Loud | 9 |

The user can apply filters:

Specify a country to modify the _Position Overall_ to _Position by Country_, i.e

| Artist | Song | Position in Denmark |
|--------|------|----------------|
| Ed Sheeran| Thinking Out Loud | 6 |

Specify an Artist

| Artist | Total Number of Songs |
|--------|-----------------------|
| Ed Sheeran | 5 |

User can click on any header to sort by that column of data.

### Extensions

Take more data from the chart2000 site and implement:
- a date range filter
- An aggregate for months/years
- limit the table to 20 rows and have pages
- option to view albums rather than songs

## Plan

Start by creating an API through which the front end can access data. 

### API Routes

| Route | Returns |
|-------|---------|
| /songs | default data format (Artist \| Song \| Position) |
| /songs/:country: | return position on charts of specified country |
| /songs/:artist: | return number of songs by specified artist |

The API will have a single table containing data on the top 200 songs from the last decade. 


### Web Page

Single Page web app displaying a table of all songs in the 'songs' table. Headers can be clicked to sort by that column, click an artist to see aggregate data on them.