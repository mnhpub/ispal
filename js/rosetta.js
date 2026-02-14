// === Core Data Patterns Rosetta (JS) ===

// iteration + access
characters.forEach(c => c.name);
for (let i = characters.length - 1; i >= 0; i--) characters[i];

// map / filter / reduce (manual + native)
const map = (a,f)=>a.reduce((r,x,i)=>(r.push(f(x,i)),r),[]);
const filter = (a,f)=>a.reduce((r,x,i)=>(f(x,i)&&r.push(x),r),[]);
const reduce = (a,f,i)=>a.reduce(f,i);

// transform
const names = characters.map(c=>c.name);
const chaotic = characters.filter(c=>c.chaos>5);
const totalChaos = characters.reduce((s,c)=>s+c.chaos,0);

// non-mutation update (shallow)
const addFriend = (c,f)=>({...c,friends:[...c.friends,f]});

// search
characters.find(c=>c.name==="Daffy Duck");
characters.findIndex(c=>c.chaos>=10);

// sorting + slicing
[...characters].sort((a,b)=>b.chaos-a.chaos).slice(0,3);

// nested traversal
characters.flatMap(c=>c.episodes.map(e=>({...e,who:c.name})));

// flatten (recursive)
const flatten = a =>
  a.reduce((r,v)=>r.concat(Array.isArray(v)?flatten(v):v),[]);

// sets + maps
const uniqueFriends = new Set(characters.flatMap(c=>c.friends));
const speciesMap = new Map(characters.map(c=>[c.name,c.species]));

// indexing for O(1) lookup
const episodeIndex = characters.flatMap(c=>c.episodes)
  .reduce((m,e)=>(m[e.title]=e,m),{});

// safe access
characters[0]?.episodes?.[0]?.likes ?? 0;

// recursion over unknown shape
const upper = x =>
  typeof x==="string" ? x.toUpperCase() :
  Array.isArray(x) ? x.map(upper) :
  x && typeof x==="object"
    ? Object.fromEntries(Object.entries(x).map(([k,v])=>[k,upper(v)]))
    : x;

// generators (lazy)
function* chaosLevels(){
  for(const c of characters) yield c.chaos;
}

// async iteration (sketch)
async function* episodeTitles(){
  for(const c of characters)
    for(const e of c.episodes)
      yield await Promise.resolve(e.title);
}
