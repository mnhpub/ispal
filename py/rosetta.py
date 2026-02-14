# === Core Data Patterns Rosetta (Py) ===

# iteration + access
[c["name"] for c in characters]
for i in range(len(characters) - 1, -1, -1): characters[i]

# map / filter / reduce (manual + native)
def my_map(lst, fn): return [fn(x, i) for i, x in enumerate(lst)]
def my_filter(lst, fn): return [x for i, x in enumerate(lst) if fn(x, i)]
def my_reduce(lst, fn, acc):
    for i, x in enumerate(lst): acc = fn(acc, x, i)
    return acc

# transform
names = [c["name"] for c in characters]
chaotic = [c for c in characters if c["chaos"] > 5]
total_chaos = sum(c["chaos"] for c in characters)

# non-mutation update (shallow)
def add_friend(c, f):
    return {**c, "friends": [*c["friends"], f]}

# search
next((c for c in characters if c["name"] == "Daffy Duck"), None)
next((i for i,c in enumerate(characters) if c["chaos"] >= 10), -1)

# sorting + slicing
top3 = sorted(characters, key=lambda c: c["chaos"], reverse=True)[:3]

# nested traversal / flatten one level
episodes = [
    {**e, "who": c["name"]}
    for c in characters for e in c["episodes"]
]

# flatten (recursive)
def flatten(x):
    return [y for i in x for y in (flatten(i) if isinstance(i,list) else [i])]

# sets + dicts
unique_friends = {f for c in characters for f in c["friends"]}
species_map = {c["name"]: c["species"] for c in characters}

# indexing for O(1) lookup
episode_index = {
    e["title"]: e
    for c in characters for e in c["episodes"]
}

# safe access
likes = characters[0].get("episodes",[{}])[0].get("likes", 0)

# recursion over unknown shape
def upper(x):
    if isinstance(x,str): return x.upper()
    if isinstance(x,list): return [upper(v) for v in x]
    if isinstance(x,dict): return {k:upper(v) for k,v in x.items()}
    return x

# generators (lazy)
def chaos_levels():
    for c in characters: yield c["chaos"]

# async iteration (sketch)
import asyncio
async def episode_titles():
    for c in characters:
        for e in c["episodes"]:
            await asyncio.sleep(0)
            yield e["title"]
