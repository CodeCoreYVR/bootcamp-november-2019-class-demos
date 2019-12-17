# a = [15, "Hey", "Bye", [1,2,3]] # a Ruby array
# p a[0] # the `p` method is used to print a value to console
# p a[1]

# # arrays in ruby are indexed by integers starting from 0
# # we can use square bracket notation to select an element

# # multi-dimensional arrays
# # are arrays that have arrays as elements

# m = [[1,2,3], [4,5,6], [7,8,9]]

# # select number 5
# p m[1][1]

# adding stuff to arrays

b = [1,2,3]
b.push(4) # ruby has a array method `.push` that allows us to add elements to the end of an array
b.push 5 # we can omit parenthesis on method calls

# shovel operator 
b << 6 # another way to push something into an array

# p b

# # check if an array has an element
# # .include? method

# # b = [1,2,3,4,5,6]
# p b.include?(1) # returns true
# p b.include?("dont have this") # returns false

# method hunt

# get the lenght of an array
# arr = [1,2,3,4,5,6]
# p arr.length
# p arr.count
# p arr.size

# turn a multi-dimensional array to a single-dimensional array
marr = [[1,2,3], [4,5,6]]

# most objects in ruby are mutable
# very often methods with have 2 different variations
# 1) which will mutate the original value. These methods have the bang (!) appended to the method name
# 2) one that will not mutate the original value.
# p marr.flatten # does not change the original array
# p marr

# p marr.flatten! #does change the original array
# p marr

# methods to remove & add to the front of an array
a1 = [1,2,3]

# .shift() removes one from the beginning
# a1.shift 
# p a1
# # .unshift() adds one to the beginning
# a1.unshift 1
# p a1

# # turn a string into an array of elements
# string = "hello codecore students"
# word_array = string.split " "

# p word_array.join "*"

# swapping elements of an array
# a3 = [1,2,3]
# a4 = a3[1], a3[0], a3[2] # [2,1,3] 
# p a4

# iterate over arrays

# using for in loop
# results = []
# nums = [*1..100]

# for num in nums
#   str = ""
#   str << "FIZZ" if num % 3 == 0
#   str << "BUZZ" if num % 5 == 0
#   str << num.to_s if str.length <= 0
#   results << str
# end

# p results

# .each allows us to do something for every element of an array

# in ruby there are no conepts of functions, if we wanted to execute a piece of code multiple times... we use blocks. We can pass blocks as an argument to a method

# arr3 = [1,2,3,4,5,6]

# # .each method accepts a block as a argument... it will execute this block for every element in the array
# arr3.each { |n| p n } # we can define a block using curly braces

# arr3.each do |n| # we can define a block using the do...end statement
#   p n
# end

# arr4 = [1,2,3,4,5]
# arr5 = Array(1..5) # [1,2,3,4,5] does the same thing :D

# arr4.each do |n|
#   p n**2
# end

# arr6 = [[1,2,3], [4,5,6], [7,8,9]]
# arr6.each do |a|
#   a.each do |n|
#     p n**2
#   end
# end

# arr6.flatten.each do |n|
#   p n**2
# end

# .map 
# .map will do something on every element of an array and return a new array containing the result

arr7 = [1,2,3,4,5,6]
arr8 = arr7.map do |n|
  n * 2
end

# if we want the index while we're mapping we can call .with_index before the block
arr9 = arr7.map.with_index do |n, i|
  n * i 
end
# p arr9

# in ruby everything is an object... array.map will return an enumerable object which is similar to an array but it has a .with_index method... that we can call to get an index

p arr7.map.class # we can use the .class method to get the type of the object. In this case, arr7.map returns to us the Enumerator class/type/object

