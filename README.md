## Opis
Aplikacja typu Single Page Application, z wykorzystaniem API (C#/.NET 5). Do stworzenia wykorzystałem angular'a, dokładnie Material Angular oraz JSON Web Token do podstawowego zabezpieczenia. Frontend nie jest idealny, ponieważ mam w tym temacie bardzo podstawową wiedzę (HTML, CSS, JS/TS).

## Uruchomienie
- w pliku appsettings.json ustaw connection string, dla swojej bazy, która powninna stworzyć się automatycznie przy uruchomieniu poprzez ```dbContext.Database.Migrate()``` w ```Startup```
- przejdź z poziomu konsoli do folderu ...client/Reminder, uruchom polecenie ``` npm install```
- uruchom API, jako aplikację konsolową, oraz aplikację angulara za pomocą ```ng serve```
- przejdź pod adres: ```localhost:4200```
