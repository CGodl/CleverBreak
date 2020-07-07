class NewUserMailer < ApplicationMailer
  default from: "signup@cleverbreak.com"

  def signup_confirmation(user)
    @user = user
    @greeting = `Hi #{user}`
  end
  
  # def invite_friend
  #   @greeting = "Hi"
    
  #   @email_text = `Hello there, #{user} has just invited you to join Cleverbreak.`
  #   mail to: "to@example.org", subjec
  # end

  
    # def newFriend(user)
    #   @user = user
    #   @email_text = `Hello there, #{user} has just invited you to join Cleverbreak.`
    # end
    
  
  
  
  # end



end
