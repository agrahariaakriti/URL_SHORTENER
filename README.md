````md
# URL Shortener

A full-stack URL shortening service that converts long URLs into short, shareable links with fast redirection and basic analytics.

## Tech Stack
- **Frontend:** React, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Other:** Nanoid (short codes), REST APIs, CORS  
- **Deployment:** Netlify (frontend), Render (backend)

## Features
- Generate unique short URLs from long links  
- Fast redirection using indexed MongoDB queries  
- Click tracking (visit count and timestamps)  
- Input validation and error handling  
- RESTful API architecture  
- Fully deployed full-stack app  

## Live Demo
- Frontend: **[Live Link]**  
- Backend API: **[API Link]**

## API Endpoints

### POST `/api/shorten`
Create short URL
```json
{ "longUrl": "https://example.com" }
````

### GET `/:code`

Redirect to original URL

### GET `/api/stats/:code`

Get click analytics for a short URL

## Installation (Local Setup)

```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
```

### Backend

```bash
cd server
npm install
npm run dev
```

Create `.env` in server folder:

```
PORT=5000
MONGO_URI=your_mongodb_uri
BASE_URL=http://localhost:5000
```

### Frontend

```bash
cd client
npm install
npm start
```

## Folder Structure

```
client/    → React frontend  
server/    → Express backend  
models/    → MongoDB schema  
routes/    → API routes  
```

## What This Project Demonstrates

* REST API design
* Database schema and indexing
* Full-stack deployment
* Backend architecture and validation
* Production setup (CORS, environment variables)

## Future Improvements

* Custom aliases
* Link expiration
* Rate limiting
* User authentication
* Redis caching

## Author

**Aakriti Agrahari**
LinkedIn: [LinkedIn Link]

```
```
