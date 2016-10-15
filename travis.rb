require 'w3c_validators'
require 'html-proofer'
# Setup for W3CValidators
include W3CValidators
@validator = FeedValidator.new

# Colourisation!
class String
def cyan;           "\e[36m#{self}\e[0m" end
def green;          "\e[32m#{self}\e[0m" end
end

urlToCheck = ARGV[0]

results = @validator.validate_uri(urlToCheck)

if results.errors.length > 0
  results.errors.each do |err|
    puts err.to_s
  end
else
  puts 'Syntax Valid!'.cyan
  puts 'Checking links...'.green
end

HTMLProofer.check_links([urlToCheck]).run