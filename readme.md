Consegna :

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

SOLUZIONE :

- Creiamo un bottone nel file HTML
- Recuperiamo l'evento del bottone nello script js
- Impostiamo nell'event listener l'evento del bottone 
- Produciano una griglia html 
- Creiamo una funzione per la creazione delle celle 
- Utilizziamo un ciclo for per gestile la creazione delle celle con una variabile a definire la dimensione massima 
- Numeriamo le celle da 1 a 100 man mano che vengono create nel ciclo;
- Aggiugniamo l'evento del click
- Al click la cella deve cambiare colore
- Al click della cella, oltre a cambiare colore dobbiamo mostrare in console il numero della cella

PARTE DUE : 
PROBLEMA :

opiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
