# py

from box import Box

data = Box.from_json(filename="data.json")
print(data.characters[0].name)
