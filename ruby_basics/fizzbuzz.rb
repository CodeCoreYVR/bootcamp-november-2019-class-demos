# fizzbuzz
for number in 1..100
  if number % 3 == 0 && number % 5 == 0
    puts "FIZZBUZZ"
  elsif number % 3 == 0
    puts "FIZZ"
  elsif number % 5 == 0
    puts "BUZZ"
  else
    puts number
  end
end

number_1 = 3
number_2 = 5
for number in 1..100
  result = ""
if number % number_1 == 0 && number % number_2 == 0
  result += "FIZZBUZZ"
  puts result
elsif number % number_1 == 0
    result += "FIZZ"
    puts result
  elsif number % number_2 == 0
    result += "BUZZ"
    puts result
  else
    puts number
  end
end

# Making it better

for number in 1..100
  result = ""
  result += "FIZZ" if number % 3 == 0
  result += "BUZZ" if number % 5 == 0
  if result.empty?
    puts number 
  else
    puts result
  end
end
