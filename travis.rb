require 'w3c_validators'
require 'html-proofer'

include W3CValidators

@validator = FeedValidator.new

urlToCheck = ARGV[0]

results = @validator.validate_uri(urlToCheck)

if results.errors.length > 0
  results.errors.each do |err|
    puts err.to_s
  end
else
  puts 'Valid!'
end

HTMLProofer.check_link(urlToCheck).run