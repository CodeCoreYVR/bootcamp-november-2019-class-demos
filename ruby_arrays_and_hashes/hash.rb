# Hash

# A ruby hash is a set/dictionary of key value pairs...So, basically javascript objects

# defining a hash

h1 = Hash.new() # create an empty hash
h2 = {} # create an empty hash

me = {
  "name" => "brandon",
  "place" => "east van",
  "company" => "codecore",
  1 => "something"
}

# keys can be a string, integer, or symbol
# the hash rocket (=>) is used to assign a value to a key
# key value pairs within hashes are sperated by a comma

# select a value
# to select a value we use square bracket notation passing the key.
me["name"] # "brandon"
me[1] # "something"

# .keys
# will return an array of all the keys of an object
p me.keys

# .values
# will return an array of all the values of an object
p me.values

# iterating over an object

#.each
# easiest way to iterate over an object
me.each do |key, value|
  p "key is #{key}, value is #{value}"
end

# .each_value
me.each_value do |val|
  p val
end

# .each_key
me.each_key do |key|
  p key
end

# symbols
# symbols are like strings except they can not be mutated
"hello" << "hi" # "hellohi"
:hello << "hi" # :hello

school = {
  :name => "codecore",
  :place => "new west",
  :students => "awesome"
}

# new ruby syntax

school2 = {
  name: "codecore",
  "name" => "vcc",
  place: "new west",
  students: "awesome"
}

# getting a value from a hash
# we can only use square bracket notation
school2["name"] # "vcc"
school2[name:] # syntax error
school2[:name] # "codecore"

# adding key value to a hash

x = :abc
school2[:student_count] = 4000
school2[x] = 100
p school2[:abc] # 100