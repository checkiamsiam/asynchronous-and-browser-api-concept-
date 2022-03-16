//browser sara local or session storate kaj korbe na karon aida akta brower api aikhane sudhu note akare raksi ami
// local  storage holo always store hoye thkbe amn data 
// and session storage hono browser run hocce jotokkhon totokkhon thkbe browser bondo korle data remove hoye jabe

localStorage.getItem('key');
localStorage.setItem('key','value');


//sadharon data hole khubi sohoje access kora jay , set kora jay kintu 
//value jodi object hoy tbe take parse kore access kore then abr stringify kore set korte hoy 

const data = localStorage.getItem('something');
const unString = JSON.parse(data);
unString.name = 'siam';
const newData = JSON.stringify(unString);
localStorage.setItem('something' , newData);
