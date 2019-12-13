# Ruby Basics

# To output to the terminal like 'console.log'
# use print
print("Hello, World")
# print doesn't add a new line (i.e. \n)

# There's puts
puts("Hello from puts")
# Adds a new line like 'console.log'

# And there's `p`
p("I'm printing with p")
# Prints a value how ruby sees it. Useful for debugging. Also returns the value
# passed to p().
# Similar to `console.dir`

# Bracket syntax for method arguments is optional
# For example we can also do this:
print "Hello World"

# Comments in ruby

# This is a comment in ruby

=begin
  I'm a multiline
  comment
  hello
=end

# Most people will
# just write multiline
# comments like this.

print "hello world" # Inline comments work also


# To execute a ruby file, use the `ruby` command with the file
# path as an argument. Ex:
# ruby demo.rb

# Variables

# Creating variables does not require a keyword

a = 1
b = a * 10

a1 = 10


# 1a = 12 # this will give us an error

# Ruby convention for vairbale naming is snake_case
first_name = "Brett"

# If you start a variable name with a capital, it's considered a constant
# Constants in Ruby can be changed, but Ruby will give you a warning
# Convention is to use ALL_CAPS for naming constants
MAX_PASSWORD_ATTEMPTS = 5

# Receiving user input

# print 'What is your name?'
# name = gets
# puts 'Hello ' + name + 'You are great!'

print 'What is your first name?'
# chomp is a string method that removes the last new line character at the end
# of a string
# first_name = gets.chomp
# print 'What is your last name'
# last_name = gets.chomp
# puts 'Hello ' + first_name + last_name


# Everythign is an object (has a class)
# To know the 'type' of value, use the .class method
1.class # => Integer
3.14.class # => Float
"My String".class # => String


# Strings
"I'm a string"
'I\'m also a string'

# You can use String interpolation only with double quotes.
# Strings defined with single quotes are considered literal strings

# Use #{ expression } inside a string to interpolate a Ruby
# expression
"#{1 + 10} is not equal to #{8 + 8}"
# => "11 is not equal to 16"
'#{1 + 10} is not equal to #{8 + 8}'
# => "\#{1 + 10} is not equal to \#{8 + 8}"

name = 'Brett'
puts "Hello #{name}"


puts "What is your name?"
name = gets.chomp
puts name.capitalize
puts name.upcase
puts name.downcase
puts name.swapcase
puts("Name reversed: #{name.reverse}")


# To remove duplicate neighbouring characters in a string use
# .squeeze
"Hellllllllllooooooo mmmmmmmyyyy naammmme is Brett".squeeze

# To search and replace a part of a string use
#  .sub or .gsub:

str = "Nmy name is Joe and your name is Bob"
# => "Nmy name is Joe and your name is Bob"
str.sub("name", "title")
# => "Nmy title is Joe and your name is Bob"
str.gsub("name", "title")
# => "Nmy title is Joe and your title is Bob"


# Number

1
10
100
100_300 # `_` are ignored in numbers
100_000_000_300

# to_i/to_f
5 / 3
# => 1
5.0 / 3
# => 1.6666666666666667
5.to_f / 3.to_f
# => 1.6666666666666667

# Operations
1 + 1
1 - 1
1 / 1
1 * 1
1 % 1
1 ** 1

# modulo
3 % 2
# => 1
2 % 2
# => 0

a = 5
b = a ** 3


(1 > 4) || (8 > 4)
# => true
(1 > 5) && (6 > 4)
# => false
!(1 > 5) && (6 > 4)

# IF, ELSE, AND FRIENDS

if true
  # my if's block
  puts "When condition is true"
end # we terminate code blocks with `end`

if false
  puts "When condition is false"
else
  puts "The default condition with else"
end


# Inline conditionals
 # You can do single line conditionals, just write the `if` at the
# end of the line

puts "It's true" if true

 temp = 10
 if temp < 10
   puts "It's cold"
 end
  # The above is equivalent to:
  puts "It's cold"  if temp < 10
# Also effectively the same as:
  puts 'It is cold' unless temp >= 10
# Or
  unless temp >= 10
    puts "It's cold"
  end

# Loops
x = 1
while x <= 100
  puts x
  x += 1
end

print "How many times should I repeat?"
number = gets.to_i

i = 0
while i < number
   puts "Hello World"
   i += 1
   # You can use the keyword `break` to stop any loop early
   break if i > 100
end

# loop do
x = 1
loop do
  puts x
  x += 1
  break if x == 12
end


#  for loop

for number in 1..100
  puts number
end

for number in 1...100
  puts number
end

num_times = gets.chomp.to_i

for number in 1..num_times
  puts number
end
