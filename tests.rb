require 'html-proofer'

# Validate using HTMLProofer
HTMLProofer.check_directory("./_site",
{
    :check_favicon => true,
    :check_html => true,
    
}).run